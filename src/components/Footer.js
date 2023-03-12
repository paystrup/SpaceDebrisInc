import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import icon from '../media/logo/svg/sdIconWhite.svg';
import '../style/Footer.css';

// our endpoint
import { akqaURL } from "../components/getAPI";

export default function Footer() {
    // for fetching
    const [spaceData, setSpaceData] = useState([]);

    // Our endpoint
    const url = akqaURL;

    // fetch starts here
    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setSpaceData(data);
        }
        getData();
    }, [url]);

    // check current location
    const location = useLocation();

    // On footer on the RocketPage.js
    // Hardcoded for now, until backend is up
    if (location.pathname === "/rockets/" || location.pathname === "/admin/dashboard/launchinfo")
    return (
        null
    )

    return (
        <footer className='xl:px-32 px-6 md:px-10 pb-14 lg:pb-28 pt-20 lg:pt-52'>
            <section className='flex flex-col lg:flex-row justify-between gap-16 md:gap-16 lg:gap-5 xl:gap-0'>
                <aside className='flex md:flex-row gap-5 md:items-center lg:place-items-start lg:justify-center flex-col'>
                    <img src={icon} alt="Space Debris Logo" className='h-20 w-20'></img>
                    <h3 className='text-5xl max-w-[12ch] font-spaceMedium leading-none'>
                        {spaceData?.content?.footer[0]?.content?.headline}
                    </h3>
                </aside>
                
                <div className='flex-col md:flex md:flex-row lg:justify-center gap-28 md:mb-14 lg:mb-0'>
                    <div className='flex flex-col md:flex-row gap-14 lg:gap-28'>

                        {/* NO CONTACT INFO ON MOBILE -> ONLY THE BUTTON BELOW, ADD CLASS BELOW TO CONTACT ONLY */}
                        {spaceData?.content?.footer[0]?.content?.sections.map((data, index) => (
                                <div key={index} className={data?.content?.contactInformation ? 'hidden md:flex md:flex-col gap-6 md:gap-2' : 'flex flex-col gap-6 md:gap-2'}>
                                    <h4 className='uppercase font-spaceMedium'>{data?.content?.headline}</h4>
                                    <ul className='font-spaceRegular flex flex-col gap-2'>
                                        {/* IF CTA TRUE -> SITEMAP -> no external/internal check */}
                                        {data?.content?.cta && (
                                            <React.Fragment key={index}>
                                                {data?.content?.cta?.map(({name, url}) => (
                                                    <li className='defaultHover text-2xl md:text-base font-spaceRegular flex flex-col gap-4 md:gap-2 underline underline-offset-4'>
                                                        <NavLink to={url}>{name}</NavLink>
                                                    </li>
                                                ))}
                                            </React.Fragment>
                                        )}

                                        {/* IF CONTACT TRUE -> MAP THROUGH INFO -> CONDITIONAL FOR PHONE / EMAIL / TEXT */}
                                        {data?.content?.contactInformation && (
                                            <React.Fragment key={index}>
                                                {data?.content?.contactInformation?.map((data, index) => (
                                                    <li key={index} className='max-w-[15ch]'>
                                                        {data?.content?.type === "email" && (
                                                            <a className='underline underline-offset-2 defaultHover' href={`mailto:` + data?.content?.text}>{data?.content?.text}</a>
                                                        )}

                                                        {data?.content?.type === "phone" && (
                                                            <a className='underline underline-offset-2 defaultHover' href={`tel:` + data?.content?.text}>{data?.content?.text}</a>
                                                        )}

                                                        {data?.content?.type === "text" && (
                                                            <p>{data?.content?.text}</p>
                                                        )}

                                                        {data?.content?.type === "address" && (
                                                            <p>{data?.content?.text}</p>
                                                        )}
                                                    </li>
                                                ))}
                                            </React.Fragment>
                    
                                        )}
                           
                                        {/* IF ICONS = TRUE, MAP AND DISPLAY */}
                                        {data?.content?.iconCTA && (
                                            <li className='flex gap-5'>
                                                {data?.content?.iconCTA?.map((data, index) => (
                                                    <a key={index} className='svgList defaultHover' href={data?.content?.cta?.url} target={data?.content?.cta?.target} rel='noreferrer'>
                                                        <div dangerouslySetInnerHTML={{__html: data?.content?.icon}} />
                                                    </a>        
                                                ))}
                                            </li>
                                        )}
                                    </ul>
                                </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE CONTACT CTA -> CONTACT LI IS HIDDEN -> CLEANER UI BETTER CTA */}
            <div className='flex md:hidden pt-16'>
                <a 
                    href="mailto:hello@sdinc.com" 
                    className='bg-galaxyPurple w-full text-center rounded-2xl px-10 py-3 hover:border-galaxyPurple hover:bg-transparent hover:border-2 hover:text-galaxyPurple font-spaceRegular border-2 border-galaxyPurple active:scale-95 active:ease-in duration-150 uppercase'
                >
                    Get in contact
                </a>
            </div>

            {/* BOTTOM LINE - DETAILS */}
            <section className='mt-6 lg:mt-24 uppercase'>
                <hr className=' bg-primaryGray-800 border-primaryGray-800'></hr>
                <div className='flex justify-between text-primaryGray-200 mt-5 text-xs md:text-base'>
                    <p>SPACE DEBRIS INC © 2023</p>
                    <Link to="/policy">PRIVACY POLICY</Link>
                    <Link to="/terms">TERMS & CONDITIONS</Link>
                </div>
            </section>
        </footer>
    )
}
