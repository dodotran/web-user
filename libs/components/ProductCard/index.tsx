import { formatMoney } from '@/utils'
import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function ProductCard({ product }: { product: any }) {
  return (
    <Paper sx={{
      boxShadow: 1,
    }}>
      <Box sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
          ":hover": {
            transform: 'scale(1.05)',
            transition: 'all 0.5s ease',
          }
        }}>
          <Image src={product.image} alt={product.name} width={4}
            height={4} layout="responsive" />
        </Box>
        <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 400, color: '#ccc', marginY: 2 }}>Loại thiết bị</Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, cursor: 'pointer' }} >{product.name}</Typography>
        <Typography variant="body1">Giá thuê ngày: {formatMoney(product.priceDay)}</Typography>
        <Typography variant="body1">Giá thuê tuần: {formatMoney(product.priceWeek)}</Typography>
        <Typography variant="body1">Giá thuê tháng: {formatMoney(product.priceMonth)}</Typography>
      </Box>
    </Paper>
  )
}

export default ProductCard