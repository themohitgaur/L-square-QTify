import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AlbumCard from '../Card/Card'; 
const Carousel = ({ data }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <AlbumCard album={item} /> 
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
