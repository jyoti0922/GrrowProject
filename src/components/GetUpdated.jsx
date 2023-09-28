import React, { useState } from "react";
import planningImg from "../assets/images/webp/planning-img.webp";
import { InstaIcons, LinkdinIcons, MsgIcons } from "./common/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetUpdated = () => {
  const myData = {
    FirstName: "",
    email: "",
    textarea: "",
  };
  const [dataValue, setdataValue] = useState(myData);
  const sendForm = (e) => {
    e.preventDefault();

    if (dataValue.FirstName && dataValue.email) {
      setdataValue(myData);
      toast("successfull send mail");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="py-xl-5">
        <div className="container custom_container py-5 my-md-4 my-lg-5">
          <div className="row position-lg-relative justify-content-center justify-content-lg-between mt-xl-4 my-xl-5">
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <div
                  className="text-center"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <img
                    className="getupdated_planning_img object-fit-cover br_5"
                    src={planningImg}
                    alt="team planing img"
                  />
                </div>
                <div
                  className="d-flex justify-content-center"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <div className="p-3 planningSocial_bg planningSocial_set  br_5 position-lg-absolute mt-3 mt-lg-0">
                    <div className="d-flex align-items-center gap-3 pt-lg-1 px-lg-2">
                      <a href="#" className="icon_hover transition_03">
                        <MsgIcons />
                      </a>

                      <a
                        href="mailto:Stepenjohns@gmail.com"
                        className="fw-normal font_lg text-black mb-0 text-decoration-none"
                      >
                        Stepenjohns@gmail.com
                      </a>
                    </div>
                    <div className="d-flex gap-2 mt-2 pb-lg-1 px-lg-2">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="text-decoration-none icon_hover transition_03"
                      >
                        <InstaIcons />
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="text-decoration-none icon_hover transition_03"
                      >
                        <LinkdinIcons />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-7 mt-3 mt-lg-0 position-lg-absolute snedBox_position">
              <div
                className="get_updated_sendBox br_5 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="fw-normal font_2xl text-black lh_56 mb-3">
                  Get <span className="fw-semibold">Updated</span> With Us
                </h2>
                <p className="fw_medium font_xsm text-black opacity_06 lh_150 mb-xl-4 pb-3">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli.
                </p>
                <form
                  className="row justify-content-between mt-2 mt-lg-4"
                  onSubmit={sendForm}
                >
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      required
                      className="w-100 fw-normal font_xsm text-black opacity_05 getupdated_input br_5 p-2 p-md-3"
                      name="FirstName"
                      placeholder="Your Name"
                      value={dataValue.FirstName}
                      onChange={(e) =>
                        setdataValue({
                          ...dataValue,
                          FirstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="w-100 fw-normal font_xsm text-black opacity_05 getupdated_input br_5 p-2 p-md-3 mt-3 mt-sm-0 rounded"
                      placeholder="Your Email Address"
                      name="email"
                      required
                      value={dataValue.email}
                      onChange={(e) =>
                        setdataValue({ ...dataValue, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      onChange={(e) =>
                        setdataValue({ ...dataValue, textarea: e.target.value })
                      }
                      value={dataValue.textarea}
                      rows={5}
                      className="mb-xl-2 fw-normal font_xsm text-black opacity_05 getupdated_input br_5 mt-3 w-100 p-2 p-md-3"
                      placeholder=" Message"
                    ></textarea>
                  </div>

                  <button className="common_btn bg_pink lh_21 text-decoration-none text_offWhite fw_medium font_md d-inline-block border-0 mt-3 mt-xl-4 sendMsg_btn ms-2 transition_03">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetUpdated;
