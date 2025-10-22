import React from "react";
import "./footer.css";

import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="bar"></div>

      <div className="iconDiv flex">
        <a
          href="https://www.instagram.com/katyagranova/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaInstagram className="instagram icon" />
        </a>
        <a
          href="https://www.youtube.com/@katyagranova9832"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <SlSocialYoutube className="youtube icon" />
        </a>
      </div>

      <p className="copyRight flex">2025 Images copyright Katya Granova</p>
    </div>
  );
};

export default Footer;
