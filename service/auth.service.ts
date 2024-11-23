import { LoginInputType, LoginResponseType } from '@/features/auth/type'
import axiosClient from '.'

export const login = async (input: LoginInputType) => {
  const response = await axiosClient.post<LoginResponseType>('auth/login', input)

  return response.data
}
