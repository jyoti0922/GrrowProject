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
      <div className="py-5">
        <div className="container custom_container py-md-5 my-lg-5">
          <div className="row position-lg-relative mt-lg-4 my-lg-5">
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <img
                  className="w-100 h-100"
                  src={planningImg}
                  alt="team planing img"
                />
                <div className="p-3 planningSocial_bg planningSocial_set br_5 position-absolute">
                  <div className="d-flex align-items-center gap-3 pt-lg-1 px-lg-2">
                    <MsgIcons />
                    <p className="fw-normal font_lg text-black mb-0">
                      Stepenjohns@gmail.com
                    </p>
                  </div>
                  <div className="d-flex gap-2 mt-2 pb-lg-1 px-lg-2">
                    <InstaIcons />
                    <LinkdinIcons />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 mt-4 mt-lg-0 position-lg-absolute snedBox_position">
              <div className="get_updated_sendBox br_5">
                <h2 className="fw-normal font_2xl text-black lh_56 mb-3">
                  Get <span className="fw-semibold">Updated</span> With Us
                </h2>
                <p className="fw_medium font_xsm text-black opacity_06 lh_150">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli.
                </p>
                <form
                  className="row justify-content-between"
                  onSubmit={sendForm}
                >
                  <div className="col-6">
                    <input
                      type="text"
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
                  <div className="col-6">
                    <input
                      type="email"
                      className="w-100 fw-normal font_xsm text-black opacity_05 getupdated_input br_5 p-2 p-md-3"
                      placeholder="Your Email Address"
                      name="email"
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
                      rows={6}
                      className="mb-2 fw-normal font_xsm text-black opacity_05 getupdated_input br_5 mt-3 w-100 p-2 p-md-3"
                      placeholder=" Message"
                    ></textarea>
                  </div>

                  <button className="common_btn bg_pink lh_21 text-decoration-none text-white fw_medium font_md d-inline-block border-0 mt-4 sendMsg_btn ms-2">
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
