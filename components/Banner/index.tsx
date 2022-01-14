import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Paper } from '@mui/material';

const Banner = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      initialSlide={0}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <Paper variant="outlined">
          <img src={'/bg.jpg'}/>
          Slide 1
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper variant="outlined">
          <img src={'/bg.jpg'}/>
          Slide 2
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper variant="outlined">
          <img src={'/bg.jpg'}/>
          Slide 3
        </Paper>
      </SwiperSlide>
      <SwiperSlide>
        <Paper variant="outlined">
          <img src={'/bg.jpg'}/>
          Slide 4
        </Paper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;