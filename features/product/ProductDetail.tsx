'use client'

import { getDeviceById } from '@/service/product.service'
import { Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { NewRelease } from '../home/components'
import { ProductInformation } from './components'

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
          fontSize: '14px',
          fontWeight: 400,
          borderTop: '1px solid #DDDD',
          borderBottom: '1px solid #DDDD',
        }}
      >
        <Link underline="none" color="black" href="/">
          Trang chủ
        </Link>
        <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 400 }}>Chi tiết sản phẩm</Typography>
        <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 400 }}>{data?.name}</Typography>
      </Breadcrumbs>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 2,
          sm: 4,
        }}
      >
        <Image
          src="https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
          alt={data?.name}
          width={500}
          height={500}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: '1/1',
            flex: 4,
          }}
        />

        <ProductInformation {...data} />
      </Stack>

      <Stack p={2} spacing={1}>
        <Typography variant="h6" fontWeight={600}>
          Mô tả sản phẩm
        </Typography>
        <Divider />
        <Typography>{data?.description}</Typography>
      </Stack>

      <NewRelease />
    </Stack>
  )
}
