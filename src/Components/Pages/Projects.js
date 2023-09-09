import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import useWindowDimensions from "../Utils/GetWindowSize";
import linkedinClone from "../../Assets/Linkedin clone Logo.png";
import disneyClone from "../../Assets/disney clone.png";
import foody from "../../Assets/foody logo.png";
import chatapp from "../../Assets/chat logo.png";
// import { useState, useEffect, } from "react";
import { useWindowSize } from "../Utils/GetWindowSize";

// hook to get window size dynamically


const ProjectHolder = ({ logo, demo, code }) => {
  
  return (
    <div className="relative group flex items-center justify-center ">
      <img
        src={logo} // Replace with your project image URL
        alt="Project"
        className="w-[300px] h-[200px]  hover:bg-[rgba(0,0,0,.45)]  hover:opacity-60  object-contain"
      />
      <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 py-2 px-4 rounded-full text-white m-2 text-sm">
          <a href={code} target="_blank" rel="noopener noreferrer">
            Show Code
          </a>
        </div>
        <div className="bg-gradient-to-r cursor-pointer from-green-500 to-teal-500 py-2 px-4 rounded-full text-white m-2 text-sm">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
  const linkedinCode="https://github.com/A-s-h-i-s-h-Biswas/LinkedIn-Clone-FullStack";
  const disneyCode="https://github.com/A-s-h-i-s-h-Biswas/DisneyHotstarClone";
  const chatCode="https://github.com/A-s-h-i-s-h-Biswas/ChatApp";
  const foodyCode="https://github.com/A-s-h-i-s-h-Biswas/Foody";
  const linkedinDemo="https://linkedin-live.web.app/"
  const foodyDemo="https://foody-c872b.web.app/";
  const disneyDemo="https://clonedisneyhotstar.firebaseapp.com/";

const Projects = () => {
  
  const {windoWidth, windowHeight}= useWindowSize();
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  let width=vw;
  console.log(width);
  const slide= width >990 ? 3 : (width >684 ? 2 : 1);
  let settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: slide,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnFocus: true, 
    pauseOnHover: true
    // waitForAnimate: false,
  };


  return (
    <section
      id="works"
      className=" w-[100%] max-w-[998px]  p-8 opacity-100 "
    >
      <h2 className="text-3xl text-center md:text-left font-semibold text-rose-600">My Works</h2>
      {/* <div className="mt-4 w-[100%] opacity-100 flex  flex-rowitems-center justify-center "> */ }
        <Slider {...settings} className="flex items- mt-5 justify-center">
        
          <ProjectHolder logo={linkedinClone} demo={linkedinDemo} code={linkedinCode}/>
          <ProjectHolder logo={disneyClone} demo={disneyDemo} code={disneyCode}/>
          <ProjectHolder logo={foody} demo={foodyDemo} code={foodyCode}/>
          <ProjectHolder logo={chatapp} code={chatCode}/>

        </Slider>
      
    </section>
  );
};

export default Projects;
