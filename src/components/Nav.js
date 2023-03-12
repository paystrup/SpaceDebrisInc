import React, { useState, useEffect, useRef } from 'react';
import navLogoBig from '../media/logo/svg/sdLogoWhite.svg';
import navLogoSmall from '../media/logo/svg/sdIconWhite.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import AdminNavBar from './AdminNavBar';
import { gsap } from "gsap";

// our endpoint
import { akqaURL } from "../components/getAPI";

export default function Nav() {
  // Get location
  const location = useLocation();

  // State for storing fetch data
  const [data, setData] = useState([]);

  // Our endpoint
  const url = akqaURL;

  // Fetch starts here
  useEffect(() => {
      async function getData() {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
      }
      getData();
  }, [url]);

  // State for opening/closing the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  };

  //GSAP ANIMATIONS
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
        });
      } 
  }, [q, openMenu]);

  // Admin navigation - todo make this dynamic
  if (location.pathname.includes("/admin"))
  return (
      <AdminNavBar />
  )

  return (
    <nav className='2xl:px-32 xl:px-14 md:px-10 px-5 lg:py-6 py-4 bg-observableBlack text-starWhite font-spaceRegular fixed z-50 w-full'>

      {/* DESKTOP NAV */}
      <div className='desktopNav hidden lg:flex justify-between'>
        <Link to="/" className='hover:opacity-50'>
          <img src={navLogoBig} alt="Space Debris INC Logo" className='h-5'></img>
        </Link>

        <ul className='flex gap-16'>
          {data?.content?.navBar[0]?.content?.cta.map((data, index) => (
            <li key={index} className='hover:opacity-50 transition-all'>
              <NavLink to={data?.url}>{data?.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE NAV */}
      <div className='mobileNav flex items-center justify-between lg:hidden' ref={el}>
        <Link to="/" className='hover:opacity-50'>
          <img src={navLogoSmall} alt="Space Debris INC Logo" className='h-7'></img>
        </Link>

        <button onClick={handleOpenMenu} aria-label="menu">
          <Bars3CenterLeftIcon className='h-10 w-10 hover:cursor-pointer'/>
        </button>
        
        {/* OPEN MENU */}
        {openMenu && (
          <div className='mobileMenu headingFade fixed top-0 left-0 bg-galaxyPurple h-[100%] w-[100%] z-50 flex flex-col items-center pt-10'>
            <XMarkIcon className='xMark gsapFadeUp h-10 w-10 cursor-pointer' onClick={handleOpenMenu}/>

            <ul className='navItem gsapFadeUp flex flex-col gap-6 text-center text-5xl pt-24'>
              {data?.content?.navBar[0]?.content?.cta.map((data, index) => (
                <li className='hover:opacity-70 transition-all' key={index} onClick={handleOpenMenu}>
                  <NavLink to={data?.url}>{data?.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
