import { DatePicker, Input, Select } from '@/libs/components/Form'
import { clearCart } from '@/service/cart.service'
import { getDiscountById } from '@/service/discount.service'
import { createRental } from '@/service/rental.service'
import { formatMoney } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, Divider, Stack, TextField, Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PayPalButton } from 'react-paypal-button-v2'
import { toast } from 'sonner'
import { durationOptions } from '../product/option'
import { CartInputSchema, CartInputType, CartType } from './type'
import { calculateEndDate, calculatorAmount } from './utils'

interface OrderInfoProps {
  cart: CartType
}

const OrderInfo = ({ cart }: OrderInfoProps) => {
  const queryClient = useQueryClient()
  const { control, watch, setValue, handleSubmit, reset } = useForm<CartInputType>({
    defaultValues: {
      endDate: '',
      items: [],
      startDate: new Date().toISOString(),
      totalAmount: 0,
      durationType: 'day',
      durationValue: 1,
      address: '',
    },
    resolver: zodResolver(CartInputSchema),
  })

  const durationType = watch('durationType')
  const durationValue = watch('durationValue')
  const startDate = watch('startDate')

  useEffect(() => {
    if (durationType && durationValue && startDate) {
      const formattedStartDate = new Date(startDate)

      if (isNaN(formattedStartDate.getTime())) {
        console.error('Ngày bắt đầu không hợp lệ')
        return
      }

      const calculatedEndDate = calculateEndDate({
        startDate: formattedStartDate.toISOString(),
        durationType,
        durationValue,
      })

      setValue('endDate', calculatedEndDate)
    }
  }, [durationType, durationValue, startDate])

  useEffect(() => {
    if (cart) {
      if (cart?.totalAmountDay && cart?.totalAmountMonth && cart?.totalAmountWeek) {
        const total = calculatorAmount({
          durationType,
          durationValue,
          totalAmountDay: cart?.totalAmountDay,
          totalAmountWeek: cart?.totalAmountWeek,
          totalAmountMonth: cart?.totalAmountMonth,
        })

        setValue('totalAmount', total)
      }
    }
  }, [durationType, durationValue, cart])

  const { mutate, isPending } = useMutation({
    mutationFn: createRental,
    onSuccess: async () => {
      await clearCart().then(() => {
        queryClient.invalidateQueries({ queryKey: ['Carts'] })
      })
      reset()
      toast.success('Tạo đơn thuê thành công')
    },
    onError: (error) => {
      console.error('Error creating rental:', error)
      toast.error('Tạo đơn thuê thất bại')
    },
  })

  const onSubmit: SubmitHandler<CartInputType> = (data) => {
    const { totalAmount, durationType, durationValue, startDate, endDate, address } = data

    mutate({
      startDate,
      endDate,
      totalAmount,
      address,
      items: cart.items.map((item) => ({
        equipmentId: item.equipmentId,
        packageId: item.packageId,
        quantity: item.quantity,
        durationType: durationType,
        durationValue: Number(durationValue),
        price: data.totalAmount,
      })),
    })
  }

  const isEmptyCart = cart?.items?.length === 0

  const inputRef = useRef<HTMLInputElement>(null)

  const { refetch } = useQuery({
    queryKey: ['Discounts'],
    queryFn: () => getDiscountById(inputRef.current?.value || ''),
    enabled: false,
  })

  const handlePaste = async (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault() // Prevent the default paste behavior

    const pasteData = event.clipboardData.getData('text')
    if (inputRef.current) {
      inputRef.current.value = pasteData // Update the input value
    }

    try {
      const { data: discountData } = await refetch()
      if (discountData && discountData.discountRate) {
        const totalAmount = watch('totalAmount')

        // Validate discountRate to avoid division by zero or invalid values
        const discountRate = discountData.discountRate > 0 ? discountData.discountRate : 1
        const newTotalAmount = totalAmount - (totalAmount * discountRate) / 100

        setValue('totalAmount', newTotalAmount)
        toast.success('Áp dụng mã giảm giá thành công')
      } else {
        toast.error('Không tìm thấy mã giảm giá hoặc mã giảm giá không hợp lệ')
      }
    } catch (error) {
      console.error('Error fetching discount:', error)
      toast.error('Có lỗi xảy ra khi áp dụng mã giảm giá')
    }
  }

  const total = Math.floor(watch('totalAmount') / 24000)

  return (
    <Card sx={{ borderRadius: 2, mb: 2 }}>
      <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Thông tin đơn hàng
        </Typography>

        <Stack spacing={2}>
          <DatePicker
            control={control}
            name="startDate"
            label="Ngày bắt đầu"
            fullWidth
            disabled={isEmptyCart || isPending}
          />
          <DatePicker control={control} name="endDate" label="Ngày kết thúc" fullWidth disabled />
          <Select
            name="durationType"
            control={control}
            options={durationOptions}
            label="Loại thời gian"
            fullWidth
            hiddenEmpty
            disabled={isEmptyCart || isPending}
          />
          <Input
            control={control}
            name="durationValue"
            label="Thời lượng"
            type="number"
            fullWidth
            disabled={isEmptyCart || isPending}
          />

          <Input control={control} name="totalAmount" type="number" fullWidth disabled sx={{ display: 'none' }} />

          <Input control={control} name="address" fullWidth label="Địa chỉ nhận hàng" />

          <TextField
            inputRef={inputRef}
            fullWidth
            onPaste={handlePaste}
            placeholder="Dán mã giảm giá"
            inputProps={{
              readOnly: true,
            }}
          />

          <Divider sx={{ mb: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
            Tổng tiền: <strong style={{ color: 'red' }}>{formatMoney(watch('totalAmount'))}</strong>
          </Typography>
          <ul>
            <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
            <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
          </ul>

          <Stack direction="row" spacing={6}>
            <Stack width={800} bgcolor="base.white" borderRadius={1} spacing={3}>
              <Typography fontSize={20} fontWeight={700}>
                Phương thức thanh toán online
              </Typography>

              <PayPalButton
                amount={total}
                onSuccess={() => {
                  handleSubmit(onSubmit)()
                }}
                onError={() => {
                  toast.error('Thanh toán thất bại')
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OrderInfo
