import GarbageManagementSection from '../components/GarbageManagementSection.jsx'
import OurMissionSlider from '../components/OurMissionSlider.jsx';
import { useEffect, useState } from "react";
import BoardMembers from '../components/BoardMembers.js';
import ProofOfConcept from '../components/ProofOfConcept.js';
import Banner from '../components/Banner.jsx';
import { aboutURL, akqaURL } from "../components/getAPI";
import PitchSection from '../components/PitchSection.jsx';


export default function ContentPage() {
  // State for storing fetched data
  const [data, setData] = useState([])

  // Our endpoint
  const url = aboutURL;

  // default endpoint for media
  const mediaUrl = akqaURL;

  // Fetch starts here
  useEffect(() => {
    async function aboutData() {
      const response = await fetch(url);
      const newData = await response.json(); 
      console.log(newData)
      setData(newData)
    }    
    aboutData();
  },[url])  

  const rocketBanner = data?.content?.rocketSection[0]?.content;
  const infoSection = data?.content?.informationSection[0].content;

  return ( 
    <main>
      <section>
        <GarbageManagementSection data={data ? data : null} />
        <OurMissionSlider data={data ? data : null} />
        <BoardMembers data={data}/> 
        <PitchSection />
        <ProofOfConcept
            headline={infoSection?.headline}
            subheading={infoSection?.subheading}
            cta={infoSection?.cta}
            cardsList={infoSection?.cardsList}
        />
        <Banner
           bannerHeight={"h-[60vh]"}
           bgColor={"bg-primaryGray-900"}
           pColor={"text-starWhite"}
           align={rocketBanner?.align}
           header={rocketBanner?.headline}
           paragraph={rocketBanner?.subheading}
           btnText={rocketBanner?.cta[0]?.content?.cta?.name}
           btnLink={rocketBanner?.cta[0].content?.cta?.url}
           btnColor={rocketBanner?.cta[0].content?.color}
           imgAlt={rocketBanner?.media?.additionalProperties?.altText}
           img={mediaUrl + rocketBanner?.media?.url}
        />

        
      </section>
    </main>
  )
}
