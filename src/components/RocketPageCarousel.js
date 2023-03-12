import React from 'react';

// Import Swiper React components, styling, modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/RocketSwiper.css";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";

//CountUp, Source: https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

import { akqaURL } from "../components/getAPI";

export default function RocketPageCarousel({ data }) {

    // Our endpoint
    const url = akqaURL;

  return (
    <Swiper
        spaceBetween={0}
        mousewheel={true}
        slidesPerView={1}
        pagination={{
            clickable: true,
        }}
        keyboard={{
            enabled: true,
        }}
        loop={true}
        navigation={true} 
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="rocketSwiper fadeIn"
    >
        {data?.content?.children?.map((data, index) => (
            <SwiperSlide key={index}>
                <div className='rocketPageSlide flex flex-col lg:flex-row justify-between place-items-start'>
                        <div className='flex flex-col gap-44 lg:max-w-[50%]'>
                            <div>
                                <h2 className='font-spaceMedium text-6xl uppercase mb-5'>
                                    <span dangerouslySetInnerHTML={{__html: data?.headline?.replace(data?.rocketID, `<span class="outlineText mix-blend-screen">${data?.rocketID}</span>`)}}></span>
                                </h2>
                                <p 
                                    className='text-primaryGray-200 uppercase max-w-[70ch] leading-relaxed'>{data?.subheading}</p>
                            </div>

                            <div className='flex gap-6 flex-wrap'>
                                {data?.statisticsInformationCards?.map((data, index) => (
                                    <div 
                                        key={index}
                                        className='bg-primaryGray-900 h-28 w-64 border-2 border-primaryGray-300 border-dashed flex justify-center flex-col items-center'
                                    >
                                        <div className='flex items-center justify-center gap-[4px]'>
                                            <img 
                                                className='h-8 w-8' 
                                                src={url + data?.content?.icon?.url}
                                                alt={data?.content?.icon?.name}
                                            >
                                            </img>
                                            <CountUp
                                                start={0}
                                                end={data?.content?.value}
                                                duration={0.7}
                                            >
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} className='text-4xl font-spaceMedium'></span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <p className='uppercase text-primaryGray-300'>{data?.content?.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    <div className='flex flex-col'>
                        {/* <h2 className='text-[250px] font-spaceMedium outlineText leading-[0.8] opacity-40 absolute'>N17</h2> */}
                        <div className='h-[85vh] mr-64'>
                        <video className='h-full' src={url + data?.media?.url} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        
          
    </Swiper>
  )
}