import React, { useState } from "react";
import logoimg from "../assets/images/svg/logo.svg";
import { HeaderCrossIcons } from "./common/Icon";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <nav>
        <div className="container custom_container pt-3">
          <div className="d-flex align-items-center justify-content-between position-relative z_index_2 navbar_bg">
            <a href="/" className="ff_ubuntu fs_xxxlg text-whit5 ">
              <img className="logo_img" src={logoimg} alt="logoimg" />
            </a>
            <div
              onClick={() => setNavShow(!navShow)}
              className="text-danger px-2 py-1 d-lg-none rounded-3"
            >
              <div className="line_toggle"></div>
              <div className="line_toggle"></div>
              <div className="line_toggle"></div>
            </div>
            <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 gap-3">
              <li className=" list-unstyled">
                <a
                  href="#home"
                  className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                >
                  Home
                </a>
              </li>
              <li className=" list-unstyled">
                <a
                  href="#about"
                  className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                >
                  About
                </a>
              </li>
              <li className=" list-unstyled">
                <a
                  href="#article"
                  className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                >
                  Article
                </a>
              </li>
              <li className=" list-unstyled">
                <a
                  href="#events"
                  className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                >
                  Events
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="common_btn  fw_medium font_md text-black border-0 bg-white text-decoration-none d-none d-lg-flex white_btn transition_03"
            >
              + Subscribe
            </a>
          </div>
          <div className="d-lg-none d-flex ">
            <div
              className={` ${navShow ? "nav-fix mobileNav_bg" : "fix-navbar"}`}
            >
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-4">
                <button
                  onClick={() => setNavShow(false)}
                  className=" btn d-lg-none position-absolute btn_close_position "
                >
                  <HeaderCrossIcons />
                </button>
                <li className=" list-unstyled">
                  <a
                    href="#"
                    className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                  >
                    Home
                  </a>
                </li>
                <li className=" list-unstyled">
                  <a
                    href="#about"
                    className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                  >
                    About
                  </a>
                </li>
                <li className=" list-unstyled">
                  <a
                    href="#article"
                    className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                  >
                    Article
                  </a>
                </li>
                <li className=" list-unstyled">
                  <a
                    href="#events"
                    className=" fw-normal font_xsm text-white text-decoration-none nav_hover transition_03 position-relative"
                  >
                    Events
                  </a>
                </li>
                <a
                  href="#"
                  className="common_btn  fw_medium font_md text-black border-0 bg-white text-decoration-none white_btn transition_03"
                >
                  + Subscribe
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
