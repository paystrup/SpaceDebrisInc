import React, { useEffect, useRef } from 'react';
import NumberDisplayCard from './NumberDisplayCard';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../style/ProofOfConcept.css';


// Import Swiper React components, styling, modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style/RocketSwiper.css';

export default function ProofOfConcept({ headline, subheading, cta, cardsList }) {
    // Animations
    // AOS
    useEffect(() => {
        AOS.init({
        duration: 600
        });
    }, [])

    // GSAP
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();

    // highlightCard
    useEffect(() => {
        if (cardsList) {  
            gsap.to(".proofCard", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                trigger: '.proofOfConcept',
                scrub: true,
                end: '+=1200',
                }
            });         
            gsap.to(".highlightCards", {
                y: -250,
                opacity: 1,
                scrollTrigger: {
                trigger: '.proofOfConcept',
                scrub: true,
                end: '+=1200',
                }
            });
        } 
    }, [cardsList]);


    return (
        <section className='proofOfConcept my-24'>
            {/* HEADER WRAPPER - because carousel needs 0px padding*/}
            <div className='px-6 md:px-8 lg:px-32 2xl:pb-14' ref={el}>
                <div data-aos="fade-up">
                    {/* HEADER */}
                    <h3 className='uppercase text-6xl md:text-[80px] font-spaceMedium max-w-[20ch] md:leading-none mb-10'>
                        {headline}
                    </h3>
                    <p className='mb-10 text-lg leading-relaxed md:leading-normal md:text-lg max-w-[60ch] text-primaryGray-200'>
                        {subheading}
                    </p>
                </div>

                {/* BUTTONS */}
                <div className='flex gap-2 uppercase mb-24 2xl:mb-24' data-aos="fade-up" data-aos-delay="100">
                    {/* TODO FIX BTN COLOR WHEN API IS UPDATED */}
                    {/* <Button buttonColor="purple" btnText="Send trash" link="/order"/>
                    <Button buttonColor="white" btnText="Read More" link="/about"/> */}

                    {cta?.map((content, index) => (
                        <Button key={index} buttonColor={content?.content?.color} btnText={content?.content?.cta?.name} link={content?.content?.cta?.url}/>
                    ))}
                </div>
                
                {/* CARDS - 2nd card pushed up with translate, more can be added, fx. 4 - every second*/}
                <div className='2xl:flex gap-8 md:place-items-start 2xl:justify-end hidden'>
                    {cardsList?.map((data, index) => (
                        <div key={index} className={index === 1 ? `highlightCards gsapFadeUp` : `proofCard gsapFadeUp`}>
                            <NumberDisplayCard 
                                title={data?.content?.headline}
                                number={index + 1}
                                paragraph={data?.content?.subheading}
                                dataTitle={data?.content?.valueHeadline}
                                data={data?.content?.value}
                                key={index}
                                valueIdentifier={data?.content?.valueIdentifier}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CARD CAROUSEL - MOBILE, SMALL TABLET DEVICES */}
            <div className='mt-24 flex 2xl:hidden'>
                <Swiper
                    spaceBetween={24}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    mousewheel={true}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper infoCards"
                >
                    {cardsList?.map((data, index) => (
                        <SwiperSlide className='w-2/3' key={index}>
                            <NumberDisplayCard 
                                title={data?.content?.headline}
                                number={index + 1}
                                paragraph={data?.content?.subheading}
                                dataTitle={data?.content?.valueHeadline}
                                data={data?.content?.value}
                                key={index}
                                valueIdentifier={data?.content?.valueIdentifier}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
