import React, { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'
import Routers from '@navigation/index'
import type { RootStackParamList } from 'src/types/navigation'
import { getToken, removeToken } from 'src/utils/tokenStorage'

export default function App() {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null)

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken()
      if (token) {
        try {
          const decoded: any = jwtDecode(token)
          const isExpired = decoded.exp * 1000 < Date.now()
          if (!isExpired) {
            setInitialRoute('Home')
            return
          } else {
            await removeToken()
          }
        } catch (e) {
          await removeToken()
        }
      }
      setInitialRoute('Login')
    }

    checkToken()
  }, [])

  if (!initialRoute) return null

  return (
    <>
      <Routers initialRouteName={initialRoute as keyof RootStackParamList} />
      <Toast />
    </>
  )
}
