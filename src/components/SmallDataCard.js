import React from 'react';
//CountUp, Source: https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

//Icons
import { BoltIcon, ClockIcon, ArrowPathIcon, ScaleIcon } from '@heroicons/react/24/outline';
import speedoMeter from '../media/svg/rocketPage/speedometer.svg';
import boxIcon from '../media/svg/rocketPage/boxIcon.svg';

export default function SmallDataCard( title, icon, data) {
  return (
    <div className='smallDataCard bg-primaryGray-900 h-28 w-64 border-2 border-primaryGray-300 border-dashed flex justify-center flex-col items-center'>
        <div className='flex items-center justify-center gap-[4px]'>
        
            {icon === "bolt" && <BoltIcon className='h-8 w-8' />}
            {icon === "speed" && (
                <div className='flex items-center justify-center gap-[4px]'>
                    <img src={speedoMeter} className="h-8 w-8" alt='Speedometer Icon'></img>
                    <CountUp
                        start={0}
                        end={data}
                        duration={0.7}
                    >
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} className='text-4xl font-spaceMedium'></span>
                        </div>
                    )}
                    </CountUp> 
                </div>
            )}
            {icon === "box" && <img src={boxIcon} className="h-8 w-8" alt='Speedometer Icon'></img>}
            {icon === "clock" && <ClockIcon className='h-8 w-8'/>}
            {icon === "arrows" && <ArrowPathIcon className='h-8 w-8'/>}
            {icon === "scale" && <ScaleIcon className='h-8 w-8'/>}

            <h6 className='text-4xl font-spaceMedium'>{data}</h6>
        </div>
        <p className='uppercase text-primaryGray-300'>{title}</p>
    </div>
  )
}
