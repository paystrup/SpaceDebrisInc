import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

export default function OrderReviewSection({
  orderPageData,
  spaceData,
  toast,
  errorMessages,
  handlePreviousStep,
  orderData,
}) {
  // navigation
  const navigate = useNavigate();

  // Loading animation
  const [isLoading, setIsloading] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  async function createPost(newPost) {
    setIsloading(true);
    const url =
      "https://space-debris-2022-q3.akqa.dk/Umbraco/Api/Order/ConfirmOrder";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: myHeaders,
      redirect: "follow",
    });
    if (response.ok) {
      const data = await response.json();
      const slug = data?.order?.split('/')[2];
      navigate("/order/confirmation/" + slug);
      console.log("New post created: ", data);
      setIsloading(false);
    } else {
      console.log("Sorry, something went wrong");
    }
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(orderData);
  };

  if (isLoading)
  return (
    <div>
      <LoadingAnimation />
    </div>

  );

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-[50%] md:w-[100%]">
        <h1 className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch] mb-10">
          {orderPageData?.content?.headingSection[0]?.content?.headline}
        </h1>
        <h2 className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch] text-primaryGray-200">
          {orderPageData?.content?.headingSection[0]?.content?.subheading}
        </h2>
        <p className="text-lg text-primaryGray-200">
          {orderPageData?.content?.headingSection[0]?.content?.paragraph}
        </p>
      </div>
      <div className="lg:w-[50%] md:w-[100%]">
        <div className="pt-6 pb-6">
          <div className="flex flex-col gap-4">
            <div className="bg-primaryGray-900 w-full px-5 py-5 flex flex-col justify-between border-dashed border-2 border-primaryGray-300">
              <h3 className="font-space Medium uppercase mb-2">Your info</h3>
              <ul>
                <li className="text-md text-primaryGray-200">
                  {orderData?.personalInformation.SID || "none"}
                </li>
                <li className="text-md text-primaryGray-200">
                  {orderData?.personalInformation.Alias}
                </li>
                <li className="text-md text-primaryGray-200">
                  {orderData?.personalInformation.Email}
                </li>
              </ul>
            </div>
            <div className="bg-primaryGray-900 w-full px-5 py-5 flex flex-col justify-between border-dashed border-2 border-primaryGray-300">
              <h3 className="font-space Medium uppercase mb-2">Package</h3>
              <ul>
                <li className="text-md text-primaryGray-200">
                  _
                  {(orderData?.PackageGuidString ===
                    "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32" &&
                    "Basic") ||
                    (orderData?.PackageGuidString ===
                      "2daefece-ce5c-4134-8129-39cf6efee15c" &&
                      "Premium") ||
                    (orderData?.PackageGuidString ===
                      "d3a8d0b6-831c-42dc-b9bb-07b8b3111a1d" &&
                      "Ultimate")}
                </li>
                <li className="text-md text-primaryGray-200">
                  SC
                  {(orderData?.PackageGuidString ===
                    "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32" &&
                    "5000") ||
                    (orderData?.PackageGuidString ===
                      "2daefece-ce5c-4134-8129-39cf6efee15c" &&
                      "8000") ||
                    (orderData?.PackageGuidString ===
                      "d3a8d0b6-831c-42dc-b9bb-07b8b3111a1d" &&
                      "14000")}
                </li>
              </ul>
            </div>
            <div className="bg-primaryGray-900 w-full px-5 py-5 flex flex-col justify-between border-dashed border-2 border-primaryGray-300">
              <h3 className="font-space Medium uppercase mb-2">Services</h3>
              <ul>
                <li className="text-md text-primaryGray-200">None selected</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <span className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch]">
              Total{" "}
              <span className="pricetag">
                {" "}
                {(orderData?.PackageGuidString ===
                  "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32" &&
                  "5000") ||
                  (orderData?.PackageGuidString ===
                    "2daefece-ce5c-4134-8129-39cf6efee15c" &&
                    "8000") ||
                  (orderData?.PackageGuidString ===
                    "d3a8d0b6-831c-42dc-b9bb-07b8b3111a1d" &&
                    "14000")}
              </span>
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <button
            className="w-full px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
            aria-label="get started"
            onClick={handleSubmit}
          >
            Complete order
          </button>
          <button
            className={
              "w-full px-10 py-3 border-2 uppercase rounded-2xl bg-transparent border-starWhite font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
            }
            aria-label="go back"
            onClick={handlePreviousStep}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
