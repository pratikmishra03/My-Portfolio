import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/prateek-mishra-2a8206203"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/pratikmishra03" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
