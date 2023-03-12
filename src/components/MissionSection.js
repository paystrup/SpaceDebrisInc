import React, { useEffect } from 'react';
import { akqaURL } from "../components/getAPI";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MissionSection({ data }) {
    // Endpoint
    const url = akqaURL;

    // Animations
    useEffect(() => {
        AOS.init({
        duration: 500
        });
    }, [])

    return (
        <section className='px-10 xl:px-32 my-40'>
            <div className='flex flex-col gap-2 pb-24 justify-center items-center text-center' data-aos="fade-up">
                <p className='font-spaceRegular text-xl text-primaryGray-200'>
                    {data?.content?.aboutSubheading}
                </p>

                <h3 className='uppercase font-spaceMedium text-6xl max-w-[25ch]'>
                    {/* TODO - IMPLEMENT HIGHLIGHTED WORD TEXT FIELD IN BACKEND AND IMPORT BELOW */}
                    <span dangerouslySetInnerHTML={{__html: data?.content?.aboutHeadline?.replace('future', '<span class="outlineText">future</span>')}}></span>
                </h3>
            </div>
            
            {/* TODO ADD class pulse to heart svg - index 1 */}
            <div className='flex justify-between flex-col md:flex-row gap-14 lg:gap-0'>
                {data?.content?.aboutCards?.map(({content, index}) => (
                    <div className='flex flex-col justify-center items-center' key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className='rounded-full border-galaxyPurple border-2 h-20 w-20  mb-4 flex items-center justify-center'>
                            <img src={url + content?.icon?.url} alt={content?.icon?.name} className='h-12 w-12 stroke-1 stroke-starWhite text-starWhite'></img>
                        </div>

                        <h4 className='mb-2 uppercase font-spaceMedium text-xl text-center'>{content?.headline}</h4>
                        <p className='max-w-[35ch] font-spaceRegular text-primaryGray-200 leading-relaxed text-center'>{content?.subheading}</p>
                    </div>

                ))}
            </div>
        </section>
    )
}
