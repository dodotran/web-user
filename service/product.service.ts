import { EquipmentDetailType, EquipmentResponseType } from '@/features'
import axiosClient from '.'

export async function getAllDevice() {
  const response = await axiosClient.get<EquipmentResponseType>(`/equipments/all/pagination`)

  return response.data.data
}

export async function getDeviceById(id: string) {
  const response = await axiosClient.get<EquipmentDetailType>(`/equipments/get-by/${id}`)

  return response.data.data
}
