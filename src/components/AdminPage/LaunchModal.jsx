import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { Stepper, Step } from "react-form-stepper";
import LaunchButton from './LaunchButton';
import RocketButton from './RocketButton';

export default function LaunchModal({ data, handleLaunchModal }) {
    // State for checking amount of available rockets
    const availableRockets = [];

    const checkAvailableRockets = () => {
        data?.content?.rockets?.forEach(element => {
            if (element?.availability === true) (
                availableRockets.push({
                    available: true
                })
            )
        });
    }
    checkAvailableRockets();
    // console.log(availableRockets);

    // Handle accept policy
    const [policyAccept, setPolicyAccept] = useState(false);
    
    const handlePolicyAccept = () => {
        setPolicyAccept(!policyAccept);
        // console.log(policyAccept);
    };

    // State for handling selected rockets
    const [launchIDs, setLaunchIDs] = useState([]);
    const [launchRocketsNames, setLaunchRocketNames] = useState([]);

    // Add rocketname to array -> merge
    // If rocketName exists in array, filter it out -> no duplicates
    const handleLaunchIDs = (rocketID, rocketName) => {
        if (launchIDs.includes(rocketID)) {
            setLaunchIDs(prevSelectedRocketIDs => prevSelectedRocketIDs.filter(rocket => rocket !== rocketID));
            setLaunchRocketNames(prevSelectedRocketNames => prevSelectedRocketNames.filter(rocket => rocket !== rocketName));
            // console.log(launchIDs);
            // console.log(launchRocketsNames);
        } else {
            setLaunchIDs(prevSelectedRocketIDs => [...prevSelectedRocketIDs, rocketID]);
            setLaunchRocketNames(prevSelectedRocketNames => [ ...prevSelectedRocketNames, rocketName]);
            // console.log(launchIDs);
            // console.log(launchRocketsNames);
        }
    };

    // State for controlling view of steps
    const [step, setStep] = useState(0);

    // Error msg's
    const policyError = "Please accept our internal rocket launch policies.";
    const rocketSelectError = "Please select min. 1 rocket.";

    // Check if rockets are added and policy is checked
    const handleNextStep = () => {
        if (policyAccept & launchIDs.length > 0) {
            setStep(1);
        }
        if (!policyAccept) {
            toast(policyError, { type: "error" });
        }
        if (launchIDs.length === 0) {
            toast(rocketSelectError, { type: "error" });
        }
    };

    // If no rockets are available
    const noRocketsFoundMsg = "No available rockets. Please try again later.";
    const noRocketsFoundMsg2 = "All rockets are currently cruising around in orbit, please wait for their return patiently, and check the dashboard for updates.";

    const btnStyle = "w-1/2 px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite";
    if (availableRockets <= 0)
    return (
        <section 
            className='fixed top-0 left-0 bg-observableBlack min-h-[100vh] z-[49] w-full flex justify-center'
            role='dialog'
            aria-labelledby='modal1Title'
        >
            <div className='flex flex-col items-center justify-center gap-16 text-center'>
                <div className='flex flex-col items-center gap-6'>
                    <h3 id='modalTitle' className='text-2xl xl:text-5xl text-center font-spaceMedium max-w-[20ch]'>
                        {noRocketsFoundMsg}
                    </h3>
                    <p className='text-lg max-w-[50ch] text-primaryGray-200'>{noRocketsFoundMsg2}</p>
                </div>

                <button 
                    aria-label="close launch modal" 
                    onClick={handleLaunchModal} 
                    className={btnStyle}
                >
                    Go back to the dashboard
                </button>
            </div>
        </section>
    )

    if (step === 0)
    return (
        <section 
            className='launchModalStep1 fixed top-0 left-0 bg-observableBlack min-h-[100vh] z-[49] w-full flex justify-center pt-24'
            role='dialog'
            aria-labelledby='modal1Title'
        >
            <div className='launchWrapper flex flex-col justify-between px-5 md:px-10 xl:px-0 2xl:max-w-[40%] pb-14'> 
                {/* STEPS */}
                <div className='mb-14 xl:mb-8'>
                    <Stepper
                        className="stepper"
                        connectorStateColors
                        connectorStyleConfig={{
                            size: 1,
                            activeColor: "#A143FF",
                            completedColor: "#A143FF",
                        }}
                        styleConfig={{
                            activeBgColor: "#A143FF",
                            completedBgColor: "#A143FF",
                            size: "1rem",
                            circleFontSize: "0",
                            inactiveBgColor: "#8f8f8f",
                            labelFontSize: "0.8em"
                        }}
                        activeStep={step}
                    >
                        <Step label="Select rockets" />
                        <Step label="Confirm launch" />
                    </Stepper>
                </div>
               

                {/* ROCKET SELECTION */}
                <div className='flex flex-col gap-8 xl:gap-14'>
                    <h3 id='modalTitle' className='text-2xl xl:text-5xl text-center font-spaceMedium'>
                        {data?.content?.selectHeadline}
                    </h3>
                    <div className='flex flex-col items-center gap-4'>
                        {data?.content?.rockets?.map((data, index) => (
                            data?.availability ? (
                                <RocketButton handleLaunchIDs={handleLaunchIDs} data={data} launchIDs={launchIDs} key={index}/>
                            ) : null
                        ))}
                    </div>
                </div>
                
                {/* CONFIRM - CONTINUE */}
                <div className='mt-20 flex flex-col gap-5'>
                    <div className='flex gap-4 ml-3 cursor-pointer' onClick={handlePolicyAccept}>
                        <button>
                            <div 
                                className={policyAccept === true ? 'py-2 px-2 bg-galaxyPurple border-starWhite border-2 transition-all rotate-45' : 'h-5 w-5 border-starWhite border-2 rotate-45'}
                            ></div>
                        </button>

                        <p className='text-base text-primaryGray-200'>
                            I agree to follow our <a href='/' target='_blank' rel='noreferrer' className='text-starWhite underline underline-offset-4'>internal safety policies and protocols</a> to ensure a safe space rocket launch</p>
                    </div> 
                    <div className='flex justify-center items-center gap-4'>
                        <button
                            aria-label="next step" 
                            onClick={handleNextStep}
                            className={policyAccept === true ? 'w-1/2 px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite' : 'w-1/2 px-10 py-3 border-2 uppercase rounded-2xl bg-primaryGray-800 border-primaryGray-800 cursor-default'}
                        >
                                Next
                        </button>

                        <button aria-label="close launch modal" onClick={handleLaunchModal} className='w-1/2 border-2 border-starWhite text-starWhite rounded-2xl px-10 py-3 hover:bg-starWhite hover:text-observableBlack font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>Go back</button>
                    </div>
               
                </div>
            </div>
        </section>
    );

    if (step === 1)
    return (
        <section 
            className='launchModalStep2 fixed top-0 left-0 bg-observableBlack h-[100vh] z-[49] w-full flex justify-center pt-24'
            role='dialog'
            aria-labelledby='modal2Title'
            aria-describedby='modal2Desc'
        >
            <div className='launchWrapper flex flex-col justify-between ppx-5 md:px-10 xl:px-0 2xl:max-w-[40%] pb-14'>
                {/* STEP - UX STEPS */}
                <div>
                    <Stepper
                        className="stepper"
                        connectorStateColors
                        connectorStyleConfig={{
                            size: 1,
                            activeColor: "#A143FF",
                            completedColor: "#A143FF",
                        }}
                        styleConfig={{
                            activeBgColor: "#A143FF",
                            completedBgColor: "#A143FF",
                            size: "1rem",
                            circleFontSize: "0",
                            inactiveBgColor: "#8f8f8f",
                            labelFontSize: "0.8em"
                        }}
                        activeStep={step}
                    >
                        <Step label="Select rockets" onClick={() => setStep(0)}/>
                        <Step label="Confirm launch" />
                    </Stepper>
                </div>
                
                {/* STEP - 2 HEADER */}
                <div className='flex flex-col items-center gap-1'>
                    {/* <h5 id='modal2Title' className='text-xl text-primaryGray-200 font-spaceRegular'>Confirm below</h5> */}
                    <h3 id='modal2Desc' className='text-5xl text-center font-spaceMedium'>
                        {data?.content?.launchHeadline}
                    </h3>
                </div>

                {/* LAUNCH HERE - ADD POST FUNCTION */}
                <div className='flex w-full justify-center'>
                    <LaunchButton rocketIDs={launchIDs} rocketName={launchRocketsNames} title={data?.content?.launchButtonText} />
                </div>

                {/* SELECTED ROCKETS */}
                <div className='flex flex-col items-center'>
                    <h6 className='uppercase font-spaceMedium'>Selected rockets</h6>
                    <ul className='flex  items-center justify-center gap-1 flex-wrap'>
                    
                        {/* MAP THROUGH ROCKETS STATE ARRAY - check index - if last -> no comma/seperator -> better readability*/}
                        {launchRocketsNames.map((data, index) => (
                            <li key={index} className='text-primaryGray-300 uppercase'>{data}{index !== launchIDs.length-1 ? ', ' : ''}</li>
                        ))}

                    </ul>
                </div>

                <div className='flex w-full justify-center'>
                    <button onClick={() => setStep(0)} className='w-1/2 border-2 border-starWhite text-starWhite rounded-2xl px-10 py-3 hover:bg-starWhite hover:text-observableBlack font-spaceRegular active:scale-95 active:ease-in duration-150 uppercase'>
                        Go back
                    </button>
                </div>
            </div>
        </section>
    );
}
