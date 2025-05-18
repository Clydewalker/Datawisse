import dataWiseLogo from "../assets/icons/DataWise-Logo.svg";
import downArrow from "../assets/Icons/Down-arrow.svg";
import Button from "./Button";

const Nav = () => {
  return (
    <header className="absolute z-10 w-full px-20 py-8  ">
      <nav className=" flex justify-between items-center  border-b border-[#282B27] pb-8 ">
        <div className="flex justify-center items-center ">
          <a href="#home">
            <img src={dataWiseLogo} alt="DataWise Logo" />
          </a>

          <ul className="flex items-center gap-10 ml-12 ">
            <li className="flex items-center justify-center gap-2">
              <a
                className="font-DMSans text-lg font-medium text-slate-gray"
                href="#"
                iconURL={downArrow}
              >
                Features
              </a>
              <img src={downArrow} alt="down-arrow" />
            </li>
            <li className="flex items-center justify-center gap-2">
              <a
                className="font-DMSans text-lg font-medium text-slate-gray"
                href="#"
              >
                Case Studies
              </a>
              <img src={downArrow} alt="down-arrow" />
            </li>
            <li>
              <a
                className="font-DMSans text-lg font-medium text-slate-gray"
                href="#"
              >
                English
              </a>
            </li>
            <li>
              <a
                className="font-DMSans text-lg font-medium text-slate-gray"
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between gap-3">
          <Button
            label="Get a demo"
            backgroundColor="bg-smoky-blak"
            borderColor="border-[#0C1708]"
            textColor="text-[#3A7326]"
          ></Button>

          <Button label="Start Your Free Trial"></Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
