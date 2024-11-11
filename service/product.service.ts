import { DeviceType } from '@/features'
import axiosClient from '.'

export function getAllDevice() {
  const response = axiosClient.get<DeviceType[]>(`device`)

  return response
}
