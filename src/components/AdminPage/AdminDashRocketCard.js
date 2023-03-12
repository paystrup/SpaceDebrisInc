import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import DoughnutChart from './Charts/DoughnutChart';

export default function AdminDashRocketCard({ id, name, launchTime, tripTime, availability, trashAmount, cargoMax, cargoCurrent, color, cargom3, cargom3max, tripLength, destination }) {
    const [returnTime, setReturnTime] = useState("00:00:00");
    const [missionPercentage, setMissionPercentage] = useState("0%");
    const [refreshBtn, setRefreshBtn] = useState(false);
    const [animation, setAnimation] = useState(false);
    
    useEffect(() => {
        setAnimation(false);
        const intervalId = setInterval(() => {
            // Countdown
            const dateString = launchTime;
            const today = new Date();
            const date = moment(dateString);
            date.add(tripTime, 'minutes');
            const duration = moment.duration(date.diff(today));
            const totalTimeLeft = duration?._milliseconds / 60_000;

            // If timeleft / timer is above 0
            if (totalTimeLeft > 0) {
                const minutesLeft = duration?._data?.minutes.toString().padStart(2, "0");
                const secondsLeft = duration?._data?.seconds.toString().padStart(2, "0");
                const hoursLeft = duration?._data?.hours.toString().padStart(2, "0");
                const returnTime = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
                const missionPercentage =  ((tripTime - totalTimeLeft) / tripTime * 100).toFixed(1) + "%";
                setReturnTime(returnTime);
                setMissionPercentage(missionPercentage);
            }

            // If timer is under or equal to 0, clear interval, stop timer and set percentage to 100, show refresh btn
            if(totalTimeLeft <= 0) {
                clearInterval(intervalId);
                setMissionPercentage("100%"); // time stops miliseconds before the % is done, this fixes it
                setRefreshBtn(true); // add refresh btn after timer is out -> temp solution
            }
        }, 1000);
        setAnimation(true);
        return () => clearInterval(intervalId);
    }, [launchTime, tripTime]);

    // Temp calculate fill percentage until backend is up
    const cargoFillPercentage = ((cargoCurrent / cargoMax) * 100).toFixed(1) + "%";
    const cargoKgPercentage = ((cargoCurrent / cargoMax) * 100).toFixed(0);
    const cargoM3Percentage = ((cargom3 / cargom3max) * 100).toFixed(0);

    // TODO - add skeleton loading, send loading as prop
    if (availability)
    return (
        <article className='bg-primaryGray-700 min-h-[17rem] min-w-[20rem] px-5 py-5 rounded-2xl flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <div 
                        className={`h-4 w-4 xl:h-8 xl:w-8 rounded-sm xl:rounded-lg`}
                        style={{
                            backgroundColor: color
                        }}
                    ></div>
                    <h5 className='text-xl md:text-2xl font-spaceMedium capitalize'>{name}</h5>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-states-success'></div>
                    <p className='text-primaryGray-200'>Availability</p>
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='w-1/2 py-6 flex flex-col gap-2'> 
                    <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                        <p className='uppercase'>Packages</p>
                        <p className='text-primaryGray-200'>{trashAmount}</p>
                    </div>

                    <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                        <p className='uppercase'>Trip time</p>
                        <p className='text-primaryGray-200'>{tripTime.toFixed(0)} MIN</p>
                    </div>

                    <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                        <p className='uppercase'>Destination</p>
                        <p className='text-primaryGray-200'>{destination}</p>
                    </div>
                </div>

                <div className='w-1/2 py-6 lg:px-5 flex lg:gap-2'>
                        <DoughnutChart rocketColor={color} title={"KG"} percentage={cargoKgPercentage}/>
                        <DoughnutChart rocketColor={color} title={"M3"} percentage={cargoM3Percentage} />
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <p>Cargo fill percentage</p>
                    <p className='text-primaryGray-300'>{cargoFillPercentage}</p>
                </div>
                <div className='h-8 bg-primaryGray-800 rounded-md mt-2'>
                    <div 
                        className={`h-full rounded-md`}
                        style={{
                            backgroundColor: color,
                            width: cargoFillPercentage,
                            borderRadius: "6px"
                        }}
                    ></div>
                </div>
            </div>
        </article>
    )
    
    // Temp refresh data btn for rockets until all rockets have their own endpoint
    function refreshPage() {
        window.location.reload(false);
    }

    if (!availability)
    return (
        <article className='bg-observableBlack border-2 border-primaryGray-800 border-dashed min-h-[17rem] min-w-[20rem] px-5 py-5 rounded-2xl flex flex-col justify-between transition-all'>
            {refreshBtn ? (
                <div className='flex flex-col h-full gap-5 items-center justify-center'>
                    <p className='capitalize'>{name} has returned</p>
                    <button onClick={refreshPage} className='bg-galaxyPurple px-8 py-4 rounded-2xl flex items-center gap-2'>
                        <ArrowPathIcon className='h-5 w-5 text-primaryGray-100'/> Refresh data
                    </button>
                </div>
            )
            : (
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div 
                                className={`h-4 w-4 xl:h-8 xl:w-8 rounded-sm xl:rounded-lg`}
                                style={{
                                    backgroundColor: color
                                }}
                            ></div>
                            <h5 className='text-xl md:text-2xl font-spaceMedium capitalize'>{name}</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-2 w-2 rounded-full bg-states-error'></div>
                            <p className='text-primaryGray-200'>Availability</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-2'>
                        <div className='w-1/2 py-6 flex flex-col gap-2'> 
                            <div className='h-1/2 flex items-center justify-between border-2 border-dashed px-3 py-2 border-primaryGray-800'>
                                <div className='flex items-start w-full'>
                                    <p className='uppercase text-sm'>Returning in</p>
                                </div>
                                <p className='text-primaryGray-200 transition-all text-sm md:text-2xl'>{returnTime}</p>
                            </div>
                            <div className='h-1/2 flex items-center justify-between border-2 border-dashed px-3 py-2 border-primaryGray-800'>
                                <div className='flex items-start'>
                                    <p className='uppercase text-sm'>Destination</p>
                                </div>
                                <p className='text-primaryGray-200 transition-all text-xs md:text-xl'>{destination}</p>
                            </div>
                        </div>

                        <div className='w-1/2 py-6 flex flex-col gap-2'> 
                            <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                                <p className='uppercase'>Cargo weight</p>
                                <p className='text-primaryGray-200 transition-all'>{cargoCurrent + "/" + cargoMax} <span className='text-primaryGray-300'>KG</span></p>
                            </div>
                            <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                                <p className='uppercase'>Cargo size</p>
                                <p className='text-primaryGray-200 transition-all'>{cargom3 + "/" + cargom3max} <span className='text-primaryGray-300'>M3</span></p>
                            </div>
                            <div className='text-sm flex justify-between border-2 px-3 py-2 border-primaryGray-800'>
                                <p className='uppercase'>Trip length</p>
                                <p className='text-primaryGray-200 transition-all'>{tripLength} <span className='text-primaryGray-300'>KM</span></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between'>
                            <p>Mission progress</p>
                            <p>{missionPercentage}</p>
                        </div>
                        <div className='h-8 bg-primaryGray-800 rounded-md mt-2'>
                            <div 
                                className={animation ? 'h-full rounded-md transition' : 'h-full rounded-md'}
                                style={{
                                    backgroundColor: color,
                                    width: missionPercentage,
                                    borderRadius: "6px"
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}
