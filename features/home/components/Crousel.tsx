import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
    </Swiper>
  )
}
