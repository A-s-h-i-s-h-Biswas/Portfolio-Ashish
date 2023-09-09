import React from "react";
import html from "../../Assets/html-5-svgrepo-com.svg";
import css from "../../Assets/css-3-svgrepo-com.svg";
import js from "../../Assets/javascript-svgrepo-com.svg";
import ts from "../../Assets/typescript-logo-svgrepo-com.svg";
import react from "../../Assets/react-svgrepo-com.svg";
import next from "../../Assets/light-next-svgrepo-com.svg";
import java from "../../Assets/java-svgrepo-com.svg";
import tailwind from "../../Assets/tailwindcss-icon-svgrepo-com.svg";
import node from "../../Assets/nodejs-1-logo-svgrepo-com.svg";
// import sql from "../../Assets/sql-database-generic-svgrepo-com.svg";
import mongo from "../../Assets/mongo-svgrepo-com.svg";
import firebase from "../../Assets/firebase-svgrepo-com.svg";
import redux from "../../Assets/redux-svgrepo-com.svg";
import socket from "../../Assets/socket-svgrepo-com.svg";
import github from "../../Assets/github-142-svgrepo-com.svg";
import vs from "../../Assets/vs-code-svgrepo-com.svg";
import skillAvatar from "../../Assets/skillAvatar-removebg-preview.png";

const SkillHolder = ({ logo }) => {
  return (
    <div className="md:w-[100px] w-[80px] md:h-[100px] h-[60px] flex items-center justify-center">
      <div className="relative group rounded-full overflow-hidden border-[2px] border-green-300">
        <img
          src={logo} // Replace with the path to your CSS SVG image
          alt="skill logo"
          className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-cover  transform transition-transform group-hover:scale-x-[-1]"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className=" w-[100%]  flex flex-col-reverse md:flex-row items-center md:items-start justify-center max-w-[998px] p-8"
    >
      <div className="flex flex-col md:items-start items-center w-[100%] md:w-[80%]">
        <h2 className="text-3xl text-rose-600 font-semibold">Skills</h2>
        <p className="mt-4 text-center md:text-justify dark:text-white text-stone-900 font-semibold">
          I enjoy creating websites, applications and more. Here's a list of
          technologies and tools I'm proficient in.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-4">
          {/* Tech Stack SVG Images */}

          <SkillHolder logo={html} />
          <SkillHolder logo={css} />
          <SkillHolder logo={tailwind} />
          <SkillHolder logo={js} />
          <SkillHolder logo={ts} />
          <SkillHolder logo={react} />
          <SkillHolder logo={redux} />
          <SkillHolder logo={next} />
          <SkillHolder logo={java} />
          <SkillHolder logo={node} />
          <SkillHolder logo={mongo} />
          {/* <SkillHolder logo={sql}/> */}
          <SkillHolder logo={firebase} />
          <SkillHolder logo={socket} />
          <SkillHolder logo={github} />
          <SkillHolder logo={vs} />

          {/* Add more tech stack items as needed */}
        </div>
      </div>
      <div className="h-[100%] md:mt-10 md:ml-10">
      <div className="h-[300px]  w-[250px]  flex items-center  justify-center relative rounded-lg ">
        <div className="absolute  w-[200px] h-[250px] rotate-12   md:rotate-[0] border-[2px] border-blue-300 " />
        <img
          src={skillAvatar} // Replace with your image URL
          alt="About Me"
          className="w-[200px] h-[250px] object-cover rounded-sm shadow-md shadow-gray-50/50"
        />
      </div>
      </div>
    </section>
  );
};

export default Skills;
