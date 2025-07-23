import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import authApi from 'src/api/authApi'
import Toast from 'react-native-toast-message'
import { LinearGradient } from 'expo-linear-gradient'

const VerifyForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [resetOtp, setResetOtp] = useState('')
  const route = useRoute<any>()
  const email = route.params?.email

  const handleVerifyForgotPassword = async () => {
    try {
      const res = await authApi.verifyForgotPassword({ email, resetOtp })
      Toast.show({
        type: 'success',
        text1: 'Xác thực thành công',
        text2: res.data.message,
      })
      navigation.navigate('ResetPassword', { email })
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Xác thực thất bại'
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: msg,
      })
    }
  }

  const handleResendOtpForgotPassword = async () => {
    try {
      await authApi.resendOtpForgotPassword({ email })
      Toast.show({
        type: 'success',
        text1: 'Đã gửi lại mã OTP',
        text2: 'Vui lòng kiểm tra email của bạn.',
      })
    } catch (error: any) {
      const msg = error?.response?.data?.message || error?.message || 'Gửi lại mã OTP thất bại'
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: msg,
      })
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Text style={styles.title}>Mã OTP khôi phục mật khẩu đã gửi tới email</Text>
      <Text style={styles.email}>{email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Mã OTP"
        keyboardType="number-pad"
        value={resetOtp}
        onChangeText={setResetOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyForgotPassword}>
        <Text style={styles.buttonText}>Xác minh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendOtpForgotPassword}>
        <Text style={styles.resendButtonText}>Gửi lại mã OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Quay lại trang đăng nhập</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default VerifyForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
    color: '#4a4e69',
  },
  email: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#d3e0dc',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: '#fcefe3',
    color: '#333',
  },
  button: {
    backgroundColor: '#88c9bf',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#4a4e69',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  backButton: {
    alignItems: 'center',
    marginTop: 8,
  },
  backButtonText: {
    color: '#4a4e69',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
})
