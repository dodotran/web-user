'use client'

import { Input } from '@/libs/components/Form'
import { useGetMe } from '@/libs/hooks'
import { updateInformation } from '@/service/user.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { UpdateUserInputSchema, UpdateUserInputType } from './type'

export function ProfileForm() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { data } = useGetMe()

  const { handleSubmit, control } = useForm<UpdateUserInputType>({
    defaultValues: {
      email: '',
      name: '',
    },
    values: {
      email: data?.email,
      name: data?.name ?? '',
    },
    resolver: zodResolver(UpdateUserInputSchema),
  })

  const { mutate } = useMutation({
    mutationFn: updateInformation,
    onSuccess: () => {
      toast.success('Cập nhật thành công')
    },
    onError: () => {
      toast.error('Cập nhật thất bại')
    },
  })

  const onSubmit: SubmitHandler<UpdateUserInputType> = (formData) => {
    if (data.id) {
      mutate({
        ...formData,
        id: data.id,
      })
    }
  }

  return (
    <Stack
      sx={{
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginX: 'auto',
      }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        width={{
          xs: '100%',
          sm: 400,
          md: 500,
          lg: 600,
        }}
      >
        <Input name="email" control={control} fullWidth placeholder="Email" autoComplete="email" disabled />

        <Input name="name" control={control} fullWidth placeholder="Họ và tên" autoComplete="name" />

        <Stack direction="row" spacing={3}>
          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
