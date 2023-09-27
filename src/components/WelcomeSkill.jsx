import React from "react";
import WelcomeImg from "../assets/images/webp/welcome-img.webp";

const WelcomeSkill = () => {
  return (
    <>
      <div className="container custom_container py-5 mt-lg-3 mb-lg-2">
        <div className="row align-items-center py-md-5 my-lg-4 position-lg-relative">
          <div className="col-12 col-lg-8 col-xl-7 position-relative">
            <div className="">
              <img className="w-100" src={WelcomeImg} alt="welcome image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-md-0 position-lg-absolute right_0">
            <div className="p-3 p-md-4 bg_offWhite br_5">
              <h2 className="fw-normal font_2xl text-black lh_56 mb-3">
                <span className="fw-semibold">Welcome</span> to Work Skills
              </h2>
              <ul className="ps-3 mb-0">
                <li className="fw-normal font_xsm text-black opacity_07 lh_150 mb-2">
                  Work Skills is built for young professionals who want to
                  enhance their soft skills to overcome the challenges they
                  often face during the early first years of work.
                </li>

                <li className="fw-normal font_xsm text-black opacity_07 lh_150 mb-2">
                  In a practical and growth-oriented approach, we help young
                  professionals develop and strengthen essential skills such as
                  boundaries-setting, communication, adaptability, and others.
                </li>
                <li className="fw-normal font_xsm text-black opacity_07 lh_150 mb-2">
                  In this way, we aim to empower young professionals to navigate
                  their careers with confidence and success.
                </li>
              </ul>
              <a
                href="/"
                className="common_btn bg_pink lh_21 text-decoration-none text-white fw_medium font_md d-inline-block mt-5"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSkill;
