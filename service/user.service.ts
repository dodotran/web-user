import { UpdateIntentInputType, UpdateUserInputType } from '@/features/profile/type'
import request from '@/libs/configs/axios/axios'

export const updateInformation = async (data: UpdateUserInputType & { id: string }) => {
  const { id, ...res } = data
  const response = await request.patch(`/users/${id}`, res)

  return response.data
}

export const updateIdentityDoc = async (data: UpdateIntentInputType) => {
  const response = await request.patch('/users/update/identity-doc', data)

  return response.data
}
