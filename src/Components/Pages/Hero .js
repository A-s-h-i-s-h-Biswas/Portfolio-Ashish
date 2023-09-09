// import React,{useRef} from 'react';
import Typed from "react-typed"; // A library for typed animations
import avatar from "../../Assets/finalAvatar.gif";
import Button from "../Utils/Button";
const Hero = () => {
  // let mailtoHref=useRef();
  const mailtoHref =
    "mailto:ashishbiswasg@gmail.com?subject=SendMail&body=Description";
  return (
    <section
      id="home"
      className=" h-[500px] w-[100%] max-w-[998px]  p-8 mt-16 md:mt-0 text-white flex flex-col-reverse md:flex-row justify-between md:items-center"
    >
      <div className="flex flex-col md:w-[80%]  md:justify-center items-center md:items-start  w-[100%]">
        <h1 className="md:text-5xl text-3xl font-bold pb-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello! {"{<----/>}"}
        </h1>
        <h1 className="md:text-5xl text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          I'm Ashish Biswas
        </h1>
        {/* <p className="text-lg mb-4">Full Stack Developer</p> */}
        <Typed
          className="md:text-[40px] text-[25px] mt-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-500"
          strings={[
            "Engineer",
            "Frontend Developer",
            "Algorithmic Problem Solver",
          ]}
          typeSpeed={50}
          backSpeed={50}
          backDelay={2000}
          loop
        />
        <Button>
          <a href={mailtoHref}>Hire Me</a>
        </Button>
      </div>
      <div className=" flex items-center justify-center">
        <div className="polygonal-shape  flex items-center w-[300px] h-[300px] justify-center ">
          {/* <div className='absolute shape-hero'/> */}
          <img
            src={avatar} // Replace with your image URL
            alt="Polygonal Shape"
            className="animated-image  w-[250px] md:w-[300px] h-[250px] md:h-[300px]  object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
