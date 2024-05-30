import { useState } from "react";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import quotation from "../../../assets/Vector (2).svg";
import "./AboutBanner.css";
const AboutBanner = () => {
  const [imgContent, setImgContent] = useState(img1);
  const imgData = (data) => {
    setImgContent(data);
    console.log(data);
  };
  return (
    <div className="about-banner-background ">
      <div className="max-w-[1250px] mx-auto ">
        <div className="flex pt-20 pb-64">
          <div className="flex-[1]">
            <h2 className="title-font mt-4">
              <span className="text-[#AEEE6A]">About</span> Us :{" "}
            </h2>
            <p className="about-details-font mt-5">
              We are specialized in circular knit garments field. From basic to
              fashion item we do various type product with different type of
              yarn composition & fabric construction.
            </p>
            <div className="mt-12">
              <button className="details-font mr-9 btn-design">
                View more details
              </button>
              <button className="details-font btn-design">Buy product</button>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="w-64 about-div-quotation z-30 ">
              <img src={quotation} alt="" />
              <p className="about-quotation-font text-left ml-5">
                We're not just about moving things from one place to another. We
                analyses each customer's needs, anticipate challenges, design
                options and set up contingency plans so they never have to worry
                about the journey.
              </p>
            </div>
            {/* TODO : here content 3 img if one click one img the show that in the main img  */}
            {imgContent && (
              <img src={imgContent} alt="Main" className="main-img" />
            )}
            <div className="">
              <img
                src={img1}
                className="select-img img1"
                alt=""
                onClick={() => imgData(img1)}
              />
              <img
                src={img2}
                className="select-img img2"
                alt=""
                onClick={() => imgData(img2)}
              />
              <img
                src={img3}
                className="select-img img3"
                alt=""
                onClick={() => imgData(img3)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
