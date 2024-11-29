'use client'

import { Input } from '@/libs/components/Form'
import { ModalCustom } from '@/libs/components/Modal'
import { base } from '@/libs/configs'
import { useGetMe } from '@/libs/hooks'
import { feedbackRental } from '@/service/rental.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FeedbackInputSchema, FeedbackInputType } from '../type'

interface ModalReportProps {
  open: boolean
  handleClose: () => void
  rentalId: string
}

export const ModalFeedback: React.FC<ModalReportProps> = ({ handleClose, open, rentalId }) => {
  const { data: meData } = useGetMe()

  const { control, handleSubmit, reset } = useForm<FeedbackInputType>({
    defaultValues: {
      comment: '',
      rentalId,
      rating: 5,
    },
    resolver: zodResolver(FeedbackInputSchema),
  })

  const { mutate } = useMutation({
    mutationFn: feedbackRental,
    onSuccess: () => {
      toast.success('Feedback thành công')
      handleClose()
      reset()
    },
    onError: () => {
      toast.error('Feedback hỏng thất bại')
    },
  })

  const onSubmit: SubmitHandler<FeedbackInputType> = (data) => {
    if (meData.id) {
      mutate({
        ...data,
        userId: meData.id,
      })
    }
  }

  return (
    <ModalCustom onClose={handleClose} open={open}>
      <Stack gap={2} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} label="comment" name="comment" fullWidth />

        <Button
          sx={{
            fontWeight: 700,
            flex: 1,
            backgroundColor: base.primary,
            color: base.white,
            borderRadius: 0,
          }}
          type="submit"
        >
          Feedback
        </Button>
      </Stack>
    </ModalCustom>
  )
}
