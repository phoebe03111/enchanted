"use client";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Product } from "@prisma/client";

interface PopularPerfumesCarouselProps {
  products: Product[];
}

const PopularPerfumesCarousel = ({
  products,
}: PopularPerfumesCarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[500px] mb-8"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>{product.name}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularPerfumesCarousel;
