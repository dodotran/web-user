'use client'

import { getDeviceById, getFeedbackByEquipmentIdOfPackageId } from '@/service/product.service'
import { Breadcrumbs, Divider, Link, Rating, Stack, Typography } from '@mui/material'
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

  const { data: reviews } = useQuery({
    queryKey: ['reviews-items-equipment', id],
    queryFn: () =>
      getFeedbackByEquipmentIdOfPackageId({
        equipmentId: String(id),
      }),
    enabled: !!id,
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
        <Stack flex={1}>
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
        </Stack>

        <ProductInformation {...data} />
      </Stack>

      <Stack p={2} spacing={1} bgcolor="white">
        <Typography variant="h6" fontWeight={600}>
          Mô tả sản phẩm
        </Typography>
        <Divider />
        <Typography>{data?.description}</Typography>
      </Stack>

      <Stack bgcolor="white" p={2} spacing={2}>
        <Typography variant="h6" fontWeight={600}>
          Đánh giá sản phẩm
        </Typography>

        <Stack gap={2} maxHeight="400px" overflow="auto">
          {reviews &&
            reviews.map((review) => (
              <Stack
                key={review.id}
                direction="row"
                alignItems="center"
                gap={2}
                sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}
              >
                {/* Hiển thị số sao */}
                <Rating value={review.rating} readOnly size="small" />
                <Stack>
                  {/* Bình luận của người dùng */}
                  <strong>{review.comment}</strong>
                  <span style={{ fontSize: '0.875rem', color: '#666' }}>
                    Ngày: {new Date(review.createdAt).toLocaleDateString('vi-VN')}
                  </span>

                  {/* Phản hồi từ admin (nếu có) */}
                  {review.adminResponse && (
                    <Stack
                      sx={{
                        mt: 1,
                        p: 1,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        backgroundColor: '#f9f9f9',
                        width: '100%',
                      }}
                    >
                      <strong>Phản hồi từ admin:</strong>
                      <span style={{ fontSize: '0.875rem', color: '#333' }}>{review.adminResponse}</span>
                      <span style={{ fontSize: '0.75rem', color: '#666' }}>
                        Ngày phản hồi: {review.replyDate ? new Date(review.replyDate).toLocaleDateString('vi-VN') : '-'}
                      </span>
                    </Stack>
                  )}
                </Stack>
              </Stack>
            ))}
        </Stack>
      </Stack>

      <FAQComponent />

      <NewRelease />
    </Stack>
  )
}
