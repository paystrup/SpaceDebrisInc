import React from "react";
import scanIcon1 from "../media/svg/scanIcon1.svg";
import trashBags from "../media/png/trashBags.png";

export default function ArrowPointer({ text, header }) {
  return (
    <div className="relative flex justify-center">
      <img src={trashBags} alt="Logo" />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "50%",

        }}
        className="flex gap-2"
      >
        <div className="text-right -mt-3 max-w-xs">
          <h5 className="uppercase">{header}</h5>
          <p className="text-primaryGray-200">{text}</p>
        </div>
        <div>
          <div className="pointerline"></div>
          <div
            style={{
              position: "absolute",
              bottom: "-29px",
              right: "-29px",
            }}
          >
            <img src={scanIcon1} alt="Scan Icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
