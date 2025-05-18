import Button from "../Components/Button";
import heroImage from "../assets/images/Hero-image.png";
const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex justify-between xl:flex-row max-container gap-10 "
    >
      <div className="flex flex-col items-start bg-smoky-blak">
        <h1 className=" font-DMSans font-bold text-[88px] text-white-smoke leading-[108%] max-w-[890px] ">
          Unleash the Power of Data
        </h1>
        <p className="text-2xl font-Inter text-slate-gray leading-[160%] max-w-2xl pt-8">
          Step into the future with our state-of-the-art AI
          solutions. Unleash the potential of machine
          learning to innovate, optimize, and transform your
          business processes.
        </p>
        <div className=" flex gap-3 pt-12 justify-center items-start  ">
          <Button label="Start Your Free Trial" />
          <Button
            label="Learn more"
            borderColor="border-[#282B27]"
            backgroundColor="bg-smoky-blak"
            textColor="text-[#A2A89E]"
          />
        </div>
      </div>

      <div className="flex flex-2 justify-center items-center">
        <img
          src={heroImage}
          alt="hero-image"
          width={405}
          height={392}
        />
      </div>
    </section>
  );
};

export default Hero;
