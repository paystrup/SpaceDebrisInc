import React from 'react'

export default function RocketButton({ data, handleLaunchIDs, launchIDs }) {
    return (
        <button 
        onClick={() => handleLaunchIDs(data?.rocketGuid, data?.rocketName)} 
        tabIndex={0} 
        className={
            launchIDs.includes(data?.rocketGuid) === true ? 
            'cursor-pointer transition-all flex items-center gap-4 bg-galaxyPurple px-2 py-1 rounded-lg text-xl xl:text-2xl uppercase' 
            : ' hover:bg-primaryGray-800 active:bg-primaryGray-800 cursor-pointer transition-all flex items-center gap-4 bg-primaryGray-900 px-2 py-1 rounded-lg text-xl xl:text-2xl uppercase'
        }
    >
        <svg className={launchIDs.includes(data?.rocketGuid) === true ? 'rounded-full w-5 h-5 bg-states-success' : 'rounded-full w-5 h-5 bg-starWhite'}>
            <circle cx={50} cy={50} r={10} />
        </svg>
        <h4>{data?.rocketName}</h4>
    </button>
    )
}
