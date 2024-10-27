import React, { useRef, useState } from 'react';
import "./Hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import tv from "../../assets/tv.png"
const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="slide">
                            <div className="slide__text">
                                <p className='price'>Save up to $1,400</p>
                                <h2>Our brightest idea</h2>
                                <p className='descp'>Get up to $1400 trade-in credit towards Galaxy Z Flipó or up to $150 off without trade-in. Plus, get $100 off select colors and 30% off Galaxy Watch Ultra</p>
                                <button>But Now</button>
                            </div>
                            <div className="slide__image">
                                <img src={tv}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <div className="slide__text">
                                <p className='price'>Save up to $1,400</p>
                                <h2>Our brightest idea</h2>
                                <p className='descp'>Get up to $1400 trade-in credit towards Galaxy Z Flipó or up to $150 off without trade-in. Plus, get $100 off select colors and 30% off Galaxy Watch Ultra</p>
                                <button>But Now</button>
                            </div>
                            <div className="slide__image">
                                <img src={tv}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Hero