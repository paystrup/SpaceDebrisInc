import React from 'react'

export default function TextQuadCol({ data, data2, data3, data4, title, title2, title3, title4, suffix, suffix2, suffix3, suffix4, suffixValue, suffixValue2, suffixValue3, suffixValue4 }) {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3'>

                {/* DATA 1 */}
                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title}
                    </h6>
                    <h3 className='text-5xl leading-none font-spaceMedium'>
                        {data}
                        {suffix && <span className='text-primaryGray-800'>{suffixValue}</span>}
                    </h3>
                </div>

                {/* DATA 2 */}
                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title2}
                    </h6>
                    <h3 className='text-5xl leading-none font-spaceMedium'>
                        {data2}
                        {suffix2 && <span className='text-primaryGray-800'>{suffixValue2}</span>}
                    </h3>
                </div>
            </div>

            {/* DATA */}
            <div className='flex gap-3'>
                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title3}
                    </h6>
                    <h3 className='text-5xl leading-none font-spaceMedium'>
                        {data3}
                        {suffix2 && <span className='text-primaryGray-800'>{suffixValue3}</span>}
                    </h3>
                </div>
                <div className='flex gap-5 w-1/2 flex-col justify-between bg-primaryGray-900 px-4 py-3 rounded-2xl'>
                    <h6 className='text-xl font-spaceMedium text-primaryGray-200'>
                        {title4}
                    </h6>
                    <h3 className='text-5xl leading-none font-spaceMedium'>
                        {data4}
                        {suffix4 && <span className='text-primaryGray-800'>{suffixValue4}</span>}
                    </h3>
                </div>
            </div>
        </div>
    )
}
