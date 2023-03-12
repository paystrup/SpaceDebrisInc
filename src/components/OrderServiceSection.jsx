import React, { useState, useEffect } from "react";

export default function OrderServiceSection({
  orderPageData,
  spaceData,
  step,
  setStep,
  toast,
  measurement,
  setMeasurement,
  calculateCubicMetre,
  errorMessages,
  handlePreviousStep,
  orderData,
  setOrderData,
}) {
  // Inputs
  const [formError, setFormError] = useState(false);
  const [handleValidation, setHandleValidation] = useState(true);
  const [checkboxValue, setCheckboxValue] = useState(false);

  useEffect(() => {
    if (orderData.PickupService) {
      setHandleValidation(false);
    } else {
      setHandleValidation(true);
    }
  }, [orderData, checkboxValue]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxValue(e.target.checked);
  };

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      information: {
        ...orderData.personalInformation,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-[50%] md:w-[100%]">
        <h1 className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch] mb-10">
          {orderPageData.content?.headingSection[0]?.content?.headline}
        </h1>
        <h2 className="font-space Medium uppercase mb-2">
          {orderPageData?.content?.headingSection[0]?.content?.subHeading}
        </h2>
        <p className="text-lg text-primaryGray-200">
          {" "}
          {orderPageData?.content?.headingSection[0]?.content?.paragraph}
        </p>
      </div>
      <div className="lg:w-[50%] md:w-[100%]">
        <div className="pt-6 pb-6"><p>
          Extra services are not available for now!</p></div>
        {/* <div className="pt-6 pb-2">
          <label className="font-space Medium uppercase">
            {orderPageData?.content?.inputSection[0]?.content?.headline}
          </label>
          {orderPageData?.content?.inputSection[0]?.content?.checkBoxes.map(
            (data, index) => (
              <div
                key={`checkbox${index}`}
                className="flex justify-start items-center gap-1"
              >
                <input
                  className="h-5 w-5 m-2 border-starWhite border-2 rotate-45 cursor-pointer"
                  id={data?.alias[index]}
                  type={data?.alias}
                  name={data?.alias[index]}
                  onChange={(e) => handleCheckboxChange(e)}
                  checked={checkboxValue[index]}
                ></input>
                <label
                  className="cursor-pointer select-none"
                  for={data?.alias[index]}
                >
                  {data?.content?.checkboxText}
                </label>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col gap-3">
          {orderPageData?.content?.inputSection[0]?.content?.inputFields.map(
            (data, index) => (
              <input
                key={`input${index}`}
                className="py-3 px-3 rounded-xl w-full bg-transparent border border-starWhite active:border-galaxyPurple"
                id="inputField"
                type="text"
                name={data?.content?.inputIdentifier}
                placeholder={data?.content?.inputText}
                value={
                  orderData.PickupService[
                    data?.content?.inputIdentifier.toLowerCase()
                  ]
                }
                aria-label={data?.content?.inputText}
                onChange={(e) => handleChange(e)}
                onKeyUp={(e) => handleEnter(e)}
              ></input>
            )
          )}
        </div> */}
        <div className="mt-10 flex flex-col gap-2">
          <button
            className={
              handleValidation === false
                ? "w-full px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
                : "w-full px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
            }
            aria-label="get started"
            onClick={handleSubmit}
          >
            {handleValidation === true ? "Skip" : "Next"}
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
        {formError && (
          <p className="text-states-error">{errorMessages.measurement}</p>
        )}
      </div>
    </div>
  );
}
