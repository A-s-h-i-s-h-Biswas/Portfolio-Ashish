// import React from "react";
import emailLogo from "../../Assets/incoming-mail-svgrepo-com.svg";
import Button from "../Utils/Button";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [input,setInput]=useState({name:null, email:null, message:null});
  const YOUR_SERVICE_ID=process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID=process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY=process.env.REACT_APP_YOUR_PUBLIC_KEY;

  console.log(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,YOUR_PUBLIC_KEY);
  const sendEmail = (e) => {
    e.preventDefault();
    const valid=input.email?.includes("@gmail.com") && input.email.length>10 && input.name.length>6 && input.message.length>6;
    if(!valid){
      toast.error("Invalid input!!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
        return;
    }
    console.log("sendint msg..........");
    emailjs.sendForm(YOUR_SERVICE_ID , YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
        setInput({name:null, email:null, message:null});
          toast.success('sent successfully🎉', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
      }, (error) => {
          // console.log();
          toast.error(error.text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
      });
  };
  console.log(input);
  
  return (
    <section
      id="contact"
      className=" w-[100%] max-w-[998px] p-8  transition-all flex flex-col md:flex-row justify-center md:justify-between items-center"
    >
      {/* Left Container */}
      {/* <div className="animate-fadeIn animate-delay-1s"> */}
        <div className="relative">
          {/* SVG Avatar Image */}
          <img
            src={emailLogo} // Replace with the path to your SVG avatar image
            alt="Avatar"
            className="w-[300px] h-[300px]  animate-float"
          />
          {/* <p className="text-stone-900 -mt-10 font-semibold dark:text-white">Drop a word. I would love to here from you.</p> */}
        </div>
        
      {/* </div> */}

      {/* Right Container */}
      <div className="w-[100%] md:w-[70%]  flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-rose-600">Get in  Touch</h2>
        {/* <p className="mt-4">Feel free to get in touch with me!</p> */}
        {/* Form for Name, Email, Message */}
        <form ref={form} onSubmit={sendEmail} className="mt-4 transition-all w-[100%] max-w-[450px]">
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              value={input.name}
              onChange={(e)=>setInput(prev=>({...prev,name:e.target.value}))}
              required
              placeholder="Name"
              className="w-full h-[45px] outline-none border-[1.5px] border-gray-300 hover:border-[2px]  p-2 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={input.email}
              onChange={(e)=>setInput(prev=>({...prev,email:e.target.value}))}
              name="user_email"
              placeholder="Email"
              required
              className="w-full h-[45px] outline-none border-[1.5px] border-gray-300 hover:border-[2px]  p-2 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="4"
              name="message"
              value={input.message}
              onChange={(e)=>setInput(prev=>({...prev,message:e.target.value}))}
              required
              placeholder="Message"
              className="w-full h-[150px] outline-none border-[1.5px] border-gray-300 hover:border-[2px]  p-2 rounded-sm"
            ></textarea>
          </div>
          <div className="flex md:block items-center justify-center"><Button label={"Send"}/></div>
          <ToastContainer/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
