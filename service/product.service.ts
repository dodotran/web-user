import axiosClient from '.'

export function getAllDevice() {
  return axiosClient.get(`device`)
}
