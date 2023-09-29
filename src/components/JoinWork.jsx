import React from "react";
import logoimg from "../assets/images/svg/logo.svg";

const JoinWork = () => {
  return (
    <>
      <div className="joinWork_bg py-5 overflow-x-hiden">
        <div className="container custom_container py-md-4 py-lg-5 py-xl-0">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <a href="#">
              <img className="joinsection_logo" src={logoimg} alt="logoimg" />
            </a>

            <h1 className="text-white fw-normal font_2xl text-center lh_120 my-3 py-lg-1">
              Join work skill and start
              <span className="fw-semibold px-2">
                work on your <br className="d-none d-lg-block" /> soft skills
                now
              </span>
              and change yourself Meet
            </h1>
            <p className="fw-normal font_xsm opacity_07 text-white text-center lh_150 mb-0">
              Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed.
              Eros sem <br className="d-none d-lg-block" />
              sed gravida in nulla dictum
            </p>
            <a
              href="#"
              className="common_btn bg_pink lh_21 text-decoration-none text_offWhite fw_medium font_md d-inline-block mt-3 mt-lg-4 mt-xl-5 transition_03"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinWork;
