import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ListBulletIcon } from '@heroicons/react/24/outline';
import carouselIcon from '../media/svg/carouselIcon.svg'
import AdminDashRocketCarousel from '../components/AdminPage/AdminDashRocketCarousel';
import LaunchModal from '../components/AdminPage/LaunchModal';
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

//Our endpoint
import { dashboardURL } from "../components/getAPI";

import ListView from '../components/AdminPage/ListView';
import LoadingAnimation from '../components/LoadingAnimation';
import DashboardData from '../components/AdminPage/DashboardData';
import DashboardEconomyData from '../components/AdminPage/DashboardEconomyData';

export default function AdminDashboard() {
    // ------------ CHART JS GLOBAL SETTINGS --------------------
    // Register the plugin to all charts:
    Chart.register(ChartDataLabels);
    // Change default options for ALL charts

    Chart.defaults.set('plugins.datalabels', {
        color: '#FFFFFF'
    });

    Chart.defaults.font.family = "Space Grotesk, sans-serif";
    Chart.defaults.font.size = 14;

    // --------------- FETCH + STATES ----------------------
    const [spaceData, setSpaceData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Our endpoint
    const url = dashboardURL;

    // fetch starts here
    useEffect(() => {
        setIsLoading(true)
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setSpaceData(data);
            setTimeout(() => {
                setIsLoading(false);
            },550);
        }
        getData();
    }, [url]);

    // Rocket overview viewmode
    const [viewMode, setViewMode] = useState("list");
    const handleViewMode = (viewModeSetting) => {
        setViewMode(viewModeSetting);
    };

    // Handle view of launch modal
    const [launchView, setLaunchView] = useState(false);
    const handleLaunchModal = () => {
        setLaunchView(!launchView);
    };

    // TEMP local login until backend is setup
    const loggedIn = localStorage.getItem("loggedIn");

    const loginToast = "Please login first;"

    // Redirect to loginpage if admin is not logged in
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/admin");
            toast(loginToast, { type: "error" });
        }
    }, [loggedIn, navigate])
    
    // Show loading animation while fetching
    if (isLoading)
    return(
        <main>
            <LoadingAnimation />
        </main>
    )

    // Show dashboard if admin is logged in
    if (loggedIn)
    return (
        <main className='pt-28 px-6 md:px-8 xl:px-32'>
            
            {/* OPEN VIEW LAUNCH MODAL */}
            {launchView && <LaunchModal data={spaceData} launchView={launchView} handleLaunchModal={handleLaunchModal} />}

            <p className='text-primaryGray-300 font-spaceMedium'>
                Welcome to the admin dashboard!
            </p>

            <section className='pt-20'>
                <div className='flex flex-col md:flex-row gap-12 lg:items-center justify-between'>
                    <div>
                        <h3 className='text-4xl font-spaceMedium'>
                            {spaceData?.content?.rocketsHeadline}
                        </h3>
                    </div>

                    <div className='flex gap-12 justify-between'>
                        {/* LIST / CARD BTNS */}
                        <div className='bg-primaryGray-800 flex gap-5 rounded-xl'>
                            <button 
                                className={viewMode === "carousel" ? 'bg-starWhite text-observableBlack flex items-center gap-2 px-3 rounded-xl' : 'flex items-center gap-2 bg-primaryGray-800 rounded-2xl pl-3'}
                                aria-pressed={viewMode === 'carousel' ? true : false}
                                onClick={() => handleViewMode("carousel")}
                            >
                                <img src={carouselIcon} className='h-10 w-5' alt="Carousel Icon"></img>
                                <p>Cards</p>
                            </button>

                            <button 
                                className={viewMode === "list" ? 'bg-starWhite text-observableBlack flex items-center gap-2 px-3 rounded-xl' : 'flex items-center gap-2 bg-primaryGray-800 rounded-2xl pr-3'}
                                aria-pressed={viewMode === 'list' ? true : false}
                                onClick={() => handleViewMode("list")}
                            >
                                <ListBulletIcon className='w-5 text-primaryGray-300' /> List
                            </button>
                        </div>
                    
                        <button 
                            className={`px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite`}
                            aria-label="open launch modal"
                            onClick={handleLaunchModal}
                        >
                            Launch
                        </button>
                    </div>
                </div>
                
                {/* SHOW CONTENT DEPENDING ON STATE OF VIEWMODE */}
                <div>
                    {viewMode === "list" && <ListView data={spaceData} />}
                    {viewMode === "carousel" && <AdminDashRocketCarousel data={spaceData} />}
                </div>
            </section>
        
            {/* DATA OVERVIEWS - DASHBOARD & ECONOMY OVERVIEW */}
            <section className='pt-20'>
                <DashboardData data={spaceData?.content}/>
                <DashboardEconomyData data={spaceData?.content}/>
            </section>
        </main>
    )
}
