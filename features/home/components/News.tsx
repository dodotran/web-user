import { OutlineButton } from '@/libs/styles'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'

export const News = () => {
  return (
    <Stack flexDirection="row" width="100%" px={4} gap={4} mt={10}>
      <NewsCard />
      <NewsCard />
    </Stack>
  )
}

const NewsCard = () => {
  return (
    <Stack flex={1} alignItems="center" gap={4}>
      <Stack gap={4} alignItems="center">
        <Image
          alt="news"
          src="https://theme.hstatic.net/200000719085/1001100454/14/img_home_banner_desktop_1.jpg?v=155"
          width={400}
          height={300}
          style={{ objectFit: 'cover', width: '100%' }}
        />

        <Typography fontWeight={400} fontSize={40} px={2}>
          HIZU LADY
        </Typography>

        <Typography fontWeight={200} fontSize={18} px={2}>
          Dòng sản phẩm Hizu Lady mang đến những mẫu trang phục tinh tế và sang
          trọng. Với sự kết hợp hoàn hảo giữa thiết kế, chất liệu và màu sắc,
          các sản phẩm của chúng tôi là lựa chọn hoàn hảo cho các nàng cho những
          sự kiện đặc biệt trong đời.
        </Typography>
      </Stack>

      <OutlineButton sx={{ width: 200, fontSize: 12 }}>
        Vào Xem Ngay
      </OutlineButton>
    </Stack>
  )
}
