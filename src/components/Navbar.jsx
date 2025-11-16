"use client";
import { useEffect, useState } from "react";
import Button from "@/components/utils/button";
import { IconMenuDeep, IconX } from "@tabler/icons-react";

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

  // Open Resume link
  const openResume = () => {
    window.open("/resume/resume.pdf", "_blank");
  };

  // Logo cursor blinking logic
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHidden((prevHidden) => !prevHidden);
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Sliding menu state logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logic to disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = (
    <>
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
      <Button onClick={openResume} className="ml-4 px-3 py-2">
        Resume
      </Button>
    </>
  );

  return (
    <header className="w-full p-7 px-15 h-[100px]">
      <nav className="flex justify-between">
        {/* Logo */}
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
        {/* Nav Links */}
        <div className="hidden lg:flex list-none items-center">{navLinks}</div>
        <button
          className="lg:hidden text-white z-50"
          onClick={handleSetIsMenuOpen}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <IconX className="min-w-10 min-h-10" />
          ) : (
            <IconMenuDeep className="min-w-10 min-h-10" />
          )}
        </button>

        {/* Mobile slider menu */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-screen bg-neutral-900 shadow-xl 
            transform transition-transform duration-300 ease-in-out lg:hidden
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            pt-20
          `}
        >
          <ul className="flex flex-col items-end mr-5 space-y-6 p-8 list-none">
            {navLinks}
          </ul>
        </div>
      </nav>
    </header>
  );
}
