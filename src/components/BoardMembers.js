import React, { useEffect } from 'react';
import BoardMemberCard from './BoardMemberCard';
import { akqaURL } from './getAPI';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BoardMembers({ data }) {
    // Animations
    useEffect(() => {
        AOS.init({
        duration: 500
        });
    }, [])

    // Our endpoint
    const url = akqaURL;

    return (
        <section className='boardMembers my-24 lg:my-32'>
            <div className='boardMembersWrapper px-6 md:px-8 xl:px-32'>
                <h3 className='font-spaceMedium text-5xl uppercase max-w-[30ch] mb-24 leading-tight lg:leading-snug' data-aos="fade-up">
                    {data?.content?.teamHeadline}
                </h3>
                
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-6 xl:gap-8' data-aos="fade-up" data-aos-delay="200">
                    {data?.content?.teamMembersList?.map((data, index) => (
                        <BoardMemberCard 
                            img={url + data?.content?.media?.url} 
                            name={data?.content?.fullName} 
                            position={data?.content?.title} 
                            key={index}
                        />   
                    ))}
                </div>
                
            </div>
        </section>
    )
}
