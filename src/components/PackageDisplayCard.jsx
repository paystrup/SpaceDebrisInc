import React, { useState, useEffect } from "react";

export default function PackageDisplayCard({
  content,
  packageName,
  number,
  paragraph,
  price,
  index,
  guid,
  selected,
  maxm3,
  maxkg,
}) {
  const packageDisplayCardBg = {
    backgroundImage: `url(https://space-debris-2022-q3.akqa.dk/media/ku3miedr/packageicon.svg)`,
    backgroundPosition: "bottom right",
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      maxm3={maxm3}
      key={index}
      packageguid={content?.packageGuid}
      style={packageDisplayCardBg}
      className={`${
        selected === guid ? "selected" : ""
      } prevent-select packagedisplaycard bg-primaryGray-900 h-96 w-full px-5 py-5 flex flex-col justify-between border-dashed border-2 border-primaryGray-300`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex text-lg uppercase font-spaceMedium justify-between">
          <h5 className="underscore">{packageName || "packageName"}</h5>
          <h5 className="text-primaryGray-800 brackets">{number || "00"}</h5>
        </div>
        <p className="text-md text-primaryGray-200">
          {paragraph || "Paragraph"}
        </p>
      </div>
      <div className="font-spaceMedium uppercase leading-none">
        <p className="text-md text-primaryGray-200">Price</p>
        <h6 className="pt-2 pricetag flex text-2xl text-primaryGray-100">
          {price || "0000"}
        </h6>
      </div>
    </div>
  );
}
