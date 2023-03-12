import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import animation from "../media/rocketVisualizer.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RocketVisualizer({ data }) {
  // Animations
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  return (
    <section className='rocketVisualizer px-6 md:px-8 lg:px-32 mt-24 flex flex-col justify-center items-center'>
        <h3 data-aos="fade-up" className='uppercase text-5xl md:text-6xl text-center max-w-[35ch] leading-tight font-spaceMedium'>
          {/* TODO implement highligted word in the backend - text field user can fill out  */}
          <span dangerouslySetInnerHTML={{__html: data?.content?.visualizationHeadline?.replace('to get rid of trash', '<span class="text-oceanTeal">to get rid of trash</span>')}}></span>
        </h3>
        <div 
            data-aos="fade-up" data-aos-delay="100" 
            className='flex gap-2 justify-center items-center mt-12 md:mt-36'
        >
            <div className='bg-oceanTeal h-5 w-5 rounded-full'></div>
            <p className='uppercase font-spaceMedium'>{data?.content?.visualizationText} </p>
        </div>
        <figure>
            <Lottie
              animationData={animation}
              loop={true}
            />
        </figure>

    </section>
  )
}
