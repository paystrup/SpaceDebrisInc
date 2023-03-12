import React from 'react';

export default function ListViewRowAvailable({ data }) {
    
  return (
    <>
        <tr className='grid grid-cols-7 gap-6 text-xs lg:text-base hover:bg-[#343536] bg-opacity-10 rounded-lg transition-all'>
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

            {/* TRIPTIME */}
            <td className='flex flex-col justify-center items-center py-4'>                          
                <p className='uppercase'>
                    {data?.currentCargoshipment?.destination?.tripTime.toFixed(0)} MIN
                </p>           
            </td>

            {/* PIECES OF TRASH */}
            <td className='flex flex-col justify-center items-center py-4'>                          
                <p className='uppercase'>
                    {data?.currentCargoshipment?.piecesOfTrash}
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
