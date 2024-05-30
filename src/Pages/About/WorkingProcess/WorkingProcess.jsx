import "./WorkingProcess.css";
import { useEffect, useState } from "react";

const WorkingProcess = () => {
  const [processes, setProcess] = useState([]);
  useEffect(() => {
    fetch("workingProcess.json")
      .then((res) => res.json())
      .then((data) => setProcess(data));
  }, []);
  return (
    <div className="working text-white">
      <div className="max-w-[1250px] mx-auto ">
        <h1 className="working-title-font text-center mb-20">
          Working <span className="text-[#AEEE6A]">Process</span>
        </h1>
        <div className="grid grid-cols-3 gap-10">
          {processes.map((process) => (
            <div key={process.id} className=" processInfo p-9">
              <img className="working-info-img" src={process.img} alt="" />
              <h2 className="working-info-title">{process.workingTitle}</h2>
              <p className="working-info">{process.workingDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
