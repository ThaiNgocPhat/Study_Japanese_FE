import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import LoginScreen from '@screens/LoginScreen'
import RegisterScreen from '@screens/RegisterScreen'
import VerifyScreen from '@screens/VerifyScreen'
import HomeScreen from '@screens/HomeScreen'
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen'
import VerifyForgotPasswordScreen from '@screens/VerifyForgotPasswordScreen'
import ResetPasswordScreen from '@screens/ResetPasswordScreen'
const Stack = createNativeStackNavigator<RootStackParamList>()

interface RoutersProps {
  initialRouteName: keyof RootStackParamList
}

export default function Routers({ initialRouteName }: RoutersProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verify" component={VerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyForgotPassword"
          component={VerifyForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
