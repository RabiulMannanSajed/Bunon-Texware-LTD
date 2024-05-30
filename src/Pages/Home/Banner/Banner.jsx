import "./Banner.css";
import banner1 from "../../../assets/bannerImg1.png";
import banner2 from "../../../assets/bannerImg2.png";
import banner3 from "../../../assets/bannerImg3.png";
import quotation from "../../../assets/Vector (2).svg";
const Banner = () => {
  return (
    <div className="bg-[#091544]  text-[#F9FAFB] banner-background">
      {/* make this is inside a block  */}
      <div className="max-w-[1250px] mx-auto ">
        <div className="flex">
          <div className="flex-[1]">
            <div>
              <h1 className="font-bold title-font">
                <span className="text-[#AEEE6A] ">Perfection</span> In Every
                Stitch
              </h1>
              {/* TODO :make this  okk  */}
              <div className="banner-color-pattern1"></div>
              <p className="details-font ">
                Bunon Texwear Ltd.An OEM Clothing Manufacturer, Exporter &
                Buying Agent. We have started our journey in 1998. With a huge
                experience of circular knit garments field, we are committed to
                one stop sourcing service to our valued customer.
              </p>
            </div>
            {/* this is part is btn  */}

            <div className="mt-12">
              <button className="details-font mr-9 btn-design">
                View more details
              </button>
              <button className="details-font btn-design">Buy product</button>
            </div>

            <p className="details-font  mt-8">
              Need more info? <u>Contact sales team</u>
            </p>
          </div>
          {/* this is part is hold the img part  */}{" "}
          <div className="flex-[1] z-20 pl-5">
            <div className="grid grid-cols-3 ">
              <img src={banner1} alt="" />
              <img className="mt-16" src={banner3} alt="" />
              <div className="banner-color-pattern2 "></div>
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
        <div className="w-64 div-quotation z-30 ">
          <img src={quotation} alt="" />
          <p className="details-font text-left ml-5">
            Our mission is to transform the way you design
          </p>
        </div>
        <p className="details-font ">
          <span className="text-[#AEEE6A]">
            Partnering with leading global brands.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
