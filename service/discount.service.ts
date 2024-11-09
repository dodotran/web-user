import axiosClient from '.'

export function getDiscountPagination(params) {
  return axiosClient.get(`discount/pagination`, {params})
}
