import React from "react";
import { Link, Outlet } from "react-router-dom";

import { thumbs as images } from "../../02 constants/Data";

const Work = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <div>
      <h2 className="title">{
        //'Work'  exluded to clients preference for now
        }</h2>

      <div className="container flex preview_work">
        { // maps throught thumbnail-array from Data and creates the first element of each album array as preview + generates dynamic path for routing to said album components from /work/albumX
        images.map((image) => (
          <Link to={image.link} key={image.id} onClick={handleScroll}>
            <div className="imageContainer_work">
              <img src={image.src} alt={image.id} loading="lazy" />
              <div className="overlay_work">
                <p>{image.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
