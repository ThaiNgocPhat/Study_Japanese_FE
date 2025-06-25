export type RootStackParamList = {
  Login: undefined
  Register: undefined
  Verify: { email: string }
  Home: { username: string; name: string }
  ForgotPassword: undefined
  VerifyForgotPassword: { email: string }
  ResetPassword: { email: string }
}
