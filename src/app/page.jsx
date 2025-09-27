import Image from "next/image";
import Button from "@/components/utils/button";
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/data/education";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20">
      {/* Hero Section */}
      <section id="hero" className="mb-60 w-250 max-w-300">
        <div className="flex gap-30">
          {/* Intro */}
          <div className="max-w-145">
            <h6 className="text-lg font-thin text-[#63FFD9]">
              Hello, my name is
            </h6>
            <h1 className="mt-2 font-extrabold text-[60px]">Jasper Oliver</h1>
            <h1 className="mb-5 font-extrabold text-[60px]">D Rozario.</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor, ducimus saepe voluptatum laboriosam assumenda molestias
              voluptatem culpa. Qui, reprehenderit iste quo debitis unde officia
              culpa quibusdam voluptates voluptatibus necessitatibus? Quae ea
              blanditiis nesciunt, eos autem nisi modi hic voluptas numquam
              laudantium, iusto earum maiores aut quidem dignissimos repudiandae
              odit et accusantium nam magni quis! Quibusdam illum magnam dolorum
              officiis.
            </p>
          </div>

          {/* PFP */}
          <div className="flex items-center">
            <div
              className="
              relative
              after:content-['']
              after:absolute
              after:w-full
              after:h-full
              after:top-3
              after:left-3
              after:rounded-sm
              after:border-2
              after:border-[#63FFD9]
              after:-z-10
              after:transition-all
              hover:after:translate-[0.22em]
            "
            >
              <Image
                src={"/images/jasper_pfp.jpg"}
                alt="A nice photo of me :D"
                width={300}
                height={300}
                className="rounded-sm object-cover transition-all overlay-[#63FFD9] hover:-translate-[0.22em]"
              />
            </div>
          </div>
        </div>
        <Button className={"my-10"}>Check out my work!</Button>
      </section>

      {/* About Me Section */}
      <section id="about" className="mb-50 w-250 max-w-300">
        <h1
          className="
                relative
                font-extrabold
                text-[26px]
                mb-5
                before:absolute
                before:content-[''] 
                before:w-8
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
              "
        >
          About Me
        </h1>
        <div className="grid grid-cols-3 gap-5 mb-40">
          <p className="col-span-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            temporibus omnis tenetur veniam. Qui suscipit non perferendis,
            distinctio odit est totam sint at, quisquam aspernatur dolor
            voluptatem quam voluptates animi. Porro maxime illo, veniam
            perspiciatis saepe totam nulla ut esse expedita, ipsum explicabo a
            itaque nesciunt tenetur magni aliquid minus deleniti, aperiam quis
            culpa incidunt nobis nemo reprehenderit! Dolorum, consequatur.
          </p>
          <div className="bg-white"></div>
        </div>

        <Timeline title={"Education Timeline"}>
          {education.map((item, index) => (
            <TimelineItem key={index} data={item} isLeft={index % 2 === 0} />
          ))}
        </Timeline>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-50">
        <h1
          className="
                relative
                font-extrabold
                text-[26px]
                mb-5
                before:absolute
                before:content-[''] 
                before:w-8
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
              "
        >
          Skills
        </h1>
        <div></div>
      </section>
      <section id="projects">
        <h1
          className="
                relative
                font-extrabold
                text-[26px]
                mb-5
                before:absolute
                before:content-[''] 
                before:w-8
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
              "
        >
          Featured Projects
        </h1>
        {/* <FeaturedProjects /> */}
      </section>
    </main>
  );
}
