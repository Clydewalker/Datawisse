import Star from "../assets/Icons/Star.svg";
import Button from "../Components/Button";
import Cta from "../assets/Images/CTA-image item.png";
const CTA = () => {
  return (
    <section
      id="CTA"
      className="flex justify-between items-center max-container w-full"
    >
      <div className="">
        <h2 className="font-DMSans font-bold text-white-smoke max-w-2xl text-[39px] leading-[116%]">
          Experience the Future of Business Analytics
        </h2>
        <p className="font-inter text-slate-gray text-[16px] leading[160%] max-w-2xl mt-4 ">
          Get hands-on with our advanced AI-driven features
          and see the difference for yourself. Start your
          free trial today.
        </p>

        <ul className="flex flex-col justify-start mt-8 gap-2 mb-8">
          {/* li item */}
          <li className="flex">
            <img src={Star} alt="" />
            <p className="text-base text-slate-gray font-Inter ml-[10px]">
              Context-aware natural language search and
              discovery
            </p>
          </li>
          {/* li item */}
          <li className="flex">
            <img src={Star} alt="" />
            <p className="text-base text-slate-gray font-Inter ml-[10px]">
              Embark on a journey of data-driven
              decision-making
            </p>
          </li>
          {/* li item */}
          <li className="flex">
            <img src={Star} alt="" />
            <p className="text-base text-slate-gray font-Inter ml-[10px]">
              Single permission model for data + AI
            </p>
          </li>
        </ul>

        <Button
          label="Get a demo"
          className="px-10 py-5 mt-8"
        ></Button>
      </div>

      <div className="">
        <img
          src={Cta}
          alt="CTA image"
          width={483}
          height={378}
          className=" border border-[#282B27] rounded-[32px]"
        />
      </div>
    </section>
  );
};

export default CTA;
