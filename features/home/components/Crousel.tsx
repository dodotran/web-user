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
          src="https://chothuegimbal.com/wp-content/uploads/2022/02/Cho-thue-gimbal-min.jpg"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://chothuegimbal.com/wp-content/uploads/2023/04/Cover-scaled.jpg"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="slide 1"
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/May-anh/DSLR/may-anh-dslr-1.jpg"
          width={1920}
          height={600}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </SwiperSlide>
    </Swiper>
  )
}
