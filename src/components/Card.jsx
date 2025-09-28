import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export default function Card({ project, isLeft }) {
  return (
    <div
      className={`flex gap-10 ${
        isLeft ? "flex-row-reverse items-center" : "items-center"
      }`}
    >
      <Image
        src={project.imageUrl}
        width={580}
        height={362}
        alt="A breathtaking image of Project"
      />
      <div className={`flex flex-col max-w-120 ${isLeft ? "items-end" : ""}`}>
        <h1 className="mb-6 font-extrabold text-[24px]">{project.title}</h1>
        <div
          className={`mb-6 bg-teal-800 p-4 rounded-md ${
            isLeft ? "text-end" : ""
          }`}
        >
          <p>{project.description}</p>
        </div>
        <div className="flex gap-5 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-[0.06rem] text-sm border-2 border-teal-800 hover:bg-teal-800 transition-all duration-250 ease-out"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a href={project.githubUrl}>
            <IconBrandGithub className="transition-all ease-out duration-200 delay-80 hover:text-[#63FFD9]" />
          </a>
          <a href={project.liveUrl}>
            <IconExternalLink className="transition-all ease-out duration-200 delay-80 hover:text-[#63FFD9]" />
          </a>
        </div>
      </div>
    </div>
  );
}
