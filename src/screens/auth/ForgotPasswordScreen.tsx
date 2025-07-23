import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import logo from '../../../assets/images/Logo.png'
import Toast from 'react-native-toast-message'
import authApi from 'src/api/authApi'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [email, setEmail] = useState('')

  const handleSendReset = async () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng nhập email để khôi phục mật khẩu',
      })
      return
    }

    try {
      await authApi.resendOtpForgotPassword({ email })

      Toast.show({
        type: 'success',
        text1: 'Yêu cầu khôi phục đã được gửi!',
        text2: 'Vui lòng kiểm tra email của bạn.',
      })
      navigation.navigate('VerifyForgotPassword', { email })
    } catch (error: any) {
      const statusCode = error?.response?.status
      const serverMsg = error?.response?.data?.message

      let msg = 'Gửi yêu cầu thất bại. Vui lòng thử lại.'

      if (statusCode === 404) {
        msg = 'Email không tồn tại'
      } else if (serverMsg && typeof serverMsg === 'string') {
        msg = serverMsg
      }

      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: msg,
      })
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Japanese Learn</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Nhập email để đặt lại mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleSendReset}>
          <Text style={styles.buttonText}>Gửi yêu cầu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Quay lại trang đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 240,
    height: 240,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4e69',
  },
  content: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#5d7b6f',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#5d7b6f',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  backButton: {
    alignItems: 'center',
    marginTop: 8,
  },
  backButtonText: {
    color: '#5d7b6f',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
})
