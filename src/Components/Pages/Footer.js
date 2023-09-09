import React from 'react';
import linkedin from "../../Assets/linkedin.svg";
import github from "../../Assets/github.svg";
import twitter from "../../Assets/ntwitter-x-logo-freelogovectors.net_.webp";
import youtube from "../../Assets/youtube.svg";

const SocialHolder=({logo, url})=>{
  return <a href={url} target="_blank" rel="noopener noreferrer"
   className='w-[35px] h-[35px] border-[2px] border-green-500 hover:opacity-50 rounded-full overflow-hidden  flex items-center justify-center'>
  <img
    src={logo} // Replace with your social media icons
    alt="social handler"
    className="w-6 h-6 object-cover"
  />
</a>
}
const Footer = () => {
  return (
    <footer className=" dark:text-white mt-10 text-stone-900 p-4">
      <div className="flex items-center justify-center space-x-4">
        {/* Social Icons */}
        <SocialHolder logo={linkedin} url={"https://www.linkedin.com/in/ashish-biswas/"}/>
        <SocialHolder logo={github} url={"https://github.com/A-s-h-i-s-h-Biswas"}/>
        <SocialHolder logo={twitter} url={"https://twitter.com/@Ashish__Biswas"}/>
        <SocialHolder logo={youtube} url={"https://www.youtube.com/channel/UCiuieWgHFoGwL62GLQ11F4Q"}/>
      </div>
      {/* Copyright Information */}
      <p className="text-center mt-4 opacity-70">
        Copyright &copy; {new Date().getFullYear()} <span className='font-bold text-clip text-green-500' >Ashish Biswas</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
