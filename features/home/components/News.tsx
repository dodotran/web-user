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
          src="https://chothuegimbal.com/wp-content/uploads/2022/11/hanoigimbal-3-360x240.jpg"
          width={400}
          height={300}
          style={{ objectFit: 'contain', width: '100%' }}
        />

        <Typography fontWeight={400} fontSize={40} px={2} lineHeight={1}>
          Cho thuê đèn flash máy ảnh – đèn flash rời
        </Typography>

        <Typography fontWeight={200} fontSize={18} px={2}>
          Đèn flash máy ảnh là một công cụ không thể thiếu khi quay chụp trong điều kiện thiếu sáng, là một thiết bị cực
          kì quan trọng giúp cho những bức ảnh chụp ở nơi tối tăm có chất lượng màu sắc và ánh sáng tốt hơn. Các loại
          đèn flash máy ảnh trên thị trường có rất nhiều, vậy làm thế nào để chọn được đèn flash phù hợp nhất với nhu
          cầu của bạn? HanoiGimbal – đơn vị chuyên cung cấp dịch vụ cho thuê thiết bị quay phim – sẽ mang đến cho khách
          hàng lựa chọn đa dạng với dịch vụ cho thuê đèn flash máy ảnh nhiều tiện ích và ưu đãi.
        </Typography>
      </Stack>

      <OutlineButton sx={{ width: 200, fontSize: 12 }}>Vào Xem Ngay</OutlineButton>
    </Stack>
  )
}
