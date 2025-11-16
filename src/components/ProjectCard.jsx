import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export default function ProjectCard({ project, isLeft }) {
  return (
    <div
      className={`flex gap-10 ${
        isLeft ? "flex-row-reverse items-center" : "items-center"
      }`}
    >
      <a href={project.liveUrl} target="_blank">
        <Image
          src={project.imageUrl}
          width={580}
          height={362}
          alt="A breathtaking image of Project"
          className="
          rounded-xl
          object-cover
          rounded-lg 
          cursor-pointer
          transition-transform 
          duration-300 
          ease-in-out
          hover:scale-103
          hover:shadow-[0_0_15px_rgba(64,224,208,0.5)]
        "
        />
      </a>
      <div className={`flex flex-col max-w-120 ${isLeft ? "items-end" : ""}`}>
        <h1 className="mb-6 font-extrabold text-[24px]">{project.title}</h1>
        <div
          className={`mb-6 bg-teal-800 p-4 rounded-md ${
            isLeft ? "text-end" : ""
          }`}
        >
          <p>{project.description}</p>
        </div>
        <div className="flex gap-4 flex-wrap mb-6">
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
          <a href={project.githubUrl} target="_blank">
            <IconBrandGithub className="transition-all ease-out duration-200 delay-80 hover:text-[#63FFD9]" />
          </a>
          <a href={project.liveUrl} target="_blank">
            <IconExternalLink className="transition-all ease-out duration-200 delay-80 hover:text-[#63FFD9]" />
          </a>
        </div>
      </div>
    </div>
  );
}
