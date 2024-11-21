'use client'

import { getDeviceById } from '@/service/product.service'
import { Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ProductInformation } from './components'

export const ProductDetail = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () => getDeviceById(String(id)),
  })

  return (
    <Stack
      padding={2}
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      px={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
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
  )
}
