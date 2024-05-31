import "./Contact.css";
import deal from "../../assets/Deal.svg";
const Contact = () => {
  return (
    <div className="contactBg pb-56">
      <div className="max-w-[1250px] mx-auto text-[#FFF]">
        <h1 className="content-title-font">
          Get in <span className="text-[#AEEE6A]">Touch</span>
        </h1>
        <p className="content-details-font">
          Fill out the form bellow, and we'll get back to you as early as
          possible
        </p>
        <div className=" flex">
          <div className="flex-[1]">
            <img className="contact-img" src={deal} alt="" />
          </div>
          <div className="flex-[1] contactForm">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="contact-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter service name"
                  className="contact-input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="contact-text">Password</span>
                </label>
                <input
                  type="password"
                  className="contact-input"
                  placeholder="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="contact-text">Message</span>
                </label>
                <input
                  type="password"
                  className="contact-input"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <div className=" mt-6">
                <button className="contact-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
