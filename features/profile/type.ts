import { z } from 'zod'

export const UpdateUserInputSchema = z.object({
  name: z.string().min(1, 'Name không được để trống'),
  email: z.string().email('Email không hợp lệ'),
})

export type UpdateUserInputType = z.infer<typeof UpdateUserInputSchema>

export const UpdateIntentInputSchema = z.object({
  identityDoc: z.string().min(1, 'CMND không được để trống'),
})

export type UpdateIntentInputType = z.infer<typeof UpdateIntentInputSchema>
