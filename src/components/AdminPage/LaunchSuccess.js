import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../Button';
import whileLaunchingVid from './video/whileLaunching.webm';
import afterLaunchingVid from './video/afterLaunch.webm';

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function LaunchSuccess() {
  const location = useLocation();
  console.log(location);

  // Simple countdown - 5 sec
  const [counter, setCounter] = useState(5);

  // Pr mil sec set subtract 1 from the counter if the value is above 0
  useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 600);
  }, [counter]);

  // Animations
  useEffect(() => {
    AOS.init({
    duration: 300
    });
  }, [])
  

  return (
    <section className='h-[100vh] pt-28 flex items-center flex-col justify-center gap-20'>
        {counter > 0 ? (
              <div>
                <h4 className='text-[30rem] z-30 relative'>{counter}</h4>
                
                {/* VIDEO OVERLAY - BLACK */}
                <div className='top-0 left-0 bg-observableBlack z-[2] w-full h-[100%] absolute opacity-60'></div>
                
                {/* BG VID - TODO ADD FALLBACKS + function for handling mediaExtensions*/}
                <div className='top-0 left-0 overflow-hidden z-10'>
                  {/* VIDEO */}
                  <video src={whileLaunchingVid} 
                        autoPlay 
                        muted 
                        loop 
                        className='top-0 left-0 absolute object-cover w-[100%] h-[100%]'
                  >
                  </video>
                </div>
              </div>
          ) : (

          <div className='flex flex-col items-center gap-20 px-5 lg:px-0'>
            <h3 className='text-6xl font-spaceMedium max-w-[20ch] text-center z-30'>
              {location?.state?.rocketName?.length === 1 ? "Rocket has" : "Rockets have"} been launched <span className='outlineText'>successfully!</span> 
            </h3>

            {location?.state?.rocketName ? (

              <div className='flex flex-col items-center z-30'>
                {location?.state?.rocketName.map((data, index) => (
                  <p className='text-2xl' key={index}>{data}</p>
                ))}
              </div>
              
              ) :
              <div className='flex flex-col items-center z-30'>
                <p>No rockets found</p>
              </div>
            }

            <div className='z-30'>
              <Button buttonColor={'filled-purple'} btnText={'Go back to the dashboard'} link={'/admin/dashboard'} />
            </div>

            {/* BG VID */}
            <div className='top-0 left-0 overflow-hidden'>
              {/* VIDEO */}
              <video src={afterLaunchingVid} 
                    autoPlay 
                    muted 
                    loop 
                    className='top-0 left-0 absolute object-cover w-[100%] h-[100%]'
              >
              </video>
            </div>

          </div>
        )}
    </section>
  )
}
