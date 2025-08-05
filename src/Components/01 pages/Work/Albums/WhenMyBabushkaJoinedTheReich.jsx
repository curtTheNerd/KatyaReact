import React from "react";
import Gallery from "../../../Gallery/Gallery";
import { babushka as images } from "../../../02 constants/Data";

const WhenMyBabushkaJoinedTheReich = () => {
  return (
    <div>
      <h2 className="albumTitle">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default WhenMyBabushkaJoinedTheReich;
