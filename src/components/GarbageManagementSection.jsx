import React from "react";
import Button from "../components/Button";
import Banner from "../components/Banner.jsx";
import ourMissionSunriseimg from "../media/png/ourMissionSunriseimg.png";
import "../style/GarbageManagementSection.css";
import planetLeft from "../media/png/planetLeft.png";
import planetRight from "../media/png/planetRight.png";
import rocket2 from "../media/png/rocket2.png"
import PaperTrash from "../media/png/PaperTrash.png"

export default function GarbageManagementSection({data}) {

  const {content} = data;

  const bgImg={
      backgroundImage:`url(${ourMissionSunriseimg})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };


  return (


      <section style={bgImg} >
        {/* HEADERS */}
        <div className="headers" class="pt-36 flex-col leading-[1.5rem] px-6  lg:pt-44 xl:pt-44 2xl:pt-44">
          <div className="header" class="text-5xl font-spaceBold uppercase sm:text-6xl md:text-center md:text-6xl  md:px-4 lg:px-0 lg:text-6xl lg:text-center xl:text-7xl 2xl:text-7xl 2xl:text-center 2xl:px-48">
            <h1><span dangerouslySetInnerHTML={{__html: content?.heroHeadline?.replace('intergalactic', '<span class="outlineText mix-blend-screen">intergalactic</span>')}}></span></h1>
          </div>
          <div className="subheader" class="pt-4 md:text-center md:text-xl md:pt-10 md:px-6 lg:pt-10 lg:text-xl xl:text-2xl xl:pt-10 2xl:text-3xl 2xl:pt-10">
            <p>
              {content?.heroSubheading}
            </p>
          </div>
        </div>


        <div class="shapes">
        <div class="rocket-holder">
            <img src={rocket2} class="rocket"></img>
        </div>

        {/* Skud */}
        <div class="shape1 shape0"></div>
        <div class="shape2 shape0"></div>
        <div class="shape3 shape0"></div>
        <div class="shape4 shape0"></div>
        <div class="shape5 shape0"></div>
        {/* Planets lavet om til trash */}
        <img src={PaperTrash} class="planet1 planets"></img>
        <img src={PaperTrash} class="planet2 planets"></img>
        <img src={PaperTrash} class="planet4 planets"></img>
        <img src={PaperTrash} class="planet5 planets"></img>
        <img src={PaperTrash} class="planet6 planets"></img>
        <img src={PaperTrash} class="planet7 planets"></img>
        <img src={PaperTrash} class="planet8 planets"></img>
        <img src={PaperTrash} class="planet9 planets"></img>
       
        </div>



        {/* <div className="rocketAni-body">
            <div className="body"></div>
            <div className="fin fin-left"></div>
            <div className="fin fin-right"></div>
            <div className="window"></div>
            <div className="exhaust-flame"></div>
            <ul className="exhaust-fumes">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

        </div> */}

        {/* <div className="text" class="sm:flex sm:items-center sm:justify-center">

          <div class="sm:mt-64">
            <h1 class="sm:mt-64">
            <span dangerouslySetInnerHTML={{__html: content?.heroHeadline?.replace('intergalactic', '<span class="outlineText mix-blend-screen">intergalactic</span>')}}></span>
            </h1>
          </div>

          <div className="subheader">
            <p class="">
              {content?.heroSubheading}
            </p>
          </div>
        </div> */}







        {/* ANI PLANETS*/}

        {/* <div className="planets">
            <div className="leftPlanet" class="lg:absolute bottom-0 left-0 lg:h-48 lg:w-96 lg:pr-40 lg:mb-20 md:h-26 md:w-48 md:absolute">
                <img src={planetLeft} alt="Left planet" />
            </div>

            <div className="rightPlanet" class="lg:absolute bottom-0 right-0 lg:h-48 lg:w-96 lg:pl-40 lg:pb-6 lg:mb-20 md:h-26 md:w-48 md:absolute">
                <img src={planetRight} alt="Right planet" />
            </div>
        </div> */}





      </section>
  );
}