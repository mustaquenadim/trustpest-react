import React from 'react';
import classes from '../../styles/Clients.module.css';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const Clients = () => {
  return (
    <div className={classes.clients}>
      <h1 className='text-center mt-5'>Our Happy Clients</h1>
      <div className='bg-light py-3 d-flex align-items-center justify-content-center'>
        <Container>
          <Swiper slidesPerView={7} spaceBetween={25} loop={true}>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613409404.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613410727.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613409102.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613410478.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613410762.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613410799.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613411573.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613409537.webp' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613408731.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.clients} src='https://www.carepestbd.com/careIt/client_images/1613408207.png' alt='' />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Clients;
