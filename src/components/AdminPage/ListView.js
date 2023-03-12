import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ListAvailable from './ListAvailable';
import ListUnAvailable from './ListUnavailable';

export default function ListView({ data }) {
    // Animations
    useEffect(() => {
        AOS.init({
        duration: 300
        });
    }, [])

    // Check the "available" boolean value of the rockets and display components below
    // If there is no false, we don't want to show anything - and the opposite
    const hasAvailableRockets = data?.content?.rockets?.some(rocket => rocket.availability === true);
    const hasUnavailableRockets = data?.content?.rockets?.some(rocket => rocket.availability === false);

    return (
        <section className='listView pt-8' data-aos="fade-up">
            <div className='listViewWrapper flex flex-col gap-4'>
                {hasAvailableRockets && <ListAvailable data={data}/>}
                {hasUnavailableRockets && <ListUnAvailable data={data}/>}
            </div>
        </section>
    )
}