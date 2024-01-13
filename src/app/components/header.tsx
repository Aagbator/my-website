"use client";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between w-full py-5 px-5     sm:px-10">
      <h1 className="text-black font-extrabold text-5xl">AA.</h1>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-end"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-3" : "-translate-y-1"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-1 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-1  items-end rounded-sm ${
                      isOpen
                        ? "-rotate-45 -translate-y-1 w-8"
                        : "translate-y-1 w-4"
                    }`}
        ></span>
      </button>
    </header>
  );
};
