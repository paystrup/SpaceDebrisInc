import React from 'react';
import ListViewRowUnavailable from './ListViewRowUnavailable';

export default function ListUnAvailable({ data }) {
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
            title: "Returning in"
        },
        {
            id: 6,
            title: "Mission progress"
        },
        {
            id: 7,
            title: "Destination"
        }
    ]

    return (
        <div className='listViewWrapper px-6 bg-primaryGray-700 py-6 flex items-center justify-center rounded-2xl'>
            {/* HEADER BAR */}
            <table className='w-full'>
                <thead>
                    <tr className='grid grid-cols-7 bg-primaryGray-800 gap-6 py-2 rounded-lg'>
                        {rocketList.map(({ id, title }) => (
                            <th key={id} className='uppercase font-spaceRegular flex justify-center items-center'>
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {/* DATA ROWS */}
                    {data?.content?.rockets?.map((data, index) => (
                        <>
                            {!data?.availability && 
                                <ListViewRowUnavailable 
                                    data={data} 
                                    key={index}
                                    launchTime={data?.lastLaunchTime}
                                    tripTime={data?.currentCargoshipment?.destination?.tripTime}
                                />
                            }
                        </>
                        
                    ))}
                </tbody>
                
            </table>
        </div>
    )
}
