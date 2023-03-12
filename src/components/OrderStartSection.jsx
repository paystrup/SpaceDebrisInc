import React from "react";
import ArrowPointer from "../components/ArrowPointer";

export default function OrderStartSection({
  spaceData,
  orderPageData,
  step,
  setStep,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  document.onkeyup = function (e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[50%]">
        <h1 className="uppercase text-[80px] font-spaceBold leading-none max-w-[25ch] mb-10">
          {orderPageData?.content?.headingSection[0]?.content?.headline}
        </h1>
        <p className="text-lg text-primaryGray-200">
          {orderPageData?.content?.headingSection[0]?.content?.paragraph}
        </p>
        <div className="mt-10">
          <button
            className="w-full px-10 py-3 border-2 uppercase rounded-2xl bg-galaxyPurple border-galaxyPurple font-spaceRegular active:scale-95 active:ease-in duration-150 hover:bg-starWhite hover:text-observableBlack hover:border-starWhite"
            aria-label="get started"
            onClick={handleSubmit}
          >
            Get started
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[50%]">
        <ArrowPointer
          header={orderPageData?.content?.tipHeadline}
          text={orderPageData?.content?.tipParagraph}
        />
      </div>
    </div>
  );
}
