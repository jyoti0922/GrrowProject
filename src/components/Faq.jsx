import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  const AccordionData = [
    {
      AccordionHeading: "What products can I scan?",
      AccordionBody: ` You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!`,
    },
    {
      AccordionHeading: "Where can I use my rewards?",
      AccordionBody: ` You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!`,
    },
    {
      AccordionHeading: "What kind of impact can I make?",
      AccordionBody: ` You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!`,
    },
    {
      AccordionHeading: "Which brands do you partner with?",
      AccordionBody: ` You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!`,
    },
  ];
  const [activeKey, setActiveKey] = useState(0);

  const handleAccordionClick = (i) => {
    setActiveKey((prevActiveKey) => (prevActiveKey === i ? null : i));
  };
  return (
    <>
      <div
        className="pb-5 pb-md-4 pb-lg-0 pb-xl-5 mb-lg-2 pt-lg-2 pt-xl-5"
        id="events"
      >
        <div className="container custom_container pb-md-5 pt-lg-4 pt-xl-5 mt-xl-4 mb-lg-5">
          <h2
            className="ff_outfit fw-semibold font_3xl text-black lh_110 text-center mt-lg-5 mb-lg-4 mt-xl-0 pt-lg-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Frequently Asked Questions
          </h2>

          <div className="row justify-content-center">
            <div className="col-12  col-md-10 col-lg-10">
              {AccordionData.map((obj, i) => (
                <div
                  key={i}
                  className="faq_accordion"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Accordion
                    activeKey={activeKey}
                    onSelect={() => handleAccordionClick(i)}
                  >
                    <Accordion.Item eventKey={i} className="mt-3">
                      <Accordion.Header>
                        {obj.AccordionHeading}
                      </Accordion.Header>
                      <Accordion.Body>{obj.AccordionBody}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
