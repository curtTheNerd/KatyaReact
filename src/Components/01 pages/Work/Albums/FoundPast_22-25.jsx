import React from "react";
import Gallery from "../../../Gallery/Gallery";
import { foundPast_22_25 as images } from "../../../02 constants/Data";

const FoundPast_22_25 = () => {
  return (
    <div>
      <h2 className="albumTitle">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default FoundPast_22_25;
