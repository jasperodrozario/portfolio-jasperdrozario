"use client";
import { useEffect, useState } from "react";
import Button from "@/components/utils/button";

export default function Navbar() {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHidden((prevHidden) => !prevHidden);
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <header className="w-full p-7 px-15">
      <nav className="flex justify-between">
        <div className="flex items-center">
          <a href="/">
            <p className="text-xl font-semibold hover:text-[#63FFD9]">
              jasperdrozario
            </p>
          </a>
          <div className="h-1 w-1 rounded-full bg-white mt-3 ml-[0.1rem]"></div>
          <span
            className={`w-4 bg-[#63FFD9] mt-3 h-[0.2em] ml-[0.2rem] ${
              hidden && "hidden"
            }`}
          ></span>
        </div>
        <div className="flex list-none items-center">
          <a href="#about">
            <li className="mx-4 hover:text-[#63FFD9]">About</li>
          </a>
          <a href="#skills">
            <li className="mx-4 hover:text-[#63FFD9]">Skills</li>
          </a>
          <a href="#projects">
            <li className="mx-4 hover:text-[#63FFD9]">Projects</li>
          </a>
          <a href="#contact">
            <li className="mx-4 hover:text-[#63FFD9]">Contact</li>
          </a>
          <Button className="ml-4 px-3 py-2">Resume</Button>
        </div>
      </nav>
    </header>
  );
}
