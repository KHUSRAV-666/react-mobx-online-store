// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function TheShopAdsSlider() {
  return (
    <>
      <Swiper
        // effect={"fade"}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination ]}
        className="shopAdsSwiper"
      >
        <SwiperSlide>
          <img src="./images/sliders/slide_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/sliders/slide_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/sliders/slide_3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/sliders/slide_4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
