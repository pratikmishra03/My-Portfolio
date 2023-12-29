import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import {} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        PM
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experienc">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#qualification">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100025181356557&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?i=hl2p9sjmdfbu&utm_content=3ac53gl"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Prateek12186334" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Prateek Mishra. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
