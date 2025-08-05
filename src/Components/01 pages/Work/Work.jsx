import React from "react";
import { Link } from "react-router-dom";

import { thumbs as images } from "../../02 constants/Data";

const Work = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="title">Work</h2>

      <div className="container flex preview_work">
        {images.map((image) => (
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
