import axios from 'axios'

const API_BASE_URL = 'http://10.0.2.2:9999'

export interface RegisterDto {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  address: string
  gender?: string
  birthday?: string
}

export interface FormLogin {
  username: string
  password: string
}

export interface OtpDto {
  email: string
  otp: string
}

export interface ResendOtpDto {
  email: string
}

export interface VerifyForgotPassword {
  email: string
  resetOtp: string
}

export interface JwtResponse {
  token: string
}

export interface ResponseWrapper<T> {
  status: string
  code: number
  data: T
}

export interface MessageResponse {
  message: string
}

export interface ResetPassword {
  email: string
  newPassword: string
  confirmNewPassword: string
}

const authApi = {
  register: async (data: RegisterDto) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/register`, data)
  },

  verifyOtp: async (data: OtpDto) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/verify`, data)
  },

  resendOtp: async (data: ResendOtpDto) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/resend-otp`, data)
  },

  login: async (data: FormLogin) => {
    return axios.post<ResponseWrapper<JwtResponse>>(`${API_BASE_URL}/auth/login`, data)
  },
  resendOtpForgotPassword: async (data: ResendOtpDto) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/resend-otp/forgot-password`, data)
  },
  verifyForgotPassword: async (data: VerifyForgotPassword) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/verify/forgot-password`, data)
  },
  resetPassword: async (data: ResetPassword) => {
    return axios.post<MessageResponse>(`${API_BASE_URL}/auth/reset-password`, data)
  },
}

export default authApi
