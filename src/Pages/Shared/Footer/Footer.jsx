import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import logo from "../../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#091544]  text-[#F9FAFB] footer-background footer-design">
      <div className="max-w-[1250px] mx-auto ">
        <div className="grid grid-cols-4 gap-5 footer-grid items-center justify-items-center">
          <div>
            <img className="mb-10" src={logo} alt="" />
            <p className="footer-Title">
              Bunon Texwear Ltd. An OEM Clothing Manufacturer, Exporter & Buying
              Agent. We have started our journey in 1998.
            </p>
          </div>
          <div>
            <p className="mb-10 footer-Title">Company</p>
            <ul>
              <p>Home</p>
              <p>About Us </p>
              <p>Blog</p>
            </ul>
          </div>
          <div>
            <p className="mb-10 footer-Title ">Product</p>
            <ul>
              <p>Towels</p>
              <p>Cottons</p>
              <p>Polyster</p>
              <p>Napery</p>
            </ul>
          </div>
          <div>
            <p className="mb-10 footer-Title">Get in touch</p>

            <ul>
              <p className="flex">
                <FaLocationDot className="text-[#2D69D1] text-6xl mr-2 " />
                252 Ramarbag, Kutubpur, Fatullah, Narayangonj-1400, Bangladesh
              </p>
              <p className="flex mt-7">
                <MdEmail className="text-[#2D69D1] text-4xl mr-2 " />
                contact@leadhuntio.com
              </p>
              <p className="flex mt-7">
                <IoMdCall className="text-[#2D69D1] text-4xl mr-2 " />
                +165045707551
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
