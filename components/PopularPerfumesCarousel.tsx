"use client";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Category, Product } from "@prisma/client";
import Perfume, { ProductWithCategory } from "./Perfume";

interface PopularPerfumesCarouselProps {
  products: ProductWithCategory[];
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
      className="h-[540px] mb-8"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Perfume product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularPerfumesCarousel;
