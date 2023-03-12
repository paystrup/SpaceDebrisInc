import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import { toast } from "react-toastify";
import { orderURL, packagesURL } from "../components/getAPI";

//Components
import OrderStartSection from "../components/OrderStartSection";
import OrderMeasurementSection from "../components/OrderMeasurementSection";
import OrderPackagesSection from "../components/OrderPackagesSection";
import OrderInformationSection from "../components/OrderInformationSection";
import LoadingAnimation from "../components/LoadingAnimation";
import OrderServiceSection from "../components/OrderServiceSection";
import OrderReviewSection from "../components/OrderReviewSection";

export default function OrderPage() {
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // Creates an empty orderData to be filled
  // const [orderData, setOrderData] = useState({
  //   information: {
  //     sid: "",
  //     alias: "",
  //     email: "",
  //   },
  //   measurement: {
  //     length: "",
  //     width: "",
  //     height: "",
  //     weight: "",
  //     cubicMeter: "",
  //   },
  //   services: {
  //     pickup: false,
  //   },
  //   package: "",
  // });

  const [measurement, setMeasurement] = useState({
    length: null,
    width: null,
    height: null,
    weight: null,
  });

  // const [orderData, setOrderData] = useState({
  //   Size_M3: "",
  //   Weight_Kg: "",
  //   PackageGuidString: "",
  //   PlanetGuidString: null,
  //   PickupService: null,
  //   personalInformation: {
  //     SID: "",
  //     Alias: "",
  //     Email: "",
  //   },
  // });

  // const [orderData, setOrderData] = useState({
  //   "Size_M3": "",
  //   "Weight_Kg": "",
  //   "PackageGuidString": "",
  //   "PlanetGuidString": null,
  //   "PickupService": null,
  //   "personalInformation": {
  //     "SID": "",
  //     "Alias": "",
  //     "Email": "",
  //   },
  // });

  const [orderData, setOrderData] = useState({
    "Size_M3": 30,
    "Weight_Kg": 30,
    "PackageGuidString" : "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32",
    "PlanetGuidString" : null,
    "PickupService": {
        "Address": "test",
        "District" : "test"
    },
    "personalInformation": {
        "SID" : "",
        "Alias" : "",
        "Email" : ""
    }
})

  // Handle errors and errorMesseges
  const errorMessages = {
    measurement: "Please fill out all of the input fields for measurement.",
    package: "Please select a package.",
    information: "Please enter the nessecary information.",
    id: "Please fill out your ID",
    alias: "Please fill out your alias",
    email: "Please fill out your email.",
    address: "You need to type your adress",
    district: "Please fill out your district",
  };

  // State for controlling view of steps
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log("This is all the orderData!", orderData);
  }, [step]);

  // Our endpoint
  const urls = [orderURL, packagesURL];

  // Multiple API fetch starts here
  useEffect(() => {
    const fetchData = async () => {
      const response = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );
      setSpaceData(response);
      setTimeout(function () {
        setIsLoading(false);
      }, 500);
    };
    fetchData();
    // window.localStorage.setItem("myObject", JSON.stringify(measurement));
  }, []);

  // Used for storing cubicMetre
  const [cubicMetre, setCubicMetre] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("");

  function calculateCubicMetre(length, width, height) {
    setCubicMetre((length * width * height) / 1000000);
  }

  useEffect(() => {
    console.log(cubicMetre + " m3");
    setOrderData(prevOrderData => ({
      ...prevOrderData,
      Size_M3: cubicMetre,
      Weight_Kg: measurement.weight,
    }));
  }, [cubicMetre, measurement.weight]);

  // Packages

  // Shared handle for previous state
  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <main className="h-screen pt-28">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          {" "}
          <div>
            <Stepper
              className="stepper"
              connectorStateColors
              connectorStyleConfig={{
                size: 2,
                activeColor: "var(--galaxyPurple)",
                completedColor: "var(--galaxyPurple)",
              }}
              styleConfig={{
                activeBgColor: "#A143FF",
                completedBgColor: "#A143FF",
                size: "1em",
                circleFontSize: "0",
                inactiveBgColor: "var(--starWhite)",
              }}
              activeStep={step}
            >
              {/* Should map through step array */}
              {spaceData[0]?.content?.orderPageSteps.map((data, index) => (
                <Step
                  key={`step${index}`}
                  data={data}
                  label={data?.alias.replace("Page", "")}
                  onClick={() => {
                    if (step > 0) setStep(index);
                  }}
                />
              ))}
            </Stepper>
          </div>
          <section className="px-6 md:px-8 lg:px-32 pt-16">
            {step === 0 && (
              <OrderStartSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[0]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
              />
            )}
            {step === 1 && (
              <OrderMeasurementSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[1]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
                calculateCubicMetre={calculateCubicMetre}
                errorMessages={errorMessages}
                handlePreviousStep={handlePreviousStep}
                orderData={orderData}
                setOrderData={setOrderData}
                measurement={measurement}
                setMeasurement={setMeasurement}
              />
            )}
            {step === 2 && (
              <OrderPackagesSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[2]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
                cubicMetre={cubicMetre}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
                errorMessages={errorMessages}
                handlePreviousStep={handlePreviousStep}
                setOrderData={setOrderData}
                orderData={orderData}
              />
            )}
            {step === 3 && (
              <OrderInformationSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[3]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
                errorMessages={errorMessages}
                handlePreviousStep={handlePreviousStep}
                setOrderData={setOrderData}
                orderData={orderData}
                isTermsAccepted={isTermsAccepted}
                setIsTermsAccepted={setIsTermsAccepted}
              />
            )}
            {step === 4 && (
              <OrderServiceSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[4]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
                errorMessages={errorMessages}
                handlePreviousStep={handlePreviousStep}
                setOrderData={setOrderData}
                orderData={orderData}
              />
            )}
            {step === 5 && (
              <OrderReviewSection
                orderPageData={spaceData[0]?.content?.orderPageSteps[5]}
                spaceData={spaceData}
                setStep={setStep}
                step={step}
                toast={toast}
                errorMessages={errorMessages}
                handlePreviousStep={handlePreviousStep}
                setOrderData={setOrderData}
                orderData={orderData}
              />
            )}
          </section>
        </div>
      )}
    </main>
  );
}
