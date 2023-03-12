import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { orderConfirmation } from "../components/getAPI";
import LoadingAnimation from "../components/LoadingAnimation";

export default function OrderConfirmation() {
    // Our endpoint
    const url = orderConfirmation;
    
    // State (array) for setting our order data in
    const [orderInfo, setOrderInfo] = useState([]);

    // Prefix
    const order = orderInfo?.content;

    // Get id of order so we can fetch the data
    const params = useParams();
    console.log(params); //Returns the slug-name of the url you're navigated to
    const id = params.id; // and the ID

    // Loading state for displaying loading anim
    const [isLoading, setIsLoading] = useState(true);

    console.log(url + id)

    // Fetch starts here
    useEffect(() => {
        setIsLoading(true)
        async function getData() {
            const response = await fetch(url + id);
            const data = await response.json();
            setOrderInfo(data);
            setTimeout(() => {
                setIsLoading(false);
            },550);    
        }
        getData();
    }, [url, id]);

    console.log(orderInfo);

    // Loading animation
    if (isLoading)
    return(
        <main>
            <LoadingAnimation />
        </main>
    )
    
    // Waiting on backend - make datastructure an array so the below can be looped through + texts
    return (
        <main>
            <section className='orderConfirmationCard px-6 md:px-8 lg:px-32 pt-24 flex flex-col justify-center items-center'>
                <div className="orderConfirmationWrapper bg-primaryGray-900 rounded-2xl py-10 px-10 2xl:max-w-[70ch] flex flex-col gap-14">

                    {/* THANK YOU MSG */}
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <p className="text-lg text-primaryGray-300">Thank you for ordering!</p>
                            <h2 className="text-5xl font-spaceMedium">Your order is confirmed</h2>
                        </div>
                        <p className="text-primaryGray-200 text-center leading-relaxed">
                            We have sent you an email confirmation with your invoice. If you’ve have any questions, please don’t hesitate to contact one of our over 100 AI humanoid big brain customer service robots.
                        </p>
                    </div>

                    {/* ORDER INFO WRAPPER */}
                    <div className="orderInfo flex flex-col gap-4">
                        {/* PERSONAL INFO */}
                        <div className="border-2 border-dashed border-primaryGray-800 px-5 py-5">
                            <ul className="flex flex-col gap-2">
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Name (S-ID):</span> {order?.personalSID} {order?.personalAlias} 
                                </li>
                                
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Email:</span> {order?.personalEmail}
                                </li>

                                <li className="uppercase">
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
                            <ul className="flex flex-col gap-2">
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Order number:</span> {order?.tracking_guid}
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Order date:</span> {order?.submitted_datetime}
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Estimated launch date:</span> {order?.submitted_datetime}
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Destination:</span> {order?.destination?.name}
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Package:</span> {order?.packageType?.name}
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Package size:</span> {order?.size_M3} M3 / {order?.weight_Kg} KG
                                </li>
                                <li className="uppercase">
                                    <span className="text-primaryGray-200">Total price:</span> {order?.totalPrice} SC
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA REDIRECT */}
                    <div className="flex flex-col items-center gap-14">
                        <p className="text-xl text-center leading-relaxed">You have done a great service to everyone by shipping your trash into space.</p>
                        
                        <div className="flex gap-3">
                            <Button buttonColor={"filled-purple"} btnText={"Go to our website"} link={"/"} />
                            <Button buttonColor={"white"} btnText={"Track your order"} link={"/trackorder/" + id} />
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}
