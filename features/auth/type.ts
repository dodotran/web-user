import { z } from 'zod'

// SCHEMA
export const LoginInputSchema = z.object({
  email: z.string().email().min(1),
  password: z.string(),
})

export const RegisterInputSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
  passwordconf: z.string().min(6).max(255),
})

export enum IdentityDocStatus {
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

// TYPE
export type UserType = {
  id: string
  name: string
  email: string
  role: string
  avatar: string
  phoneNumber: string
  dateOfBirth: string
  gender: string
  identityDoc: string
  statusIdentityDoc: IdentityDocStatus | null
}

export type LoginResponseType = {
  user: UserType
  token: string
}

export type MeResponseType = {
  data: UserType
}

export type RegisterInputType = z.infer<typeof RegisterInputSchema>
export type LoginInputType = z.infer<typeof LoginInputSchema>
