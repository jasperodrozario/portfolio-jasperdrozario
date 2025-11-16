"use client";

import ProfilePicture from "@/components/ProfilePicture";
import Button from "@/components/utils/button";

export default function Hero() {
  const checkoutWork = () => {
    window.open("#projects", "_self");
  };
  return (
    <>
      <div className="lg:flex gap-30 max-w-250">
        {/* Intro */}
        <div className="max-w-145 mb-7 lg:mb-0 ">
          <h6 className="text-lg font-thin text-[#63FFD9]">
            Hello, my name is
          </h6>
          <h1 className="mt-2 font-extrabold text-[60px]">Jasper Oliver</h1>
          <h1 className="mb-5 font-extrabold text-[60px]">D Rozario.</h1>
          <p className="">
            I'm a passionate software developer, specializing in frontend
            development. Currently, I'm eagerly seeking to apply my skills to
            contribute to challenging projects in a professional environment.
          </p>
        </div>

        {/* PFP */}
        <ProfilePicture />
      </div>
      <Button onClick={checkoutWork} className={"w-50 h-15 my-10"}>
        Check out my work!
      </Button>
    </>
  );
}
