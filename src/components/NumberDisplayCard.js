import React from 'react';

export default function NumberDisplayCard( {title, number, paragraph, dataTitle, data, valueIdentifier} ) {
  return (
    <div className='bg-primaryGray-900 h-96 w-80 px-5 py-5 flex flex-col justify-between border-dashed border-2 border-primaryGray-300'>
        <div className='flex flex-col gap-2'>
            <div className='flex text-lg uppercase font-spaceMedium justify-between'>
                <h5>_{title}</h5>
                <h5 className='text-primaryGray-800'>[{number}]</h5>
            </div>
            <p className='text-md text-primaryGray-200'>
                {paragraph}
            </p>
        </div>
        <div className='font-spaceMedium uppercase leading-none'>
            <h6 className='text-2xl text-primaryGray-100'>{dataTitle}</h6>

            {/* TODO - Decide if we need this restriction in the frontend or backend? Fx. max 4 ch in the CMS */}
            <h3 className={`text-[120px] flex flex-wrap` + ((data?.toString().length > 3 ? 'text-[120px]' : 'text-[120px]'))}>
                {data}
                {valueIdentifier && 
                    <span className='outlineText'>
                        {valueIdentifier}
                    </span>
                }
            </h3>
        </div>
    </div>
  )
}
