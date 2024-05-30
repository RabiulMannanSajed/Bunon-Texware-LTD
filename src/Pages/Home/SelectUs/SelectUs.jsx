import "./SelectUs.css";
const SelectUs = () => {
  return (
    <div className="bg-color-Select  pt-36">
      <div className="max-w-[1250px] mx-auto text-[#FFF] ">
        <p className="whyUs">Why Choose Us</p>
        <h2 className="title-font mb-28">
          Textiles That Are{" "}
          <span className="text-[#AEEE6A]">
            Feather- <br />
            Light
          </span>{" "}
        </h2>
        {/* TODO : Make data for this  */}
        <div className="grid grid-cols-3 gap-5">
          <div className="modernDesign">
            <h1 className="text-[#AEEE6A]  title-font">
              {" "}
              <span className="text-[#AEEE6A]">01</span>
            </h1>
            <h1 className="details-font">Modern process and Factory</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              commodi!
            </p>
          </div>
          <div className="modernDesign">
            <h1 className="text-[#AEEE6A] title-font">
              {" "}
              <span className="text-[#AEEE6A]">02</span>
            </h1>
            <h1 className="details-font">Modern process and Factory</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              commodi!
            </p>
          </div>
          <div className="modernDesign">
            <h1 className="text-[#AEEE6A] title-font">
              <span className="text-[#AEEE6A]">03</span>
            </h1>
            <h1 className="details-font">Modern process and Factory</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              commodi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUs;
