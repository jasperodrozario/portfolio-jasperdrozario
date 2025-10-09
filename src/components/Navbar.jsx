"use client";
import { useEffect, useState } from "react";
import Button from "@/components/utils/button";

export default function Navbar() {
  const navListClass = `
    relative
    inline-block
    mx-3
    hover:text-[#63FFD9]
    after:content-['']
    after:absolute
    after:w-full
    after:h-[1px]
    after:bottom-[-2px]
    after:left-0
    after:bg-[#63FFD9]

    after:transition-transform
    after:duration-220
    after:ease-out

    after:scale-x-0
    after:origin-right

    hover:after:scale-x-100
    hover:after:origin-left
  `;

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
    <header className="w-full p-7 px-15 h-[100px]">
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
            <li className={navListClass}>About</li>
          </a>
          <a href="#skills">
            <li className={navListClass}>Skills</li>
          </a>
          <a href="#projects">
            <li className={navListClass}>Projects</li>
          </a>
          <a href="#contact">
            <li className={navListClass}>Contact</li>
          </a>
          <Button className="ml-4 px-3 py-2">Resume</Button>
        </div>
      </nav>
    </header>
  );
}
