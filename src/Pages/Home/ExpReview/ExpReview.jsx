import "./ExpReview.css";
const ExpReview = () => {
  return (
    <div className="bg-color pt-32">
      <div className="max-w-[1250px] mx-auto ">
        <div className="flex">
          <div className="flex-[1]">
            <h2 className="details-font">this is content img or video </h2>
          </div>
          <div className="flex-[1]">
            <div>
              <h1 className="title-font">
                Do Well,{" "}
                <span className="text-[#AEEE6A]">Live Well & Dress</span> Really
                Well
              </h1>
              <p className="details-font">
                Bunon Texwear Ltd.An OEM Clothing Manufacturer, Exporter &
                Buying Agent. We have started our journey in 1998.
              </p>
            </div>
            <div className="flex">
              <div className="text-white text-center reviewClass mr-4">
                <h1 className="title-font ">
                  <span className="text-[#AEEE6A] font-bold">4.7</span>
                </h1>
                <p className="details-font">costumer review </p>
                <p>*****</p>
                <p className="reviewP">
                  Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                  Buying Agent. We have started our journey in 1998.{" "}
                </p>
              </div>
              <div className="text-white text-center reviewClass">
                <h1 className="title-font ">
                  <span className="text-[#AEEE6A] font-bold">2B+</span>
                </h1>
                <p className="details-font">costumer review </p>
                <p>*****</p>
                <p className="reviewP">
                  Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter &
                  Buying Agent. We have started our journey in 1998.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpReview;
