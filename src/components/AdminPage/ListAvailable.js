import React from 'react';
import ListViewRowAvailable from './ListViewRowAvailable';

export default function ListAvailable({ data }) {
    // Static here now until backend is up, and user can change out values to display
    const rocketList = [
        {
            id: 1,
            title: "ID"
        },
        {
            id: 2,
            title: "Availability"
        },
        {
            id: 3,
            title: "Cargo weight"
        },
        {
            id: 4,
            title: "Cargo size"
        },
        {
            id: 5,
            title: "Trip time"
        },
        {
            id: 6,
            title: "Packages"
        },
        {
            id: 7,
            title: "Destination"
        }
    ]
    return (
        <div className='listViewWrapper px-2 lg:px-6 md:bg-primaryGray-700 py-6 flex items-center justify-center rounded-2xl'>
            {/* HEADER BAR */}
            <table className='w-full'>
                <thead>
                    <tr className='grid grid-cols-7 text-xs lg:text-base bg-primaryGray-800 gap-6 py-2 rounded-lg'>
                        {rocketList.map(({ id, title }) => (
                            <th key={id} className='uppercase flex justify-center items-center'>
                               {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                {/* DATA ROWS */}
                {data?.content?.rockets?.map((data, index) => (
                    <>
                        {data?.availability && 
                            <ListViewRowAvailable 
                                data={data} 
                                key={index}
                            />
                        }
                    </>
                ))}   
            </table>
        </div>
    )
}
