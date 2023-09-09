import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "../Utils/DarkModeToggle"; // Import the DarkModeToggle component
import toggler from "../../Assets/toggle.svg";
import close from "../../Assets/close.svg"
import { useWindowSize } from "../Utils/GetWindowSize";

const LInkContainer = ({ label }) => {
  const linker = label.toLowerCase();
  return (
    <li className="opacity-100 font-extrabold cursor-pointer text-slate-900  dark:text-white   font-mono">
      <Link
        to={linker}
        smooth={true}
        duration={500}
        className="hover:text-rose-500 hover:font-extrabold"
      >
        {label}
      </Link>
    </li>
  );
};
const Container = ({ className }) => {
  return (
    <ul className="text-slate-900 z-10 h-[70%] text-[20px] flex flex-col items-center justify-center">
      <LInkContainer label={"Home"} />
      <LInkContainer label={"About"} />
      <LInkContainer label={"Works"} />
      <LInkContainer label={"Skills"} />
      <LInkContainer label={"Contact"} />
    </ul>
  );
};

const Navbar = () => {
  const { windoWidth, windowHeight } = useWindowSize();
  const [menu, setMenu] = useState(false);
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const isToggle = vw < 415;

  const menuHandler = () => {
    console.log("clicked");
    setMenu((prev) => !prev);
  };

  return (
    <nav className={`w-[100%] fixed ${isToggle? "bg-slate-50": ""} z-[20] mb-5 flex items-center justify-center md:justify-end`}>
      {!isToggle && (
        <ul className="flex  justify-between items-center space-x-4 md:space-x-10 text-white">
          <LInkContainer label={"Home"} />
          <LInkContainer label={"About"} />
          <LInkContainer label={"Works"} />
          <LInkContainer label={"Skills"} />
          <LInkContainer label={"Contact"} />
        </ul>
      )}
      {isToggle && <div className=" w-[70%]  flex items-center justify-end">
        <img
          onClick={menuHandler}
          className="w-[35px] h-[35px] cursor-pointer"
          src={toggler}
          alt=""
        />
      </div>}
      {isToggle && menu && <div className="absolute top-0 left-0 z-0 bg-[rgba(228,227,227,0.97)] flex flex-col items-center justify-between w-[100%] h-[300px]">
        <button onClick={menuHandler} className=" text-white font-semibold flex items-center justify-center mt-5 w-[60px] h-[60px]"><img className="w-[100%] h-[100%] " src={close} alt=""/></button>
        <Container />
      </div>}
      <DarkModeToggle /> {/* Add the DarkModeToggle component */}
    </nav>
  );
};

export default Navbar;
