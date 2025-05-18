import Icon from "../assets/Icons/Icon.svg";
import Icon2 from "../assets/Icons/Icon-2.svg";
import icon3 from "../assets/Icons/Icon-3.svg";
import icon4 from "../assets/Icons/Icon-4.svg";
const Solutions = () => {
  return (
    <section
      className=" max-container w-full"
      id="Solutions"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="font-Inter text-base font-medium text-primary">
          SOLUTIONS
        </p>
        <h2 className="font-DMSans font-bold text-white-smoke text-4xl leading-[116%] max-w-[620px] m-5 text-center">
          Revolutionize Your Business with Our AI-Powered
          Features
        </h2>
      </div>

      {/* FEATURES  */}
      <div className="w-full flex justify-between items-center gap-8 mt-20">
        {/* Feature Card-1 */}
        <div className="pt-10 pb-8 border-t border-[#282B27] ">
          <img
            src={Icon}
            alt="Advanced data analytics icon"
          />
          <h3 className="font-DMSans font-bold text-[31px] leading-[128%] text-[#A2A89E] mt-[92px] max-w-[277px]">
            Advanced Data Analytics
          </h3>

          <p className="font-Inter text-xl text-[#838B7F] leading-[158%] max-w-[277px] mt-3 ">
            Predictive analytics to gain actionable insights
            and forecast future trends.
          </p>
        </div>
        {/* Feature Card-2 */}
        <div className="pt-10 pb-8 border-t border-[#282B27] ">
          <img src={Icon2} alt="Operations icon" />
          <h3 className="font-DMSans font-bold text-[31px] leading-[128%] text-[#A2A89E] mt-[92px] max-w-[277px]">
            Operations with Automation
          </h3>

          <p className="font-Inter text-xl text-[#838B7F] leading-[158%] max-w-[277px] mt-3 ">
            Enhance your operational efficiency with our
            AI-driven automated workflows.
          </p>
        </div>
        {/* Feature Card-3 */}
        <div className="pt-10 pb-8 border-t border-[#282B27] ">
          <img
            src={icon3}
            alt="Advanced data analytics icon"
          />
          <h3 className="font-DMSans font-bold text-[31px] leading-[128%] text-[#A2A89E] mt-[92px] max-w-[277px]">
            Unlock Insights with NLP
          </h3>

          <p className="font-Inter text-xl text-[#838B7F] leading-[158%] max-w-[277px] mt-3 ">
            Language processing to extract meaningful
            unstructured data.
          </p>
        </div>
        {/* Feature Card-4 */}
        <div className="pt-10 pb-8 border-t border-[#282B27] ">
          <img
            src={icon4}
            alt="Advanced data analytics icon"
          />
          <h3 className="font-DMSans font-bold text-[31px] leading-[128%] text-[#A2A89E] mt-[92px] max-w-[277px]">
            Custom AI for Your Needs
          </h3>

          <p className="font-Inter text-xl text-[#838B7F] leading-[158%] max-w-[277px] mt-3 ">
            Collaborate with our team of AI experts to build
            and deploy bespoke models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
