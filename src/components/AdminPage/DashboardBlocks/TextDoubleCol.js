import React from 'react'

export default function TextDoubleCol({ title, title2, data, data2, suffix, suffix2, suffixValue, suffixValue2 }) {
  return (
    <div className='flex gap-3'>
        {/* DATA */}
        <div className='flex gap-5 flex-col justify-between bg-primaryGray-900 px-4 w-1/2 py-3 rounded-2xl'>
            <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                {title}
            </h6>
            <h3 className='text-[150px] leading-none text-galaxyPurple font-spaceMedium'>
                {data} {suffix && suffixValue}
            </h3>
        </div>

        {/* DATA 2 */}
        <div className='flex gap-5 flex-col justify-between w-1/2 bg-primaryGray-900 px-4 py-3 rounded-2xl'>
            <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                {title2}
            </h6>
            <h3 className='text-[150px] leading-none text-states-success font-spaceMedium'>
                 {data2} {suffix2 && suffixValue2}
            </h3>
        </div>
    </div>
  )
}
