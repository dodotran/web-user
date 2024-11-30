import { z } from 'zod'

export type RentalItemType = {
  id: string
  rentalId: string
  equipmentId: string
  packageId: string | null
  quantity: number
  durationType: 'day' | 'week' | 'month'
  durationValue: number
  price: number
  createdAt: string
  updatedAt: string
}

export type RentalType = {
  id: string
  userId: string
  totalAmount: number
  startDate: string
  endDate: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
  updatedAt: string
  items: RentalItemType[]
  feedbacks: unknown[]
}

export type RentalResponseType = {
  data: RentalType[]
}

export const FeedbackInputSchema = z.object({
  rating: z.number().min(0).max(5, 'Rating phải từ 1 đến 5'),
  comment: z.string().min(1, 'Ghi chú không được để trống'),
  userId: z.string().min(1, 'User ID không hợp lệ').optional(),
  rentalId: z.string().min(1, 'Rental ID không hợp lệ').optional(),
})

export type FeedbackInputType = z.infer<typeof FeedbackInputSchema>

export const DamageReportInputSchema = z.object({
  equipmentId: z.string().min(1, 'Equipment ID không hợp lệ'),
  image: z.string().min(1, 'Ảnh không được để trống'),
  description: z.string().min(1, 'Mô tả không được để trống'),
})

export type DamageReportInputType = z.infer<typeof DamageReportInputSchema>

export type FeedbackType = {
  id: string
  rating: number
  comment: string
  adminResponse: string | null
  replyDate: string | null // ISO format string
  userId: string
  rentalId: string
  createdAt: string // ISO format string
  updatedAt: string // ISO format string
}

export type FeedbackByRentalIdResponseType = {
  data: FeedbackType[]
}
