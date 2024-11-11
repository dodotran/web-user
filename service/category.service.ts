import { CategoryType } from '@/features'
import axiosClient from '.'

export const getCategries = () => {
  const response = axiosClient.get<CategoryType[]>('/categories')

  return response
}
