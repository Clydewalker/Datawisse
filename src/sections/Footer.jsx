import Datawiselogo from "../assets/Icons/DataWise-Logo.svg";

const Footer = () => {
  return (
    <footer className="w-full max-container">
      <div className=" border-b border-t border-[#282B27] grid grid-cols-4 gap-10 pb-28 pt-20">
        <div className="ml-5">
          <img src={Datawiselogo} alt="" />
        </div>

        {/* Nav-Item  */}
        <div className="flex flex-col justify-start items-start ">
          <h3 className="font-DMSans font-bold text-base text-[#A2A89E] mb-5">
            About
          </h3>
          <p className="nav-text">Company Overview</p>
          <p className="nav-text">Careers</p>
          <p className="nav-text">Press & Media</p>
          <p className="nav-text">Testimonials</p>
        </div>
        {/* Nav-Item  */}
        <div className="flex flex-col justify-start items-start ">
          <h3 className="font-DMSans font-bold text-base text-[#A2A89E] mb-5">
            Resources
          </h3>
          <p className="nav-text">Blog</p>
          <p className="nav-text">Help Center</p>
          <p className="nav-text">Webinars & Events</p>
          <p className="nav-text">Case Studies</p>
        </div>
        {/* Nav-Item  */}
        <div className="flex flex-col justify-start items-start ">
          <h3 className="font-DMSans font-bold text-base text-[#A2A89E] mb-5">
            Support & Contact
          </h3>
          <p className="nav-text">Contact Us</p>
          <p className="nav-text">Technical Support</p>
          <p className="nav-text">Feedback</p>
          <p className="nav-text">Community Forum</p>
        </div>
      </div>

      <div className="flex justify-between items-center py-6 ">
        <p className="font-inter text-[14px] leading-[20px] text-[#51564E]">
          ©2023 NIMBUS · All rights reserved.
        </p>
        <div className="flex gap-6 items-center justify-center">
          <p className="font-DMSans font-medium text-[14px] leading-[126%] text-[#656B61]">
            Term of Use
          </p>
          <p className="font-DMSans font-medium text-[14px] leading-[126%] text-[#656B61]">
            Privacy policy
          </p>
          <p className="font-DMSans font-medium text-[14px] leading-[126%] text-[#656B61]">
            Security
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
