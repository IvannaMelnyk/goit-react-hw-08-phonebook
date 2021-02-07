import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    maxWidth: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '700px',
  },
};

const HomeView = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      <div className={styles.container}>
        <img
          src={
            'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg'
          }
          alt={'iphone'}
        />
      </div>
      <div>
        <img
          src={
            'https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_960_720.jpg'
          }
          alt={'phone with notes'}
        />
      </div>
      <div>
        <img
          src={
            'https://cdn.pixabay.com/photo/2019/05/10/12/36/contact-us-4193401_960_720.jpg'
          }
          alt={'contact us'}
        />
      </div>
    </Slider>
  );
};

export default HomeView;
