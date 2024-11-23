export type CategoryType = {
  id: string
  name: string
  description: string | null
}

export type CategoriesResponse = {
  data: CategoryType[]
}

export type EquipmentType = {
  id: string
  name: string
  image: string
  description: string
  pricePerDay: number
  pricePerWeek: number
  pricePerMonth: number
  stock: number
  categoryId: string
  createdAt: string
  updatedAt: string
  category: CategoryType
}

export type EquipmentResponseType = {
  data: EquipmentType[]
}

export type EquipmentDetailType = {
  data: EquipmentType
}
