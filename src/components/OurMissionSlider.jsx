import getAPI from "./getAPI";
import React, { useEffect, useState } from "react";
import Section from "./Section";
import "../style/OurMissionSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { akqaURL } from "../components/getAPI";
import "swiper/swiper.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

//import const url1

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function OurMissionSlider({ data }) {
  const { content } = data;
  const url = akqaURL;

  // new Swiper("#swiper-1", {
  //   effect:"fade"
  // })

  console.log(Swiper);

  return (
    <main className="container" class="px-6">
      {/* NEW HEADERS */}
      <section class="pt-16">
        <div
          className="headers"
          class="flex-col leading-[1.5rem] font-spaceRegular text-center"
        >
          <div className="subheader" class="text-xl md:text-3xl 2xl:text-4xl">
            <p>{content?.missionSubheading}</p>
          </div>
          <div
            className="header"
            class="text-4xl uppercase font-spaceMedium pt-2 md:text-5xl md:pt-4 lg:px-10 xl:px-24 2xl:text-7xl"
          >
            <p>{content?.missionHeadline}</p>
          </div>
        </div>
      </section>

      {/* <div
        className="subheader"
        class="flex lg:items-center lg:justify-center md:justify-center"
      >
        <p
          className="missionSubheading"
          class="text-xl font-spaceRegular sm:mb-6 sm:mt-0 text-primaryGray-200 lg:text-lg md:text-2xl "
        >
          {content?.missionSubheading}
        </p>
      </div>

      <div
        className="mission-headline"
        class="flex lg:items-center lg:justify-center md:items-center md:justify-center"
      >
        <p
          className="missionHeadline"
          class="uppercase text-[45px] font-spaceMedium max-w-[25ch] text-center lg:text-[40px] md:text-[35px] md:max-w-[30ch]"
        >
          {content?.missionHeadline}
        </p>
      </div>  */}

      {/* NEW MISSIONSTEPS */}

      <section>
        <div className="missionsteps" class="">
          <div className="missionstep-content" class="xl:flex xl:justify-start">
            {content?.missionSteps.map((data, index) => (
              <div
                className="col1"
                class="p-6 md:p-10 lg:p-10 xl:p-0 xl:px-0 xl:py-20 "
                key={index}
              >
                <div
                  className="row1"
                  class={`justify-center flex text-7xl outlineText mix-blend-screen sm:text-8xl md:text-9xl xl:text-7xl 2xl:text-8xl  ${
                    data?.content?.headline === "04" ? "gradient" : ""
                  }`}
                >
                  <p>{data?.content?.headline}</p>
                </div>
                <div
                  className="row2"
                  class="justify-center flex text-center text-sm px-10 pt-2 sm:text-lg sm:px-24 md:text-2xl lg:px-52 xl:px-10 xl:text-sm 2xl:px-16"
                >
                  <p class="">{data?.content?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     


{/* 
      <section class="px-6 pb-16">
        <div
          className="new-swiper"
          class="overflow-hidden flex justify-center pt-10 pb-10 sm:pt-32 xl:pb-36 "
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              clickable: true,
            }}
            spaceBetween={1}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            effect={"coverflow"}
            centeredSlides={"true"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="ourMissionSwiper"
            class="xl:h-80"
          >
            {content?.missionCarousel.map((data, index) => (
              <SwiperSlide key={`slider${index}`}>
                <img
                  src={url + data?.content?.media?.url}
                  alt={data?.content?.media?.name}
                  class="bg-galaxyPurple"
                ></img>

                <p className="swiperText">{data?.content?.subheading}</p>
              </SwiperSlide>
            ))}



          </Swiper>
        </div>
      </section> */}







      {/* NEW SLIDER */}
      {/* <section class="px-6 pb-16">
        <div
          className="new-swiper"
          class="overflow-hidden flex justify-center pt-10 pb-10 sm:pt-32 xl:pb-36 "
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              clickable: true,
            }}
            spaceBetween={1}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            effect={"coverflow"}
            centeredSlides={"true"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="ourMissionSwiper"
            class="xl:h-80"
          >
            {content?.missionCarousel.map((data, index) => (
              <SwiperSlide key={`slider${index}`}>
                <img
                  src={url + data?.content?.media?.url}
                  alt={data?.content?.media?.name}
                  class="bg-galaxyPurple"
                ></img>

                <p className="swiperText">{data?.content?.subheading}</p>
              </SwiperSlide>
            ))}



          </Swiper>
        </div>
      </section> */}



      {/* End return */}
    </main>
  );
}




// OLD SWIPER


            {/* <button className="navigation-buttons" class="md:flex md:justify-center">  */}
            {/* style={{backgroundColor:"white"}} */}
            {/* <div className="swiper-button-next" class="invisible md:visible md:ml-3 ">

              <div className="next" class="">
              <button>
              <svg
              class=""
                    width="47"
                    height="16"
                    viewBox="0 0 47 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.7071 8.70711C47.0976 8.31658 47.0976 7.68342 46.7071 7.29289L40.3431 0.928932C39.9526 0.538408 39.3195 0.538408 38.9289 0.928932C38.5384 1.31946 38.5384 1.95262 38.9289 2.34315L44.5858 8L38.9289 13.6569C38.5384 14.0474 38.5384 14.6805 38.9289 15.0711C39.3195 15.4616 39.9526 15.4616 40.3431 15.0711L46.7071 8.70711ZM0 9L46 9V7L0 7L0 9Z"
                      fill="#FBFBFB"
                    />
                  </svg>
              </button>
              </div>
            </div>
            <div className="swiper-button-prev" class="invisible md:visible md:ml-3 " >
              <div className="prev">
              <button>
              <svg
                    width="47"
                    height="16"
                    viewBox="0 0 47 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928929L0.292893 7.29289ZM47 7L1 7L1 9L47 9L47 7Z"
                      fill="#FBFBFB"
                    />
                  </svg>
              </button>
              </div>
            </div>
            </button> */}




             {/* OLD MISSIONSTEPS*/}
      {/* <section>
        <div className="missionstepSection2">
          <div
            className="missionsteps"
            class="flex lg:flex-row justify-center lg:gap-x-14 lg:mt-10 p-10 flex-col gap-y-14"
          >
            {content?.missionSteps.map((data, index) => (
              <div className="col1" key={index}>
                <div
                  className="row1"
                  class={`justify-center flex text-[90px] outlineText mix-blend-screen lg:text-[100px] md:text-[150px] ${
                    data?.content?.headline === "04" ? "gradient" : ""
                  }`}
                >
                  <p>{data?.content?.headline}</p>
                </div>
                <div
                  className="row2"
                  class="justify-center flex text-center text-[14px] md:justify-center lg:text-[14px] md:flex md:text-[20px] xl:text-[16px] "
                >
                  <p class="md:max-w-[30ch]">{data?.content?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}