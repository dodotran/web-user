import { Box, Typography } from '@mui/material'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../styles/CategoryCarousel.module.css'
import { CategoryCard } from '../styles/styled'

export function CategoryCarousel() {
  return (
    <Box mt={10}>
      <Typography
        fontSize={32}
        fontWeight={500}
        textAlign="center"
        marginBottom={3}
      >
        Danh mục sản phẩm
      </Typography>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{ padding: '20px' }}
      >
        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>

        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>

        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>

        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>

        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>

        <SwiperSlide>
          <CategoryCard>
            <Typography>DANH MUC SAN PHAM</Typography>
          </CategoryCard>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
