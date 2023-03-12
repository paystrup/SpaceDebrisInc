import React from 'react'

export default function TextTrippleCol({ data, data2, data3, title, title2, title3, suffix, suffix2, suffix3, suffixValue, suffixValue2, suffixValue3 }) {
    return (      
        <div className='flex gap-3 flex-col justify-between'>
            <div className='flex gap-3 lg:h-1/2'>
                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title}
                    </h6>
                    <h3 className='text-3xl lg:text-5xl lg:leading-none font-spaceMedium'>
                        {data}
                        {suffix && <span className='text-primaryGray-800'>{suffixValue}</span>}
                    </h3>
                </div>

                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title2}
                    </h6>
                    <h3 className='text-3xl lg:text-5xl lg:leading-none font-spaceMedium'>
                        {data2}
                        {suffix2 && <span className='text-primaryGray-800'>{suffixValue2}</span>}
                    </h3>
                </div>
            </div>

            <div className='bg-primaryGray-900 px-4 rounded-2xl h-1/2 py-3 flex justify-between items-center text-xl font-spaceMedium'>
                <h6 className=' text-primaryGray-200'>{title3}</h6>
                <h6 className='text-6xl'>
                    {data3}
                    {suffix3 && <span className='text-primaryGray-800'>{suffixValue3}</span>}
                </h6>
            </div>
        </div>
    )
}
