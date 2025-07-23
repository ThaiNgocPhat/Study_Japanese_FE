import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import { Formik } from 'formik'
import { registerValidationSchema } from 'src/validators/registerValidationSchema'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { LinearGradient } from 'expo-linear-gradient'
import authApi from 'src/api/authApi'
import Toast from 'react-native-toast-message'

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          <View style={styles.formWrapper}>
            <Text style={styles.title}>Tạo tài khoản</Text>

            <Formik
              initialValues={{
                name: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                address: '',
                gender: '',
                birthday: '',
              }}
              validationSchema={registerValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const response = await authApi.register(values)
                  Toast.show({
                    type: 'success',
                    text1: 'Đăng ký thành công',
                    text2: response.data.message,
                  })
                  navigation.navigate('Verify', { email: values.email })
                } catch (error: any) {
                  const msg =
                    error?.response?.data?.message || 'Đã có lỗi xảy ra, vui lòng thử lại.'
                  Toast.show({
                    type: 'error',
                    text1: 'Đăng ký thất bại',
                    text2: msg,
                  })
                } finally {
                  setSubmitting(false)
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Họ và tên"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                  <TextInput
                    style={styles.input}
                    placeholder="Tên đăng nhập"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                  {touched.username && errors.username && (
                    <Text style={styles.error}>{errors.username}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                  />
                  {touched.address && errors.address && (
                    <Text style={styles.error}>{errors.address}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Giới tính (Male/Female/Other)"
                    onChangeText={handleChange('gender')}
                    onBlur={handleBlur('gender')}
                    value={values.gender}
                  />
                  {touched.gender && errors.gender && (
                    <Text style={styles.error}>{errors.gender}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    placeholder="Ngày sinh (yyyy-MM-dd)"
                    onChangeText={handleChange('birthday')}
                    onBlur={handleBlur('birthday')}
                    value={values.birthday}
                  />
                  {touched.birthday && errors.birthday && (
                    <Text style={styles.error}>{errors.birthday}</Text>
                  )}
                  <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                  </TouchableOpacity>
                  <Text style={styles.note}>
                    Đã có tài khoản?{' '}
                    <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                      Đăng nhập tại đây
                    </Text>
                  </Text>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    flexGrow: 1,
  },
  formWrapper: {
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    color: '#4a4e69',
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#d3e0dc',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
    backgroundColor: '#fcefe3',
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#88c9bf',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
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
