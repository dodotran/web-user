export type CategoryType = {
  id: string
  name: string
  description: string | null
  priceDay: number | null
  priceWeek: number | null
  priceMonth: number | null
  createdAt: string
  updatedAt: string
}

export type CategoriesResponse = {
  data: CategoryType[]
}

export type DeviceType = {
  cartId: string
  categoryId: string
  createdAt: string
  description: string
  id: string
  image: string
  name: string
  priceDay: number
  priceMonth: number
  priceWeek: number
  status: string
  updatedAt: string
}

export type DeviceResponseType = {
  data: DeviceType[]
}
