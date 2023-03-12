import React, { useState, useEffect } from 'react';
import { akqaURL } from "../components/getAPI";

//Components
import Banner from '../components/Banner';
import HeroSection from '../components/HeroSection';
import ImageBanner from '../components/ImageBanner';
import MissionSection from '../components/MissionSection';
import ProofOfConcept from '../components/ProofOfConcept';
import RocketVisualizer from '../components/RocketVisualizer';
import LoadingAnimation from '../components/LoadingAnimation';

export default function HomePage() {
    const [spaceData, setSpaceData] = useState([]);
    const [isLoading, setIsLoading] = useState();

    // Our endpoint
    const url = akqaURL;

    // fetch starts here
    useEffect(() => {
        setIsLoading(true)
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setSpaceData(data);
            setTimeout(() => {
                setIsLoading(false);
            },550);
        }
        getData();
        
    }, [url]);

    if (isLoading)
    return(
        <main>
            <LoadingAnimation />
        </main>
    )

    return (
        <main>
            <HeroSection data={spaceData} />
            <RocketVisualizer data={spaceData} />
            <ProofOfConcept
                headline={spaceData?.content?.informationHeadline}
                subheading={spaceData?.content?.informationSubheading}
                cta={spaceData?.content?.informationCTA}
                cardsList={spaceData?.content?.informationCards}
            />
            <ImageBanner data={spaceData} />
            {/* FIRST BANNER */}
            <Banner
                bannerHeight={"h-[60vh]"}
                bgColor={"bg-galaxyPurple"}
                btnColor={spaceData?.content?.missionBanners[0].content?.cta[0].content?.color}
                pColor={"text-starWhite"}
                align={spaceData?.content?.missionBanners[0].content?.align} 
                header={spaceData?.content?.missionBanners[0].content?.headline}
                paragraph={spaceData?.content?.missionBanners[0].content?.subheading}
                btnText={spaceData?.content?.missionBanners[0].content?.cta[0].content?.cta?.name}
                btnLink={spaceData?.content?.missionBanners[0].content?.cta[0].content?.cta?.url}
                imgAlt={spaceData?.content?.missionBanners[0].content?.media?.additionalProperties?.altText}
                img={url + spaceData?.content?.missionBanners[0].content?.media?.url}
            />
            
            <MissionSection data={spaceData}/>

            {/* SECOND BANNER */}
            <Banner
                bannerHeight={"h-[60vh]"}
                bgColor={"bg-primaryGray-900"}
                btnColor={spaceData?.content?.rocketBanners[0].content?.cta[0].content?.color}
                pColor={"text-starWhite"}
                align={spaceData?.content?.rocketBanners[0].content?.align} 
                header={spaceData?.content?.rocketBanners[0].content?.headline}
                paragraph={spaceData?.content?.rocketBanners[0].content?.subheading}
                btnText={spaceData?.content?.rocketBanners[0].content?.cta[0].content?.cta?.name}
                btnLink={spaceData?.content?.rocketBanners[0].content?.cta[0].content?.cta?.url}
                imgAlt={spaceData?.content?.rocketBanners[0].content?.media?.additionalProperties?.altText}
                img={url + spaceData?.content?.rocketBanners[0].content?.media?.url}
            />
        </main>
    )
}
