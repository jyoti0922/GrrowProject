import React from "react";
import logoimg from "../assets/images/svg/logo.svg";
import startWritingImg from "../assets/images/png/startWriting-Img.png";
const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="container custom_container py-4">
          <div className="text-center">
            <img className="footersection_logo" src={logoimg} alt="logoimg" />
          </div>
          <p className="mb-0 fw-normal font_sm text-white lh_16 py-4 text-center">
            <span className="opacity_05 me-1">©</span>
            2023 Lior krengle .
            <a href="#" className="fw-normal font_sm text-white lh_16 mx-1">
              Privacy
            </a>
            .
            <a href="#" className="fw-normal font_sm text-white lh_16 mx-1">
              Terms
            </a>
            .
            <a href="#" className="fw-normal font_sm text-white lh_16 mx-1">
              Collection Notice
            </a>
          </p>
          <div className="d-flex justify-content-center gap-4">
            <button className="d-flex gap-2 align-items-center common_btn lh_21 fw_medium font_md text-black border-transparent border-1  transition_03">
              <span>
                <img src={startWritingImg} alt="start-writing-icon-img" />
              </span>
              Start Writing
            </button>
            <button className="common_btn lh_21 fw_medium font_md text-black border-transparent border-1  transition_03">
              Get the app
            </button>
          </div>
          <div className="footer_line w-100 my-4"></div>
          <p className="text-white mb-0 text-center opacity_05 fw-normal font_sm">
            Substack is the home for great writing
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
