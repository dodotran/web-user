'use client'

import { EquipmentType } from '@/features'
import { base } from '@/libs/configs'
import { formatMoney } from '@/utils'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductDetailModalProps {
  open: boolean
  handleClose: () => void
  product: EquipmentType
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ open, handleClose, product }) => {
  const router = useRouter()

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* Close Button */}
        <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>

        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, flex: 1 }}>
            <Image
              src="https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
              alt={product.name}
              width={400}
              height={400}
              objectFit="cover"
              layout="responsive"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              flex: 1,
            }}
          >
            {/* Product Info Section */}
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Mã sản phẩm: {product.id}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Tình trạng: <span style={{ fontWeight: 600 }}>còn hàng</span>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Thương hiệu: OXD
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              Giá thuê ngày:{' '}
              <Typography component="span" fontSize={20} fontWeight={700}>
                {formatMoney(product.pricePerDay)}
              </Typography>
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              Giá thuê tuần:{' '}
              <Typography component="span" fontSize={20} fontWeight={700}>
                {formatMoney(product.pricePerWeek)}
              </Typography>
            </Typography>
            <Typography variant="body1" fontWeight={600} sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              Giá thuê tháng:{' '}
              <Typography component="span" fontSize={20} fontWeight={700}>
                {formatMoney(product.pricePerMonth)}
              </Typography>
            </Typography>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                Số lượng:
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 0,
                  padding: 1,
                  backgroundColor: '#f3f4f4',
                  minWidth: '30px',
                  height: '30px',
                  borderColor: '#f3f4f4',
                }}
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </Button>
              <Typography sx={{ mx: 2, border: '1px solid #f3f4f4' }}>{quantity}</Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 0,
                  padding: 1,
                  backgroundColor: '#f3f4f4',
                  minWidth: '30px',
                  height: '30px',
                  borderColor: '#f3f4f4',
                }}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </Box> */}
            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mb: 2, backgroundColor: base.primary, color: base.white }}
              onClick={() => router.push(`/products/${product.id}`)}
            >
              Xem chi tiết
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ProductDetailModal
