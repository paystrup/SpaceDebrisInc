import React, { useState, useEffect } from "react";
import PackageDisplayCard from "../components/PackageDisplayCard";

export default function OrderPackagesSection({
  orderPageData,
  spaceData,
  step,
  setStep,
  toast,
  cubicMetre,
  selectedPackage,
  setSelectedPackage,
  errorMessages,
  handlePreviousStep,
  setOrderData,
  orderData,
}) {
  // Inputs
  const [handleValidation, setHandleValidation] = useState(true);

  useEffect(() => {
    if (selectedPackage) {
      setHandleValidation(false);
      console.log(selectedPackage, "has been selected");
    } else {
      setHandleValidation(true);
    }
  }, [selectedPackage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPackage) {
      setStep(step + 1);
    } else {
      toast(`${errorMessages.package}`, {
        type: "error",
      });
    }
  };

  document.onkeyup = function (e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleClick = (guid) => {
    setSelectedPackage(guid);
    setOrderData({
      ...orderData,
      PackageGuidString: guid,
    });
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="xl:w-[50%] lg:w-[100%]">
        <h1 className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch] mb-10">
          {
            orderPageData.content?.headingSection[0]
              ?.content?.headline
          }
        </h1>
        <h2 className="font-space Medium uppercase mb-2">
          {
            orderPageData.content?.headingSection[0]
              ?.content?.subheading
          }
        </h2>
        <p className="text-lg text-primaryGray-200">
          {
            orderPageData.content?.headingSection[0]
              ?.content?.paragraph
          }
        </p>
      </div>
      <div className="xl:w-[50%] lg:w-[100%]">
        <div className="flex md:flex-row flex-col gap-5">
          {spaceData[1]?.content?.children?.filter(
            (data) => data?.max_m3 > cubicMetre
          ).length > 0 ? (
            spaceData[1]?.content?.children
              ?.filter((data) => data?.max_m3 > cubicMetre)
              .map((data, index) => (
                <div
                  key={`package${index}`}
                  className="w-full"
                  onClick={() => handleClick(data?.packageGuid)}
                >
                  <PackageDisplayCard
                    selected={selectedPackage}
                    packageName={data?.packageName}
                    paragraph={data?.paragragh}
                    number={data?.packageIndex}
                    data={data?.content?.value}
                    price={data?.price}
                    guid={data?.packageGuid}
                    maxm3={data?.max_m3}
                    maxkg={data?.max_kg}
                  />
                </div>
              ))
          ) : (
            <p>
              We're sorry! No packages was found with max m3 greater than{" "}
              {cubicMetre}.
            </p>
          )}
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <button
            className={
              handleValidation === false
                ? "w-full px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
                : "w-full px-10 py-3 border-2 uppercase rounded-2xl bg-primaryGray-800 border-primaryGray-800 cursor-default"
            }
            aria-label="get started"
            onClick={handleSubmit}
          >
            Next
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
