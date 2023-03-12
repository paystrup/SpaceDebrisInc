import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function ListViewRowUnavailable({ data, launchTime, tripTime }) {
    const loadingText = "LOADING ...";
    const [returnTime, setReturnTime] = useState(loadingText);
    const [missionPercentage, setMissionPercentage] = useState(loadingText);
  
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Countdown
            const dateString = launchTime;
            const today = new Date();
            const date = moment(dateString);
            date.add(tripTime, 'minutes');
            const duration = moment.duration(date.diff(today));
            const totalTimeLeft = duration?._milliseconds / 60_000;
            const minutesLeft = duration?._data?.minutes.toString().padStart(2, "0");
            const secondsLeft = duration?._data?.seconds.toString().padStart(2, "0");
            const hoursLeft = duration?._data?.hours.toString().padStart(2, "0");
            const returnTime = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
            const missionPercentage =  ((tripTime - totalTimeLeft) / tripTime * 100).toFixed(2) + "%";
            setReturnTime(returnTime);
            setMissionPercentage(missionPercentage);
            if(totalTimeLeft <= 0) {
                clearInterval(intervalId);
                setMissionPercentage("100%"); // time stops miliseconds before the % is done, this fixes it
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [launchTime, tripTime]);
    
    return (
        <>
            <tr className='grid grid-cols-7 gap-6 hover:bg-[#343536] bg-opacity-10 rounded-lg transition-all'>
                {/* ROCKET NAME */}
                <td className='flex gap-2 justify-center items-center'>
                    <div 
                        className='h-2 w-2 rounded-full'
                        style={{
                            backgroundColor: data?.rocketColorCode
                        }}
                    ></div>                                     
                    <p className='uppercase'>
                        {data?.rocketName}
                    </p>
                </td>

                {/* AVAILABILITY */}
                <td className='flex flex-col justify-center items-center'>                                 
                    <p 
                        className='uppercase'
                        style={{
                            color: data.availability ? '#98FF59' : '#FF2B2B'
                        }}
                    >
                        {data?.availability.toString()}
                    </p>         
                </td>
                
                {/* CARGO WEIGHT - CURRENT/MAX */}
                <td className='flex flex-col justify-center items-center'>                          
                    <p className='uppercase'>
                        {data?.currentCargoshipment?.current_kg.toFixed(1)}/{data?.currentCargoshipment?.max_kg} <span className='text-primaryGray-300'>KG</span>
                    </p>           
                </td>

                {/* CARGO SIZE M3 - CURRENT/MAX */}
                <td className='flex flex-col justify-center items-center py-4'>                          
                    <p className='uppercase'>
                        {data?.currentCargoshipment?.current_m3.toFixed(1)}/{data?.currentCargoshipment?.max_m3} <span className='text-primaryGray-300'>M3</span>
                    </p>           
                </td>

                {/* RETURNING IN */}
                <td className='flex flex-col justify-center items-center py-4 fadeIn2'>                          
                    <p className='uppercase'>
                        {returnTime}
                    </p>           
                </td>

                {/* MISSION PROGRESS */}
                <td className='flex flex-col justify-center items-center py-4 fadeIn2'>                          
                    <p className='uppercase'>
                        {missionPercentage}
                    </p>           
                </td>

                
                {/* DESTINATION */}
                <td className='flex flex-col justify-center items-center py-4'>                          
                    <p className='uppercase'>
                        {data?.currentCargoshipment?.destination?.planet_name}
                    </p>           
                </td>
            </tr>
            <hr className='text-primaryGray-800'></hr>
        </>
    )
}
