import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation } from 'swiper';
import CardComponent from '../Card/CardComponent';
import useStyles from './Carousel.module.css'; // Import your CSS module

const Carousel = ({ data }) => {
    const classes = useStyles();

    return (
        <Swiper
            // modules={[Navigation]}
            // navigation
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            className={classes.carousel}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <CardComponent album={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
