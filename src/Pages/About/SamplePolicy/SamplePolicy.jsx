import "./SamplePolicy.css";
import policyImg from "../../../assets/policyImg.png";
import { useState } from "react";
const SamplePolicy = () => {
  const [clickBtn, setClickBtn] = useState("btn1");
  const [btn1ClassName, setBtn1ClassName] = useState("policy-btn");
  const [btn2ClassName, setBtn2ClassName] = useState("policy-btn");

  const handlePolicyBtn = (data, data2) => {
    setClickBtn(data);
    setBtn1ClassName(data2);
    setBtn2ClassName(data2);
  };

  return (
    <div className="sampleBg text-white">
      {/*  for area  */}
      <div className="max-w-[1250px] mx-auto  p-24">
        {/* for flex */}
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="policy-title-font">
              {" "}
              Our <span className="text-[#aeee6a]">SAMPLING</span> POLICY
            </h2>
            <p className="policy-details-font">
              We offer Free Pre-Production Sample To Make You Sure That You get
              the Best Quality.
            </p>
            <div className="flex">
              <button
                className={
                  btn1ClassName === "clicked" ? "clicked" : "policy-btn"
                }
                onClick={() => handlePolicyBtn("btn1", "clicked")}
              >
                SAMPLE LEAD TIME
              </button>
              <button
                className={
                  btn2ClassName === "clicked" ? "clicked" : "policy-btn"
                }
                onClick={() => handlePolicyBtn("btn2", "clicked")}
              >
                SAMPLE CHARGES
              </button>
            </div>
            {/*  if user click then show the details  */}
            <div>
              {clickBtn === "btn1" && (
                <p className="policy-btn-details">
                  Usually we need 7-15 days for the sample program. It`s depends
                  on fabric availability & print/embroidery design (If any).
                </p>
              )}
              {clickBtn === "btn2" && (
                <p className="policy-btn-details">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  molestiae doloribus. Minima animi fugiat esse tenetur voluptas
                </p>
              )}
            </div>
          </div>
          <div>
            <img src={policyImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePolicy;
