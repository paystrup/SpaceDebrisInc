import React, { useState, useEffect } from "react";

export default function OrderMeasurementSection({
  orderPageData,
  spaceData,
  step,
  setStep,
  toast,
  calculateCubicMetre,
  errorMessages,
  handlePreviousStep,
  orderData,
  setOrderData,
  measurement,
  setMeasurement,
}) {
  // Inputs
  const [formError, setFormError] = useState(false);
  const [handleValidation, setHandleValidation] = useState(true);

  useEffect(() => {
    if (
      measurement.length &&
      measurement.width &&
      measurement.height &&
      measurement.weight
    ) {
      setHandleValidation(false);
      calculateCubicMetre(
        measurement.length,
        measurement.width,
        measurement.height
      );
    } else {
      setHandleValidation(true);
    }
  }, [measurement]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !measurement.length ||
      !measurement.width ||
      !measurement.height ||
      !measurement.weight
    ) {
      toast(`${errorMessages.measurement}`, {
        type: "error",
      });

      setFormError(true);
      console.log("Measurement is missing");
    } else {
      setStep(step + 1);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    setMeasurement({ ...measurement, [e.target.name]: e.target.value });
    // setOrderData({
    //   ...orderData,
    //   measurement: {
    //     ...orderData.measurement,
    //     [e.target.name]: e.target.value,
    //   },
    // });
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="xl:w-[50%] lg:w-[100%]">
        <h1 className="uppercase text-[60px] font-spaceBold leading-none max-w-[25ch] mb-10">
          {orderPageData?.content?.headingSection[0]?.content?.headline}
        </h1>
        <h2 className="font-space Medium uppercase mb-2">
          {orderPageData?.content?.headingSection[0]?.content?.subheading}
        </h2>
        <p className="text-lg text-primaryGray-200">
          {orderPageData?.content?.headingSection[0]?.content?.paragraph}
        </p>
      </div>
      <div className="xl:w-[50%] lg:w-[100%]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-3 w-full lg:w-[50%]">
            <label className="font-space Medium uppercase">
              {orderPageData?.content?.inputSection[0]?.content?.headline}
            </label>
            {orderPageData?.content?.inputSection[0]?.content?.inputFields.map(
              (data, index) => (
                <div key={`input${index}`} className="flex items-center">
                  <input
                    className="py-3 px-3 rounded-xl w-full bg-transparent border border-starWhite active:border-galaxyPurple"
                    id="inputField"
                    type="number"
                    name={data?.content?.inputText.toLowerCase()}
                    placeholder={data?.content?.inputText}
                    value={measurement[data?.content?.inputText.toLowerCase()]}
                    aria-label={data?.content?.inputText}
                    onChange={(e) => handleChange(e)}
                    onKeyUp={(e) => handleEnter(e)}
                  ></input>
                  <label
                    className="pl-2 uppercase w-[20px] text-primaryGray-200"
                    htmlFor={data?.content?.inputText.toLowerCase()}
                  >
                    {data?.content?.inputIdentifier}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="w-full lg:w-[50%] flex justify-center items-center">
            <svg
              width="198"
              height="198"
              viewBox="0 0 198 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M173.25 132V66C173.247 63.1066 172.483 60.2647 171.035 57.7596C169.587 55.2545 167.506 53.1743 165 51.7275L107.25 18.7275C104.742 17.2794 101.896 16.517 99 16.517C96.1036 16.517 93.2583 17.2794 90.75 18.7275L33 51.7275C30.4942 53.1743 28.4128 55.2545 26.9648 57.7596C25.5168 60.2647 24.753 63.1066 24.75 66V132C24.753 134.894 25.5168 137.735 26.9648 140.24C28.4128 142.746 30.4942 144.826 33 146.273L90.75 179.273C93.2583 180.721 96.1036 181.483 99 181.483C101.896 181.483 104.742 180.721 107.25 179.273L165 146.273C167.506 144.826 169.587 142.746 171.035 140.24C172.483 137.735 173.247 134.894 173.25 132Z"
                stroke="#C0C0C0"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.9775 57.42L99 99.0825L171.023 57.42"
                stroke="#C0C0C0"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M99 182.16V99"
                stroke="#C0C0C0"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
            {handleValidation === true
              ? "Please fill out the input fields"
              : "Next"}
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
