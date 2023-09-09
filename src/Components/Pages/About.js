import React from 'react';
import avatar from "../../Assets/sifi.jpg"
import Button from '../Utils/Button';
const About = () => {
  return (
    <section id="about" className=" max-w-[998px] h-[600px] md:h-auto p-8  flex flex-col md:flex-row justify-between items-center md:items-start">
      {/* Left Container */}
      
        <div className="h-[300px]  w-[250px] flex items-center md:items-start justify-center relative rounded-lg ">
          <div className='absolute  w-[200px] h-[250px] rotate-12  md:rotate-[5deg] border-[2px] border-blue-300 '/>
          <img
            src={avatar} // Replace with your image URL
            alt="About Me"
            className="w-[200px] h-[250px] object-cover rounded-sm shadow-md shadow-gray-50/50"
          />
        </div>
      

      {/* Right Container */}
      <div className="  md:w-[65%] flex flex-col items-center md:items-start justify-center md:justify-between">
        <h2 className="text-3xl text-rose-600 pt-0 mt-0 font-semibold">About Me</h2>
        <p className="mt-2 text-center md:text-left dark:text-white  font-semibold text-stone-900">
          An inquisitive Computer Science and Engineering passout student, skilled in Frontend Development, Algorithmic problem solving, seeking to be expert in my field with focus on leadership, collaboration, communication and passion.
        </p>
        <Button><a href='https://drive.google.com/file/d/1YQUGUYT1_FzDkCuOAYZAh0XiT5BjGO9l/view?usp=drive_link' target="_blank" rel="noopener noreferrer"> Download CV </a></Button>
      </div>
    </section>
  );
};

export default About;
