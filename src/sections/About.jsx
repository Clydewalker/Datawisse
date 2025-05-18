import Arrow from "../assets/Icons/Arrow.svg";

const About = () => {
  return (
    <section id="About Us" className="max-container w-full">
      <div>
        <p className="font-Inter font-medium text-primary text-base">
          ABOUT US
        </p>

        <h2 className="font-DMSans font-bold text-4xl text-white-smoke mt-5">
          Empowering Innovation AI
        </h2>

        <p className="font-Inter text-2xl leading-[160%] text-slate-gray mt-10 max-w-7xl">
          we are driven by the vision of transforming
          businesses with artificial intelligence. Founded
          in 2024, we have consistently pushed the
          boundaries of AI to offer smart, scalable, and
          intuitive solutions that drive growth and
          efficiency.
        </p>
        <p className="font-Inter text-2xl leading-[160%] text-slate-gray mt-5 max-w-6xl">
          Our team of expert data scientists, engineers, and
          strategists combines cutting-edge technology with
          deep industry knowledge to deliver custom AI
          solutions that cater to unique business
          challenges.
        </p>
      </div>

      <div className="flex items-center justify-start gap-14 mt-[60px]">
        {/* The small testimonials */}
        <div>
          <h3 className="font-DMSans font-bold text-[39px] text-[#A2A89E] leading-[116%]">
            32+
          </h3>
          <p className="font-Inter text-base max-w-28 text-slate-gray pt-3">
            Years in AI Innovation
          </p>
        </div>
        <div>
          <h3 className="font-DMSans font-bold text-[39px] text-[#A2A89E] leading-[116%]">
            20
          </h3>
          <p className="font-Inter text-base max-w-40 text-slate-gray pt-3">
            Clients Countries Worldwide
          </p>
        </div>
        <div>
          <h3 className="font-DMSans font-bold text-[39px] text-[#A2A89E] leading-[116%]">
            4000+
          </h3>
          <p className="font-Inter text-base max-w-52 text-slate-gray pt-3">
            Projects Successfully Implemented
          </p>
        </div>
      </div>

      <a
        href="#"
        className="font-Inter font-medium text-base text-primary mt-[60px] flex"
      >
        <p className="font-Inter font-medium text-base text-primary border-b border-primary pb-[1px] flex">
          Read more
        </p>
        <img
          src={Arrow}
          alt="button-arrow"
          className="ml-2"
        />
      </a>
    </section>
  );
};

export default About;
