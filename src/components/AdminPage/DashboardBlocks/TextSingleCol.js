import React from 'react'

export default function TextSingleCol({ title, data, suffix, suffixValue, textSize }) {
    return (
        <div className='flex gap-5 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
            <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                {title}
            </h6>
            <h3 className={`leading-none font-spaceMedium text-[110px]`}>
                {/* DATA VALUE */}
                {data}
                {/* SUFFIX  - NEEDS TO BE CALCULATED IN THE BACKEND */}
                {suffix &&
                    <span className='text-primaryGray-800'>
                        {suffixValue}
                    </span>
                }
            </h3>
        </div>
    )
}
