'use client'

import { EquipmentType } from '@/features'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductDetailModal from '../ProductDetailModal'

export const ProductCard = (product: EquipmentType) => {
  const [openDetail, setOpenDetail] = React.useState(false)

  return (
    <Paper
      sx={{
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            '& img': {
              transition: 'transform 0.4s ease-in-out',
              willChange: 'transform',
            },
            '&:hover img': {
              transform: 'scale(1.05)',
            },
            '& > button': {
              visibility: 'hidden',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out, visibility 0s linear 0.3s',
            },
            '&:hover > button': {
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity 0.3s ease-in-out, visibility 0s linear 0s',
            },
          }}
        >
          <Image
            src="https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
            alt={product.name}
            width={4}
            height={4}
            layout="responsive"
          />
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              ':hover': {
                backgroundColor: 'white',
              },
            }}
            onClick={() => setOpenDetail(true)}
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 400, color: '#ccc', marginY: 2 }}>
          Loại thiết bị {product.categoryId}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, cursor: 'pointer' }}>
          {product.name}
        </Typography>
        <Typography variant="body1">Giá thuê ngày: {product.pricePerDay}</Typography>
        <Typography variant="body1">Giá thuê tuần: {product.pricePerWeek}</Typography>
        <Typography variant="body1">Giá thuê tháng: {product.pricePerMonth}</Typography>
      </Box>

      <ProductDetailModal open={openDetail} handleClose={() => setOpenDetail(false)} product={product} />
    </Paper>
  )
}
