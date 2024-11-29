import { EquipmentDetailType, EquipmentResponseType } from '@/features'
import request from '@/libs/configs/axios/axios'

export async function getAllDevice() {
  const response = await request.get<EquipmentResponseType>(`/equipments/all/pagination`)

  return response.data.data
}

export async function getDeviceById(id: string) {
  const response = await request.get<EquipmentDetailType>(`/equipments/get-by/${id}`)

  return response.data.data
}

export async function getAllPackage() {
  const response = await request.get<EquipmentResponseType>(`/equipments-package/all`)

  return response.data.data
}

export async function getPackageById(id: string) {
  const response = await request.get<EquipmentDetailType>(`/equipments-package/get-by/${id}`)

  return response.data.data
}
