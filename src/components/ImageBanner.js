import React, { useEffect } from 'react';

//CountUp, Source: https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
import { akqaURL } from "../components/getAPI";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ImageBanner({ data }) {
    // Our endpoint
    const url = akqaURL;

    // bg img for the section
    const imgBg = url + data?.content?.missionBanners[1].content?.media?.url;

    // Animations
    useEffect(() => {
        AOS.init({
        duration: 500
        });
    }, [])

    return (
        <section 
            className='py-24 xl:py-0 lg:h-[85vh] bg-galaxyPurple flex items-center justify-center'
            aria-label="Our impact in data"
            style={{
              backgroundImage: `url(${imgBg})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
        >
            {/* TODO send duration of animation from backend - a slider in the cms fx. - fix trigger on scroll down, only works on scroll up */}
            <div className='flex flex-col xl:flex-row justify-center items-center gap-16'>
                {data?.content?.missionBanners[1].content?.mediaValueCards?.map((data, index) => (
                    <div className='flex flex-col justify-center items-center uppercase leading-none gap-2' key={index} data-aos="fade-up" data-aos-delay={index * 100} >
                        <CountUp
                            start={0}
                            end={data?.content?.value}
                            duration={(index + 0.25) / 4}
                            enableScrollSpy={true}
                            className="text-[80px]"
                            suffix={data?.content?.valueIdentifier}
                        >
                
                        </CountUp>

                        <p className='text-lg'>{data?.content?.description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
