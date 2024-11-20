'use client'

import { getDiscountPagination } from '@/service/discount.service'
import { getAllDevice } from '@/service/product.service'
import { cartState } from '@/utils/recoil'
import { Box, Breadcrumbs, Divider, Grid, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import CartItem from './CartItem'
import OrderInfo from './OrderInfo'
import RecommendedProducts from './Recommend'
import VoucherSlider from './VoucherList'

const ShoppingCart = () => {
  const [cartList, setCartList] = useRecoilState(cartState)
  const [formFilter, setFormFilter] = useState({
    page: 1,
    limit: 2,
  })

  const { data: discounts, isLoading } = useQuery({
    queryKey: ['allDevice', JSON.stringify(formFilter)],
    queryFn: () => getDiscountPagination(formFilter),
  })

  const { data: products, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['allDevice'],
    queryFn: () => getAllDevice(),
  })

  return (
    <Box sx={{ paddingX: 10 }}>
      <Box sx={{ marginY: 5, borderTop: '1px solid', borderBottom: '1px solid', borderColor: '#ccc' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ paddingY: 1, color: 'black', fontSize: '14px', fontWeight: 400 }}>
          <Link underline="none" color="black" href="/">
            Trang chủ
          </Link>
          <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 400 }}>Giỏ hàng</Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={3}>
        {/* Left Side - Cart Items and Order Notes */}
        <Grid item xs={12} md={8}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Giỏ hàng của bạn
            </Typography>

            <Typography sx={{ mb: 2 }}>
              Bạn đang có <b>{cartList.length ?? 0} sản phẩm</b> trong giỏ hàng
            </Typography>
          </Stack>
          {/* Free Shipping Progress */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Bạn cần mua thêm <strong style={{ color: '#e57373' }}>150,000₫</strong> để được MIỄN PHÍ VẬN CHUYỂN
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  height: 6,
                  backgroundColor: '#e0e0e0',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: '60%', // Adjust width based on amount
                    height: '100%',
                    backgroundColor: '#FFD700',
                  }}
                />
              </Box>
            </Box>
          </Box> */}
          {/* Cart Items */}
          {cartList?.map((item) => (
            <Box key={item?.id}>
              <CartItem cart={item} />
              <Divider sx={{ my: 1 }} />
            </Box>
          ))}

          <Paper sx={{ padding: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Ghi chú đơn hàng
            </Typography>
            <TextField placeholder="Ghi chú đơn hàng" multiline rows={4} fullWidth variant="outlined" />
          </Paper>

          <RecommendedProducts products={products?.data} />
        </Grid>

        <Grid item xs={12} md={4}>
          <OrderInfo total="850,000₫" />
          <VoucherSlider vouchers={discounts?.data ?? []} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShoppingCart
