import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../../assets/images/Logo.png'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import authApi from 'src/api/authApi'
import { jwtDecode } from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { saveToken } from 'src/utils/tokenStorage'

const LoginScreen = () => {
  const navigation = useNavigation() as any

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await authApi.login({ username, password })
      const token = response.data.data.token
      await saveToken(token)
      const decodedToken: any = jwtDecode(token)
      const name = decodedToken.name
      const usernameFromToken = decodedToken.username
      await AsyncStorage.setItem('userName', name)
      Toast.show({
        type: 'success',
        text1: 'Đăng nhập thành công',
      })
      navigation.navigate('Home')
    } catch (error: any) {
      const msg = error?.response?.data?.message || error?.message || 'Đăng nhập thất bại.'
      Toast.show({
        type: 'error',
        text1: 'Username hoặc mật khẩu không đúng',
      })
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.innerContainer}
        >
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>Japanese Learn</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#666"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={styles.note}>
              Chưa có tài khoản?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
                Đăng ký tại đây
              </Text>
            </Text>
            <Text style={styles.note}>
              Quên mật khẩu?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
                Khôi phục mật khẩu
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
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
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#444',
    fontSize: 14,
  },
  link: {
    color: '#4a4e69',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
})
