import React from 'react'

export default function BoardMemberCard({ img, name, position }) {

    return (
        <div className='boardMemberCard mb-14'>
            {/* BOARD MEMBER IMG */}
            <div
                role="img" aria-label={`Board Member ${name}`}
                className='h-80 rounded-md bg-galaxyPurple mb-6'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >

            </div>
            <h5 className='text-2xl font-spaceMedium'>{name}</h5>
            <p className='text-xl text-primaryGray-200'>{position}</p>
        </div>
    )
}
