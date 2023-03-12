import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminDashRocketCard from './AdminDashRocketCard';
// todo
// add functionality for graphs + availability

export default function AdminDashRocketCarousel({ data }) {
    // Animations
    useEffect(() => {
        AOS.init({
        duration: 300
        });
    }, [])

    // sort rockets by availability and map through -> display card
    return (
        <section className='pt-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4' data-aos="fade-up">
            {
            data?.content?.rockets
                .sort((a, b) => (a.availability > b.availability ? -1 : 1))
                .map((data, index) => (
                <>
                    <AdminDashRocketCard 
                        key={index} 
                        name={data?.rocketName} 
                        availability={data?.availability}
                        trashAmount={data?.currentCargoshipment?.piecesOfTrash}
                        cargoMax={data?.currentCargoshipment?.max_kg}
                        cargoCurrent={data?.currentCargoshipment?.current_kg}
                        cargom3={data?.currentCargoshipment?.current_m3}
                        cargom3max={data?.currentCargoshipment?.max_m3}
                        color={data?.rocketColorCode}
                        launchTime={data?.lastLaunchTime}
                        tripTime={data?.currentCargoshipment?.destination?.tripTime}
                        tripLength={data?.currentCargoshipment?.destination?.distance}
                        destination={data?.currentCargoshipment?.destination?.planet_name}
                    />
                </>
                ))
            }
        </section>
    )
}
