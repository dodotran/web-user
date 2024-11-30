'use client'

import { Input } from '@/libs/components/Form'
import { ModalCustom } from '@/libs/components/Modal'
import { useGetMe } from '@/libs/hooks'
import { getFeedbackById } from '@/service/product.service'
import { feedbackRental } from '@/service/rental.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Rating, Stack } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FeedbackInputSchema, FeedbackInputType } from '../type'

interface ModalReportProps {
  open: boolean
  handleClose: () => void
  rentalId: string
}

export const ModalFeedback: React.FC<ModalReportProps> = ({ handleClose, open, rentalId }) => {
  const { data: meData } = useGetMe()
  const queryClient = useQueryClient()

  const { control, handleSubmit, reset } = useForm<FeedbackInputType>({
    defaultValues: {
      comment: '',
      rentalId,
      rating: 0,
    },
    resolver: zodResolver(FeedbackInputSchema),
  })

  const { mutate } = useMutation({
    mutationFn: feedbackRental,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', rentalId],
      })
      toast.success('Đánh giá thành công')
      reset()
    },
    onError: () => {
      toast.error('Đánh giá thất bại')
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

  const { data: reviews } = useQuery({
    queryKey: ['reviews', rentalId],
    queryFn: () => getFeedbackById(rentalId),
  })

  return (
    <ModalCustom onClose={handleClose} open={open}>
      <Stack gap={2} component="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Hiển thị danh sách đánh giá */}
        <Stack gap={2} maxHeight="400px" overflow="auto">
          {reviews &&
            reviews.map((review) => (
              <Stack
                key={review.id}
                direction="row"
                alignItems="center"
                gap={2}
                sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}
              >
                {/* Hiển thị số sao */}
                <Rating value={review.rating} readOnly size="small" />
                <Stack>
                  {/* Bình luận của người dùng */}
                  <strong>{review.comment}</strong>
                  <span style={{ fontSize: '0.875rem', color: '#666' }}>
                    Ngày: {new Date(review.createdAt).toLocaleDateString('vi-VN')}
                  </span>

                  {/* Phản hồi từ admin (nếu có) */}
                  {review.adminResponse && (
                    <Stack
                      sx={{
                        mt: 1,
                        p: 1,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        backgroundColor: '#f9f9f9',
                        width: '100%',
                      }}
                    >
                      <strong>Phản hồi từ admin:</strong>
                      <span style={{ fontSize: '0.875rem', color: '#333' }}>{review.adminResponse}</span>
                      <span style={{ fontSize: '0.75rem', color: '#666' }}>
                        Ngày phản hồi: {review.replyDate ? new Date(review.replyDate).toLocaleDateString('vi-VN') : '-'}
                      </span>
                    </Stack>
                  )}
                </Stack>
              </Stack>
            ))}
        </Stack>

        {/* Form thêm đánh giá */}

        <Stack direction="column" alignItems="center" gap={2} border="1px solid #ddd" p={2} borderRadius={2}>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <Rating {...field} size="large" onChange={(_, newValue) => field.onChange(newValue)} />
            )}
          />
          <Input control={control} label="Nội dung" name="comment" fullWidth />
        </Stack>

        <Button
          sx={{
            fontWeight: 700,
            flex: 1,
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: 0,
          }}
          type="submit"
        >
          Đánh giá
        </Button>
      </Stack>
    </ModalCustom>
  )
}
