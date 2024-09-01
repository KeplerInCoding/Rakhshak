import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Slider = () => {
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1664304463486-26246ff4cb8c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHN1bmFtaXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Tsunami"
    },
    {
      image: "https://t4.ftcdn.net/jpg/00/13/36/39/360_F_13363973_3UcvB2A99pQtbhV6rykSNCAOwbx9rNll.jpg",
      alt: "Earthquake"
    },
    {
      image: "https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.jpg?s=612x612&w=0&k=20&c=qv-WAGrG9YdlMwibugLBC5SGLNrNS5mYm9od0RXKIsQ=",
      alt: "Rainy Forest"
    }
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation // Enables navigation arrows
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay for image darkness effect */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Constant Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4 tracking-wide">Welcome to the Government Portal</h2>
          <p className="text-xl max-w-2xl mx-auto">Your gateway to all government services and information. Explore, engage, and stay informed.</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
