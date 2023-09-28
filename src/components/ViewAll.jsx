import React from "react";
import view1Img from "../assets/images/webp/View1-img.webp";
import view2Img from "../assets/images/webp/view2-img.webp";
import view3Img from "../assets/images/webp/view3-img.webp";
import view4Img from "../assets/images/webp/view4-img.webp";
import commentImg from "../assets/images/png/comment-icon.png";
import sendImg from "../assets/images/png/send-icon.png";
import { HeartIcons } from "./common/Icon";

const ViewAll = () => {
  const ViewAllData = [
    {
      viewallImg: view1Img,
      viewallDate: "July 2023",
      viewallTitle: "Join us on our next challenge",
      viewallPara: "Working with feedback",
      viewallpara2: "April 9 - LIOR KRENGEL",
      viewallBtn: " Read more",
      viewallHeartIcon: <HeartIcons />,
      viewallCommentIcon: commentImg,
      viewallSendIcon: sendImg,
      viewallcount: "2",
    },
    {
      viewallImg: view2Img,
      viewallDate: "July 2023",
      viewallTitle:
        "Our journey comes to a close flipping the coin and the tools we have gathered",
      viewallPara:
        "Together we have spent the lst five weeks exploring and practing our healthy Boundaries. We took a step back and connected  with our.....",
      viewallpara2: "March 15 - LIOR KRENGEL",
      viewallBtn: " Read more",
    },
    {
      viewallImg: view3Img,
      viewallTitle: "Week five: stepping into our yes with secure expectations",
      viewallPara: "Our yes is only human too",
      viewallpara2: "June 3 - LIOR KRENGEL",
      viewallBtn: " Read more",
    },
    {
      viewallImg: view4Img,
      viewallTitle: "Step three: exploring between our yes and no",
      viewallPara: "A week of international curiosity",
      viewallpara2: "July 21 - LIOR KRENGEL",
      viewallBtn: " Read more",
    },
  ];
  return (
    <>
      <div
        className="container custom_container pt-5 mt-md-4 mt-lg-5 overflow-x-hidden"
        id="article"
      >
        <h2
          className="mt-xl-3 text-center text-black fw-normal font_2xl lh_56"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Let’s Take a <span className="fw_medium">View</span>
        </h2>
        <div className="my-4 my-xl-5 mt-lg-4 mb-lg-5 pt-lg-4 mb-lg-4 pb-lg-2">
          {ViewAllData.map((obj, i) => (
            <div
              className="row justify-content-center justify-content-lg-between py-4 viewAll_border "
              key={i}
            >
              <div className="col-12 col-md-5 col-lg-4 ps-xl-0">
                <div
                  className="text-center"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img
                    className="viewall_img object-fit-cover br_5"
                    src={obj.viewallImg}
                    alt="view section 1 img"
                  />
                </div>
              </div>
              <div className=" col-12 col-md-7 mt-4 mt-md-0 pe-xl-0">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="h-100 d-flex flex-column justify-content-between"
                >
                  <p className="fw_medium font_md text_pink lh_21 mb-1 mb-lg-3">
                    {obj.viewallDate}
                  </p>
                  <h2 className="fw_medium font_xl text-black lh_28 mb-1 mb-lg-3 mw_565">
                    {obj.viewallTitle}
                  </h2>
                  <p className="fw-normal font_xsm text-black opacity_07 lh_150 mb-1 mb-lg-3 mw_565">
                    {obj.viewallPara}
                  </p>
                  <p className="fw-normal font_sm text-black opacity_07 lh_150 mb-1 mb-lg-3">
                    {obj.viewallpara2}
                  </p>
                  <a
                    href="#"
                    className="fw_medium font_md text-black lh_21 read_more transition_03"
                  >
                    {obj.viewallBtn}
                  </a>
                  <div className="d-flex justify-content-between align-items-center mt-2 mt-lg-3 pt-xl-2">
                    <span className="d-flex align-items-start gap-1">
                      {obj.viewallHeartIcon}
                      <p className="mb-0 fw_medium font_lg text-black lh_23">
                        {obj.viewallcount}
                      </p>
                    </span>
                    {i === 0 && (
                      <>
                        <span>
                          <img
                            src={obj.viewallCommentIcon}
                            alt="viewAll-comment-icon"
                          />
                        </span>
                        <span>
                          <img
                            src={obj.viewallSendIcon}
                            alt="viewAll-send-icon"
                          />
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="common_btn bg_pink lh_21 text-decoration-none text_offWhite fw_medium font_md d-inline-block mt-xl-1 px-5 transition_03"
          >
            View All
          </a>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
