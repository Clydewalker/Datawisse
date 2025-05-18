import Logo from "../assets/Icons/Logo.svg";
import Logo1 from "../assets/Icons/Logo-1.svg";
import Logo2 from "../assets/Icons/Logo-2.svg";
import Logo3 from "../assets/Icons/Logo-3.svg";
import Logo4 from "../assets/Icons/Logo-4.svg";
import Logo5 from "../assets/Icons/Logo-5.svg";
import Logo6 from "../assets/Icons/Logo-6.svg";
import Logo7 from "../assets/Icons/Logo-7.svg";
import Logo8 from "../assets/Icons/Logo-8.svg";
import Logo9 from "../assets/Icons/Logo-9.svg";

const Logos = () => {
  return (
    <section
      id="Our-partners"
      className="max-container relative overflow-hidden "
    >
      <div className="max-w-[1380px] mx-auto flex items-center justify-center gap-12 px-4 overflow-hidden relative ">
        <div className="absolute right-[91%] h-full w-40 bg-[linear-gradient(to_right,_#0D0E0C_76%,_transparent_100%)] "></div>
        <div className="flex overflow-hidden space-x-12 ">
          <div className="flex items-center justify-center gap-12 px-4 animate-loop-scroll whitespace-nowrap shrink-0  ">
            {[
              Logo,
              Logo1,
              Logo2,
              Logo3,
              Logo4,
              Logo5,
              Logo6,
              Logo7,
              Logo8,
              Logo9,
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`partner-logo-${index}`}
                className="max-w-none"
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center gap-12 px-4 animate-loop-scroll whitespace-nowrap shrink-0  "
            aria-hidden="true"
          >
            {[
              Logo,
              Logo1,
              Logo2,
              Logo3,
              Logo4,
              Logo5,
              Logo6,
              Logo7,
              Logo8,
              Logo9,
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`partner-logo-${index}`}
                className="max-w-none"
              />
            ))}
          </div>

          {/* <div
          className="flex items-center justify-center gap-[70px] px-4 overflow-hidden animate-loop-scroll"
          aria-hidden="true"
        >
          {[Logo7, Logo8, Logo9].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`partner-logo-${index}`}
              className="max-w-none"
            />
          ))}
        </div> */}
        </div>
        <div className="absolute left-[91%] h-full w-40 bg-[linear-gradient(to_left,_#0D0E0C_76%,_transparent_100%)] "></div>
      </div>
    </section>
  );
};

export default Logos;
