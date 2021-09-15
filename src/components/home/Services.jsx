import React from 'react';
import classes from '../../styles/Services.module.css';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const Services = () => {
  return (
    <div className={classes.services}>
      <h1 className='text-center mt-5'>Our Services</h1>
      <div className='bg-light py-3'>
        <Container>
          <Swiper slidesPerView={5} spaceBetween={25} loop={true} className='mySwiper'>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1612940529.webp' alt='' />
                <figcaption>Bed Bug Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217363.webp' alt='' />
                <figcaption>Cockroach Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217432.webp' alt='' />
                <figcaption>Termite Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217487.webp' alt='' />
                <figcaption>Rodent Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217501.webp' alt='' />
                <figcaption>Ant Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217514.webp' alt='' />
                <figcaption>Fumigation Control</figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img className={classes.services} src='https://www.carepestbd.com/careIt/services_icon/1613217527.webp' alt='' />
                <figcaption>Wood Borer Control</figcaption>
              </figure>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Services;
