import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../media/png/galaxybg.png';

export default function TrackOrder() {
    // navigation
    const navigate = useNavigate();

    // Animations
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, [])

    // empty state to store user login inputs
    const [trackingID, setTrackingID] = useState({
        trackingID: ""
    });

    // Min/max length for validation - could be Regex
    const minLength = 32;

    // input error state used for styling
    const [inputError, setInputError] = useState(false);

    const handleChange = (e) => {
        setTrackingID({ ...trackingID, [e.target.name]: e.target.value });
        setInputError(false); // reset input errors
        // console.log(trackingID);
    };

    // Error messages
    const inputErrorMsg = `Tracking number must be ${minLength} characters long and follow the pattern: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`;
    const inputErrorToast = `Tracking number does not meet the requirements. Please try again.`;

    function checkIfValidUUID(str) {
        // Regular expression to check if string is a valid UUID
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(str); // true if order guid matches
    }

    // Handle signin with the submit btn
    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkIfValidUUID(trackingID.trackingID)) {
            navigate("/trackorder/" + trackingID.trackingID);
        }

        if (!checkIfValidUUID(trackingID.trackingID)) {
            toast(inputErrorToast, { type: "error" });
            setInputError(inputErrorMsg);
        }
    }

    const handleEnterSubmit = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            e.preventDefault();

            if (checkIfValidUUID(trackingID.trackingID)) {
                navigate("/trackorder/" + trackingID.trackingID);
            }
        }
    }

    const imgBg = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    return (
        <main className="trackOrder">
            <section className="w-full flex flex-col items-center" style={imgBg}>
                <div className='trackOrderWrapper flex flex-col items-center justify-center h-[100vh] gap-24 w-[30%]'>
                    <div className="text-center" data-aos="fade-up">
                        <h2 className='text-6xl font-spaceMedium mb-4'>Track your <span className="outlineText">order</span></h2>
                        <p className="text-lg text-primaryGray-200">Check the current operation status of your order by entering your order tracking number below. Going to Mars, Jupiter, Neptun or Copenhagen? Find out here.</p>
                    </div>

                    <form className="flex flex-col gap-4 w-full" data-aos="fade-up" data-aos-delay="100">
                        {inputError ? <label className="text-states-error">{inputError}</label> : <label>Enter your order tracking ID</label>}
                        <input 
                            className='py-4 px-3 w-full rounded-xl bg-primaryGray-700 active:border-galaxyPurple focus:border-galaxyPurple'
                            type="text"
                            name="trackingID"
                            aria-label="Order tracking ID"
                            placeholder="Tracking ID [XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX]"
                            pattern="[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
                            value={trackingID.trackingID}
                            onChange={(e) => handleChange(e)}
                            onKeyUp={(e) => handleEnterSubmit(e)}
                        >
                        </input>

                        {/* SUBMIT */}
                        <input
                            className="w-full cursor-pointer bg-galaxyPurple rounded-2xl px-10 py-3 hover:border-galaxyPurple hover:bg-transparent hover:border-2 hover:text-galaxyPurple font-spaceRegular border-2 border-galaxyPurple active:scale-95 active:ease-in duration-150 uppercase" 
                            type="submit" 
                            onClick={handleSubmit} 
                            value="TRACK YOUR ORDER" 
                            aria-label="Click here to track your order"    
                        />
                    </form>
                </div>
            </section>
        </main>
    )
}
