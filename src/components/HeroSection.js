import React, { useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from './Button';
import { akqaURL } from "../components/getAPI";
import { gsap } from "gsap";

// static poster img for bg vid until backend is up
import heroPosterTemp from '../media/png/heroPosterTemp.png';

export default function HeroSection({ data }) {
    // Our endpoint
    const url = akqaURL;

    //GSAP ANIMATIONS
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {            
        tl.current = gsap.timeline(({defaults: {duration: 0.3, ease: "Power1.easeOut"}}))
        
        .to(q(".subHeading"), {
            y: 0,
            opacity: 1
        })
        .to(q(".headline"), {
            y: 0,
            opacity: 1
        })
        .to(q(".buttons"), {
            y: 0,
            opacity: 1
        })
        .to(q(".arrow"), {
            y: 0,
            opacity: 1,
            delay: 0.5
        });
    }, [q]);

    return (
        <section>
            {/* HEADER */}
            <div className='z-10 flex sm:items-center sm:justify-center h-[100vh] flex-col w-full text-starWhite px-5 pt-32 lg:pt-0' ref={el}>
                {/* TODO implement highligted word in the backend - text field user can fill out */}
                <div className='flex flex-col-reverse sm:flex-col sm:justify-center sm:items-center sm:text-center z-[10] mt-24 md:mt-0'>
                    <p className='subHeading gsapFadeUp text-xl font-spaceRegular sm:mb-6 mt-10 sm:mt-0'>
                        {data?.content?.heroSubheading}
                    </p>
                    <h1 className='headline gsapFadeUp uppercase text-[70px] md:text-[80px] font-spaceBold leading-none max-w-[25ch]'>
                        <span dangerouslySetInnerHTML={{__html: data?.content?.heroHeadline?.replace(data?.content?.heroHighlightHeadline, `<span class="outlineText mix-blend-screen">${data?.content?.heroHighlightHeadline}</span>`)}}></span>
                    </h1>
                </div>

                {/* BUTTONS */}
                <div className='buttons gsapFadeUp flex gap-4 mt-12 uppercase z-[10]'>
                    {data?.content?.heroCTA?.map(({content, index}) => (
                        <Button key={index} buttonColor={content?.color} btnText={content?.cta?.name} link={content?.cta?.url} />
                    ))}
                </div>

                {/* UX ARROWS */}
                <div className='arrow gsapFadeDown top-[90%] absolute hidden sm:flex flex-col z-[10]'>
                    <ChevronDownIcon className='h-8 w-8 text-starWhite hoverAnim'/>
                </div>
            </div>

            {/* VIDEO OVERLAY - BLACK */}
            <div className='top-0 left-0 bg-observableBlack z-[2] w-full h-[100%] absolute opacity-60'></div>
            
            {/* BG VID - TODO ADD FALLBACKS + function for handling mediaExtensions*/}
            <div className='fadeInSlow top-0 left-0 overflow-hidden'>

                {/* VIDEO */}
                {data?.content?.heroMedia?.extension === "mp4" && (
                    <video src={url + data?.content?.heroMedia?.url} 
                        autoPlay 
                        muted 
                        loop 
                        className='top-0 left-0 absolute object-cover w-[100%] h-[100%]'
                        poster={heroPosterTemp}
                    >
                    </video>
                )}
                
                {/* IMG */}
                {data?.content?.heroMedia?.extension === "png" && <img src={url + data?.content?.heroMedia?.url} className='top-0 left-0 absolute object-cover w-[100%] h-[100%]' alt='Hero'></img>}
            </div>
        </section>
    )
}
