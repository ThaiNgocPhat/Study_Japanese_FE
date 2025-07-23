import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import Toast from 'react-native-toast-message'
import authApi from 'src/api/authApi'

const ResetPasswordScreen = () => {
  const route = useRoute<any>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const email = route.params?.email

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng nhập đầy đủ mật khẩu',
      })
      return
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Mật khẩu không khớp',
      })
      return
    }

    try {
      await authApi.resetPassword({
        email,
        newPassword: password,
        confirmNewPassword: confirmPassword,
      })

      Toast.show({
        type: 'success',
        text1: 'Đặt lại mật khẩu thành công',
      })

      navigation.navigate('Login')
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Lỗi đặt lại mật khẩu'
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: msg,
      })
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Text style={styles.title}>Tạo mật khẩu mới</Text>

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu mới"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Xác nhận</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#5d7b6f',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})
