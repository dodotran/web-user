'use client'

import { UploadImage } from '@/libs/components/Form/UploadImg'
import { updateIdentityDoc } from '@/service/user.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { UpdateIntentInputSchema, UpdateIntentInputType } from './type'

export const IntentityDoc = () => {
  const { mutate } = useMutation({
    mutationFn: updateIdentityDoc,
    onSuccess: () => {
      toast.success('Cập nhật thành công')
    },
    onError: () => {
      toast.error('Cập nhật thất bại')
    },
  })

  const { control, handleSubmit } = useForm<UpdateIntentInputType>({
    defaultValues: {
      identityDoc: '',
    },
    resolver: zodResolver(UpdateIntentInputSchema),
  })

  const onSubmit: SubmitHandler<UpdateIntentInputType> = (data) => {
    mutate(data)
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
        <UploadImage control={control} name="identityDoc" content="Ảnh chứng minh nhân dân" />

        <Stack direction="row" spacing={3}>
          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
