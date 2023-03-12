import React from 'react'
import '../style/Button.css';
import { Link } from 'react-router-dom';

export default function Button({main_btn, secondary_btn, dark_btn, buttonColor, link, btnText, outline, main_btn_filled, secondary_btn_filled, dark_btn_filled}){

// BORDER BUTTONS

    if(buttonColor === "purple")
    return(
        <Link   
                aria-label={`Go to ${link}`}
                to={link ? `${link}` : "/"} 
                variant="purple" 
                className={`px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite`}                
        >
            {btnText ? `${btnText}` : "Click here"}
        </Link>
    );

    if(buttonColor === "white")
    return(
        <Link to={link ? `${link}` : "/"}>
            <button variant="white" className='secondary_btn border-2 border-starWhite text-starWhite rounded-2xl px-10 py-3 hover:bg-starWhite hover:text-observableBlack font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>
                {btnText ? `${btnText}` : "Click here"}
            </button> 
        </Link>
    )

    if(buttonColor === "black")
    return(
        <Link to={link ? `${link}` : "/"}>
            <button variant="black" className='dark_btn border-2 border-observableBlack text-observableBlack rounded-2xl px-10 py-3 hover:bg-observableBlack hover:text-starWhite font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>
                {btnText ? `${btnText}` : "Click here"}
            </button> 
        </Link>
    )



// FILLED BUTTONS
    if(buttonColor === "filled-purple")
    return(
        <Link to={link ? `${link}` : "/"}>
            <button variant="purple-filled-button" className='main_btn_filled bg-galaxyPurple rounded-2xl px-10 py-3 hover:border-galaxyPurple hover:bg-transparent hover:border-2 hover:text-galaxyPurple font-spaceRegular border-2 border-galaxyPurple active:scale-95 active:ease-in duration-150 uppercase'>

            {btnText ? `${btnText}` : "Click here"}
            </button>
        </Link>
    );

    if(buttonColor === "filled-white")
    return(
        <Link to={link ? `${link}` : "/"}>
            <button variant="white-filled-button" className='secondary_btn_filled bg-starWhite border-2 border-starWhite rounded-2xl px-10 py-3 hover:border-starWhite text-observableBlack hover:bg-transparent hover:border-2 hover:text-starWhite font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>

            {btnText ? `${btnText}` : "Click here"}
            </button>
        </Link>
    );
    

    if(buttonColor === "filled-black")
    return(
        <Link to={link ? `${link}` : "/"}>
            <button variant= "black-filled-button" className='dark_btn_filled bg-observableBlack border-2 border-observableBlack rounded-2xl px-10 py-3 hover:border-observableBlack text-starWhite hover:bg-transparent hover:border-2 hover:text-observableBlack font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>

            {btnText ? `${btnText}` : "Click here"}
            </button>
        </Link>
    );
    
}

// WIDTH BUTTONS




   