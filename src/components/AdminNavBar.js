import React, { useState, useEffect, useRef } from 'react';
import navLogoSmall from '../media/logo/svg/sdIconWhite.svg';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import AdminSignoutButton from './AdminPage/AdminSignoutButton';
import { gsap } from "gsap";

// our endpoint
import { dashboardURL } from "../components/getAPI";

export default function AdminNavBar() {
    // state for opening the mobile menu
    const [openMenu, setOpenMenu] = useState(false);

    // TEMP local login until backend is setup
    const loggedIn = localStorage.getItem("loggedIn");

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    // for fetching
    const [data, setData] = useState([]);

    // Our endpoint
    const url = dashboardURL;

    // fetch starts here
    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        getData();
    }, [url]);

    // navbar path
    const adminNavbar = data?.content?.navBar[0]?.content;

    // -------------------------- GSAP ANIMATIONS --------------------------------------
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {
        if (openMenu) {     
            tl.current = gsap.timeline(({defaults: {duration: 0.3, ease: "Power1.easeOut"}}))
            
            .to(q(".mobileMenu"), {
                y: 0,
                opacity: 1,
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
            })
            .to(q(".navItem"), {
                y: 0,
                opacity: 1
            })
            .to(q(".xMark"), {
                y: 0,
                opacity: 1
            })
            .to(q(".signOutBtn"), {
                y: 0,
                opacity: 1
            });;
        }  
    }, [q, openMenu]);

  return (
    <nav className='2xl:px-32 xl:px-14 md:px-10 px-5 lg:py-4 py-4 bg-primaryGray-700 text-starWhite font-spaceRegular fixed z-50 w-full'>
        {/* DESKTOP NAV */}
        <div className='desktopNav hidden lg:flex justify-between'>
            <Link to="/" className='hover:opacity-50 flex gap-4 items-center text-lg font-spaceMedium'>
                <img src={navLogoSmall} alt="Space Debris INC Logo" className='h-5'></img>
                <p>{adminNavbar?.headline}</p>
            </Link>

            <ul className='flex items-center gap-16'>
                {adminNavbar?.cta?.map((data, index) => (
                    <li key={index}>
                        <NavLink to={data?.url}>{data?.name}</NavLink>
                    </li>
                ))}

                {/* IF ADMIN LOGGED IN SHOW LOGOUT BTN */}
                {loggedIn && <AdminSignoutButton />}
            </ul>
        </div>

        {/* MOBILE NAV */}
        <div className='mobileNav flex items-center justify-between lg:hidden' ref={el}>
            <Link to="/" className='hover:opacity-50 flex gap-4 items-center text-lg'>
                <img src={navLogoSmall} alt="Space Debris INC Logo" className='h-7'></img>
                <p>{adminNavbar?.headline}</p>
            </Link>

            <button aria-label="menu" onClick={handleOpenMenu}>
                <Bars3CenterLeftIcon className='h-10 w-10 hover:cursor-pointer'/>
            </button>
            
            {/* OPEN MENU */}
            {openMenu && (
                <div className='mobileMenu headingFade fixed top-0 left-0 bg-galaxyPurple h-[100%] w-[100%] z-50 flex flex-col items-center justify-between pb-14 pt-10 px-5'>
                    <div className='flex flex-col items-center'>
                        <XMarkIcon className='xMark gsapFadeUp h-10 w-10 cursor-pointer' onClick={handleOpenMenu}/>

                        <ul className='navItem gsapFadeUp flex flex-col gap-6 text-center text-5xl pt-24'>
                            {adminNavbar?.cta?.map((data, index) => (
                                <li className='hover:opacity-70 transition-all' key={index} onClick={handleOpenMenu}>
                                    <NavLink to={data?.url}>{data?.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IF ADMIN LOGGED IN SHOW LOGOUT BTN */}
                    {loggedIn && <AdminSignoutButton className='signOutBtn gsapFadeUp' handleOpenMenu={handleOpenMenu} />}
                </div>
            )}
        </div>
    </nav>
  )
}
