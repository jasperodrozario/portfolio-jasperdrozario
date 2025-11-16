"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieAnimation({
  fileName,
  width,
  height,
  className,
}) {
  const path = `/animations/${fileName}`;

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  return (
    <Lottie
      className={className}
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: width, height: height }}
    />
  );
}
