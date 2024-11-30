'use client'

import { getDeviceById } from '@/service/product.service'
import { Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { NewRelease } from '../home/components'
import { ProductInformation } from './components'
import { FAQComponent } from './components/ProductInformation/FAQ'

export const ProductDetail = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () => getDeviceById(String(id)),
  })

  return (
    <Stack
      px={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
      }}
      spacing={4}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          marginTop: 3,
          py: 1,
          color: 'black',
          fontSize: {
            xs: '12px',
            sm: '14px',
          },
          fontWeight: 400,
          borderTop: '1px solid #DDDD',
          borderBottom: '1px solid #DDDD',
        }}
      >
        <Link underline="none" color="black" href="/">
          Trang chủ
        </Link>
        <Typography sx={{ color: 'black', fontSize: 'inherit', fontWeight: 400 }}>Chi tiết sản phẩm</Typography>
        <Typography sx={{ color: 'black', fontSize: 'inherit', fontWeight: 400 }}>{data?.name}</Typography>
      </Breadcrumbs>

      <Stack
        direction={{
          xs: 'column',
          lg: 'row',
        }}
        spacing={{
          xs: 2,
          sm: 4,
        }}
      >
        <Image
          src={data?.image ?? 'https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg'}
          alt={data?.name ?? 'image'}
          width={500}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 500,
            flex: 1,
            borderRadius: '8px',
          }}
        />

        <ProductInformation {...data} />
      </Stack>

      <Stack p={2} spacing={1} bgcolor="white">
        <Typography variant="h6" fontWeight={600}>
          Mô tả sản phẩm
        </Typography>
        <Divider />
        <Typography>{data?.description}</Typography>
      </Stack>

      <FAQComponent />

      <NewRelease />
    </Stack>
  )
}
