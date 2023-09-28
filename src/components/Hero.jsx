import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="hero_bg min_vh_100 d-flex flex-column">
        <Header />
        <div className="d-flex flex-grow-1 align-items-center justify-content-center py-5">
          <div className="container custom_container py-md-4 py-lg-5 py-xl-0">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h1 className="text-white fw-normal font_4xl text-center mw_709 lh_75">
                Meet <span className="fw-semibold ">Work Skill</span> Your
                Agency for Growth
              </h1>
              <p className="fw-normal font_xsm opacity_07 text-white text-center mw_709 lh_150">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                norma.
              </p>
              <a
                href="#"
                className="common_btn fw_medium font_md text-white text-decoration-none border_white mt-lg-4 lh_21 common_btn transition_03"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
