import React from 'react';
import classes from '../../styles/Banner.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const Banner = () => {
  return (
    <div className={classes.banner}>
      <Swiper slidesPerView={1} spaceBetween={25} loop={true} className='mySwiper'>
        <SwiperSlide>
          <img className='w-100' src='https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.6435-9/104427801_1569649003207041_7823010235085623720_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEj-wHb3DaIpqgELAphDLp1jeYGK7aJp52N5gYrtomnndUTSMkTpUi9Q60KFz-R7BXmRBjO0-vzyUoIa-xCRo9p&_nc_ohc=cVcIIBzSS4cAX9OKvSl&_nc_ht=scontent.fcgp8-1.fna&oh=3cc21cc60ae64be1f3165eb73a2f1714&oe=6164E835' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.6435-9/64095060_1240287289476549_7148028970250797056_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH7yYWUSMVlRMzRbdFZQi32Unyaxf-6_uJSfJrF_7r-4pwIH1hKEmqnMCr8NJ0XgsA88CjO0nS3c4ViPjeBlZts&_nc_ohc=0887fT2sQjwAX8Hrrjb&_nc_oc=AQm3j9WkSU0y70ZHZs3ean-jg_7H8G7GB4KlES9a1dZPrz914ZhRIo8Tr29YmQAHnuo&tn=rb1lS-MdOAnwm-kx&_nc_ht=scontent.fcgp8-1.fna&oh=e0e318540f01297a4dbd9fe61691ce73&oe=616697EC' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.6435-9/117401922_1614998082005466_411083067705698662_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEuDzIKKRiqjVLuvgNZfylcMfoB4vos5fEx-gHi-izl8Vl75i9IPZGNGi5wO3lAgygqbx2V9vaKZF5kfZun-7ji&_nc_ohc=KA9cUS5R6XMAX_ISWI-&_nc_ht=scontent.fcgp8-1.fna&oh=3bdfb73619a2e393bb83114ddff98503&oe=6165436D' alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
