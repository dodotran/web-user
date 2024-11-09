import { formatMoney } from '@/utils'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ProductDetailModal from '../ProductDetailModal';

function ProductCard({ product }) {
  const [openDetail, setOpenDetail] = React.useState(false)
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
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
          "& img": {
            transition: 'transform 0.4s ease-in-out', // Đặt transition ở trạng thái gốc
            willChange: 'transform',
          },
          "&:hover img": {
            transform: 'scale(1.05)', // Hiệu ứng scale khi hover
          },
          "& > button": {
            visibility: 'hidden',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out, visibility 0s linear 0.3s', // Đặt transition ở trạng thái gốc
          },
          "&:hover > button": {
            visibility: 'visible',
            opacity: 1,
            transition: 'opacity 0.3s ease-in-out, visibility 0s linear 0s', // Tạo hiệu ứng xuất hiện khi hover
          }
        }}>
          <Image
            src={product.image}
            alt={product.name}
            width={4}
            height={4}
            layout="responsive"
          />
          <IconButton sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            ":hover": {
              backgroundColor: 'white',
            },
          }}
            onClick={() => setOpenDetail(true)}
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 400, color: '#ccc', marginY: 2 }}>Loại thiết bị</Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, cursor: 'pointer' }} >{product.name}</Typography>
        <Typography variant="body1">Giá thuê ngày: {formatMoney(product.priceDay)}</Typography>
        <Typography variant="body1">Giá thuê tuần: {formatMoney(product.priceWeek)}</Typography>
        <Typography variant="body1">Giá thuê tháng: {formatMoney(product.priceMonth)}</Typography>
      </Box>

      <ProductDetailModal
        open={openDetail}
        handleClose={() => setOpenDetail(false)}
        product={product}
      />
    </Paper>
  )
}

export default ProductCard
