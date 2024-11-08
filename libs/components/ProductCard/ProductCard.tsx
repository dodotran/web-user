'use client'

import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PreviewModal } from './PreviewModal'
import { ProductCardContainer } from './styled'

export const ProductCard = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const router = useRouter()

  return (
    <ProductCardContainer>
      <Stack gap={2}>
        <Box>
          <Image
            src="https://product.hstatic.net/200000719085/product/81_44beb0c7734440d28f3706a1344b727f_large.jpg"
            width={400}
            height={400}
            style={{
              objectFit: 'contain',
              width: '100%',
              aspectRatio: '1 / 2.5',
            }}
            alt="card-product"
          />

          <IconButton onClick={handleOpen}>
            <VisibilityIcon />
          </IconButton>
        </Box>

        <Stack>
          <Typography color="mono.200" fontSize={12}>
            LATIN
          </Typography>

          <Typography fontSize={16}>Set Songoku</Typography>
        </Stack>
      </Stack>

      <Stack onClick={() => router.push('/products/1')}>
        <Typography fontSize={16} fontWeight={700}>
          Giá cho thuê: 200.000đ
        </Typography>
        <Typography fontSize={16} fontWeight={700}>
          Giá membership: 200.000đ
        </Typography>
        <Typography fontSize={16} fontWeight={700}>
          Giá store: 200.000đ
        </Typography>
      </Stack>

      <PreviewModal open={open} handleClose={handleClose} />
    </ProductCardContainer>
  )
}
