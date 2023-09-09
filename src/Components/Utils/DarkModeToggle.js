import React, { useState, useEffect } from 'react';
import lightMode from "../../Assets/sun-svgrepo-com - Copy.svg";
import darkMode from "../../Assets/moon-svgrepo-com.svg";

const DarkModeToggle = () => {
  const [mode, setMode] = useState(getInitialMode());

  // Function to get initial mode based on user preferences
  function getInitialMode() {
    return localStorage.getItem('mode');
  }

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.documentElement.classList.toggle('dark'); // Add 'dark' class to enable dark mode
  };

  // Effect to set initial mode
  useEffect(() => {
    if(mode === "dark")document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [mode]);

  return (
    <button
      className="p-4 pr-0 md:pl-10 md:pr-10"
      onClick={toggleMode}
    >
      <img className='w-[30px] h-[30px] object-cover'  src={mode === 'light' ? darkMode : lightMode} alt='Mode'/>
      
    </button>
  );
};

export default DarkModeToggle;
