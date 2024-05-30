import "./AboutJourney.css";
import journeyImg from "../../../assets/AboutJourneyImg.jpg";
import aboutBar1 from "../../../assets/aboutBar.svg";
import aboutBar2 from "../../../assets/aboutBar2.svg";
import aboutBar3 from "../../../assets/about3.svg";
import quotation from "../../../assets/Vector (2).svg";
const AboutJourney = () => {
  return (
    // for bg
    <div className="about-bg text-white pt-44 pb-80">
      {/* for brk point */}
      <div className="max-w-[1250px] mx-auto ">
        {/* main */}
        <div className="flex">
          {/* img */}
          <div className="flex-[1]">
            <img className="aboutBar1" src={aboutBar1} alt="" />
            <img className="aboutBar2" src={aboutBar2} alt="" />
            <img className="aboutImg " src={journeyImg} alt="" />
          </div>
          {/* content */}
          <div className="flex-[1]">
            <h1 className="about-journey-title-font">
              Our <span className="text-[#AEEE6A]">Journey</span>{" "}
            </h1>
            <p className="about-journey-details-font">
              Bunon Texwear Ltd.An OEM Clothing Manufacturer, Exporter & Buying
              Agent. We have started our journey in 1998. With a huge experience
              of circular knit garments field, we are committed to one stop
              sourcing service to our valued customer.
            </p>
            <div className="w-64 about-journey-div-quotation z-30 ">
              <img src={quotation} alt="" />
              <p className="about-journey-quotation-font text-left ml-5">
                Our mission is to transform the way you design
              </p>
            </div>
          </div>
        </div>
        {/* TODO : this is for the increment  */}
        {/*  here will use the aboutBar3 */}
      </div>
    </div>
  );
};

export default AboutJourney;
