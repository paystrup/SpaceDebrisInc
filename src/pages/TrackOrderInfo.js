import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { orderConfirmation } from "../components/getAPI";
import LoadingAnimation from "../components/LoadingAnimation";

export default function TrackOrderInfo() {
    const navigate = useNavigate(); // navigation

    // Our endpoint
    const url = orderConfirmation;

    // State (array) for setting our order data in
    const [orderInfo, setOrderInfo] = useState([]);

    // Loading state for displaying loading anim
    const [isLoading, setIsLoading] = useState(true);

    // Fetch error if order not found
    const [orderError, setOrderError] = useState(false);

    // Prefix
    const order = orderInfo?.content;

    // Get id of order so we can fetch the data
    const params = useParams();
    console.log(params); //Returns the slug-name of the url you're navigated to
    const id = params.id; // and the ID

    console.log(url + id)
    // Fetch starts here
    useEffect(() => {
        setIsLoading(true)
        async function getData() {
            const response = await fetch(url + id);
            const data = await response.json();
            if (response.ok) {
                setOrderInfo(data);
            } else {
                setOrderError(true);
            }
            setTimeout(() => {
                setIsLoading(false);
            },550);    
        }
        getData();
    }, [url, id]);

    console.log(orderInfo);

    // Loading animation
    if (isLoading)
    return (
        <main>
            <LoadingAnimation />
        </main>
    )

    const btnStyle = "w-1/2 px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite w-full";
    if (orderError)
    return (
        <main className="h-[100vh] flex flex-col justify-center items-center">
            <section className="flex items-center justify-center flex-col gap-10">
                <h2 className="text-4xl">Order was not found. Please try again.</h2>
                <button className={btnStyle} onClick={() => navigate(-1)}>Go back</button>
            </section>
        </main>
    )
    
    return (
        <main>
            <section 
                className='orderConfirmationCard px-6 md:px-8 lg:px-32 pt-52 flex flex-col lg:flex-row justify-center gap-6'
           
            >
                <div className="orderConfirmationWrapper bg-primaryGray-900 rounded-2xl py-10 px-10 2xl:max-w-[70ch] flex flex-col gap-14">
                    {/* HEADER */}
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center gap-5 text-center">
                            <h2 className="text-5xl font-spaceMedium">Order status: <span className="text-primaryGray-200">{order?.status}</span></h2>
                        </div>
                    </div>

                    {/* ORDER INFO WRAPPER */}
                    <div className="orderInfo flex flex-col gap-4">
                        {/* PERSONAL INFO */}
                        <div className="border-2 border-dashed border-primaryGray-800 px-5 py-5">
                            <ul className="flex flex-col gap-2 uppercase">
                                <li>
                                    <span className="text-primaryGray-200">Name (S-ID):</span> {order?.personalSID} {order?.personalAlias} 
                                </li>
                                
                                <li>
                                    <span className="text-primaryGray-200">Email:</span> {order?.personalEmail}
                                </li>

                                <li>
                                    <span className="text-primaryGray-200">District:</span> {order?.personalEmail}
                                </li>

                                {order?.pickupService && (
                                    <>
                                        <li className="uppercase">
                                            <span className="text-primaryGray-200">Pickup address:</span> {order?.pickupService?.address}
                                        </li>
                                        <li className="uppercase">
                                            <span className="text-primaryGray-200">Pickup district:</span> {order?.pickupService?.district}
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* SPECIFICATIONS */}
                        <div className="border-2 border-dashed border-primaryGray-800 px-5 py-5">
                            <ul className="flex flex-col gap-2 uppercase">
                                <li>
                                    <span className="text-primaryGray-200">Order number:</span> {order?.tracking_guid}
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Order date:</span> {order?.submitted_datetime}
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Estimated launch date:</span> {order?.submitted_datetime}
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Destination:</span> {order?.destination?.name}
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Package:</span> {order?.packageType?.name}
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Package size:</span> {order?.size_M3} M3 / {order?.weight_Kg} KG
                                </li>
                                <li>
                                    <span className="text-primaryGray-200">Total price:</span> {order?.totalPrice} SC
                                </li>
                            </ul>
                        </div>
            
                        <button className="w-full mt-8 px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple  border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite" onClick={() => navigate(-1)}>Go back</button>
                    </div>
                </div>

                <div className=" bg-primaryGray-900 rounded-2xl py-10 px-10 2xl:max-w-[70ch] flex flex-col gap-14 w-full items-center justify-center">
                    <h5 className="text-2xl">Live map coming soon!</h5>
                </div>

            </section>
        </main>
    )
}
