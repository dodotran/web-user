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
          src="https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
          width={400}
          height={300}
          style={{ objectFit: 'cover', width: '100%' }}
        />

        <Typography fontWeight={400} fontSize={40} px={2}>
          CAMERA
        </Typography>

        <Typography fontWeight={200} fontSize={18} px={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, nec ultricies
          mauris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea incidunt, consectetur illum architecto,
          molestiae aperiam natus similique, vel iure error est corrupti? Facere animi accusamus exercitationem pariatur
          ipsam tempore ullam.
        </Typography>
      </Stack>

      <OutlineButton sx={{ width: 200, fontSize: 12 }}>Vào Xem Ngay</OutlineButton>
    </Stack>
  )
}
