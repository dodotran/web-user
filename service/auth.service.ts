import { LoginInputType, LoginResponseType, MeResponseType, RegisterInputType } from '@/features/auth/type'
import request from '@/libs/configs/axios/axios'

export const login = async (input: LoginInputType) => {
  const response = await request.post<LoginResponseType>('auth/login', input)

  return response.data
}

export const getMe = async () => {
  const response = await request.get<MeResponseType>('auth/me')

  return response.data.data
}

export const register = async (input: RegisterInputType) => {
  const response = await request.post('auth/register', input)

  return response.data
}
