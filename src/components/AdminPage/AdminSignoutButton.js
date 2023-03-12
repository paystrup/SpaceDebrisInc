import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminSignoutButton({ handleOpenMenu }) {
    const navigate = useNavigate();

    // TEMP local login until backend is setup
    const loggedIn = localStorage.getItem("loggedIn");

    const loggedOutToast = "You have logged out 👋";

    const handleSignOut = (e) => {
        localStorage.setItem("loggedIn", "");
        
        // console.log(loggedIn);
        navigate("/admin");
        toast(loggedOutToast);
        handleOpenMenu();
    }
    
    return (
        <button onClick={handleSignOut} className='text-sm w-full lg:w-auto cursor-pointer text-observableBlack border-starWhite bg-starWhite rounded-2xl px-8 py-4 lg:py-2 hover:border-galaxyPurple hover:bg-galaxyPurple hover:border-2 hover:text-starWhite font-spaceRegular border-2  active:scale-95 active:ease-in duration-150 uppercase'>
            Sign out
        </button>
    )
}
