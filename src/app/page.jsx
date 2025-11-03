import Image from "next/image";
import Button from "@/components/utils/button";
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/data/education";
import FeaturedProjects from "@/components/FeaturedProjects";
import ToolCard from "@/components/utils/ToolCard";
import { frontend, backend, others } from "@/data/tools";
import Tool from "@/components/utils/Tool";
import {
  IconBrandFirebase,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconCloud,
  IconPhotoQuestion,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandDocker,
  IconBrandPython,
  IconBrandDjango,
  IconBrandMysql,
  IconCoffee,
} from "@tabler/icons-react";

export default function Home() {
  const iconSelector = (tool) => {
    switch (tool) {
      case "TypeScript":
        return <IconBrandTypescript className="min-h-6 min-w-6" />;
      case "JavaScript (ES6+)":
        return <IconBrandJavascript className="min-h-6 min-w-6" />;
      case "React.js":
        return <IconBrandReact className="min-h-6 min-w-6" />;
      case "Next.js":
        return <IconBrandNextjs className="min-h-6 min-w-6" />;
      case "Tailwind CSS":
        return <IconBrandTailwind className="min-h-6 min-w-6" />;
      case "Node.js":
        return <IconBrandNodejs className="min-h-6 min-w-6" />;
      case "MongoDB":
        return <IconBrandMongodb className="min-h-6 min-w-6" />;
      case "InfluxDB":
        return <IconDatabase className="min-h-6 min-w-6" />;
      case "Cloudinary":
        return <IconCloud className="min-h-6 min-w-6" />;
      case "Firebase":
        return <IconBrandFirebase className="min-h-6 min-w-6" />;
      case "Express":
        return <IconBrandExpressjs className="min-h-6 min-w-6" />;
      case "Git":
        return <IconBrandGit className="min-h-6 min-w-6" />;
      case "Docker":
        return <IconBrandDocker className="min-h-6 min-w-6" />;
      case "Python":
        return <IconBrandPython className="min-h-6 min-w-6" />;
      case "Java":
        return <IconCoffee className="min-h-6 min-w-6" />;
      case "Django":
        return <IconBrandDjango className="min-h-6 min-w-6" />;
      case "SQL":
        return <IconBrandMysql className="min-h-6 min-w-6" />;
      case "Firebase":
        return <IconBrandFirebase className="min-h-6 min-w-6" />;
      default:
        return <IconPhotoQuestion className="min-h-6 min-w-6" />;
    }
  };

  return (
    <main className="px-35 flex flex-col items-center">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col max-w-full justify-center mb-50 min-h-[calc(100vh-100px)]"
      >
        <div className="lg:flex gap-30 max-w-250">
          {/* Intro */}
          <div className="max-w-145 mb-7 lg:mb-0 ">
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
              after:duration-220
            "
            >
              <Image
                src={"/images/jasper_pfp.jpg"}
                alt="A nice photo of me :D"
                width={300}
                height={300}
                className="min-w-60 rounded-sm object-cover transition-all duration-220 overlay-[#63FFD9] hover:-translate-[0.22em]"
              />
            </div>
          </div>
        </div>
        <Button className={"w-50 h-15 my-10"}>Check out my work!</Button>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col mb-50 max-w-full items-center"
      >
        <div className="max-w-250">
          <h1
            className="
                relative
                inline-block
                font-extrabold
                text-[26px]
                mb-13
                hover:text-[#63FFD9]
                before:absolute
                before:content-[''] 
                before:w-8
                hover:before:w-full
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
                before:transition-all
                before:ease-out
                before:duration-220
              "
          >
            About Me
          </h1>
          <div className="flex gap-5 mb-40">
            <p className="w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              temporibus omnis tenetur veniam. Qui suscipit non perferendis,
              distinctio odit est totam sint at, quisquam aspernatur dolor
              voluptatem quam voluptates animi. Porro maxime illo, veniam
              perspiciatis saepe totam nulla ut esse expedita, ipsum explicabo a
              itaque nesciunt tenetur magni aliquid minus deleniti, aperiam quis
              culpa incidunt nobis nemo reprehenderit! Dolorum, consequatur.
            </p>
            <div className="bg-white w-1/3"></div>
          </div>

          <Timeline title={"Education Timeline"}>
            {education.map((item, index) => (
              <TimelineItem key={index} data={item} isLeft={index % 2 === 0} />
            ))}
          </Timeline>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-50 max-w-full">
        <div>
          <h1
            className="
                relative
                inline-block
                font-extrabold
                text-[26px]
                mb-13
                hover:text-[#63FFD9]
                before:absolute
                before:content-['']
                before:w-8
                hover:before:w-full
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
                before:transition-all
                before:ease-out
                before:duration-220
              "
          >
            Skills
          </h1>
          <div className="grid grid-cols-1 lg:flex gap-12">
            {/* Frontend */}
            <ToolCard skill={"Frontend"}>
              {frontend.map((tool) => (
                <Tool key={tool.id}>
                  {iconSelector(tool.tool)}
                  <p>{tool.tool}</p>
                </Tool>
              ))}
            </ToolCard>
            {/* Backend */}
            <ToolCard skill={"Backend"}>
              {backend.map((tool) => (
                <Tool key={tool.id}>
                  {iconSelector(tool.tool)}
                  <p>{tool.tool}</p>
                </Tool>
              ))}
            </ToolCard>
            {/* Others */}
            <ToolCard skill={"Others"}>
              {others.map((tool) => (
                <Tool key={tool.id}>
                  {iconSelector(tool.tool)}
                  <p>{tool.tool}</p>
                </Tool>
              ))}
            </ToolCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-50 max-w-full">
        <div className="max-w-250">
          <h1
            className="
                relative
                inline-block
                font-extrabold
                text-[26px]
                mb-13
                hover:text-[#63FFD9]
                before:absolute
                before:content-[''] 
                before:w-8
                hover:before:w-full
                before:bottom-[-3px]
                before:h-[2px]
                before:bg-[#63FFD9]
                before:transition-all
                before:ease-out
                before:duration-220
              "
          >
            Featured Projects
          </h1>
          <FeaturedProjects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-50 max-w-full">
        <div className="max-w-250">
          <h1 className="text-center font-extrabold text-5xl mb-15">
            Get in Touch
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-250 max-w-300">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#63FFD9]">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-6">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-5 grid grid-cols-3 lg:grid-cols-1">
                <a
                  className="w-2/3"
                  href="https://github.com/jasperodrozario"
                  target="_blank"
                >
                  <div className="flex items-center space-x-4 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
                    <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 group-hover:text-[#63FFD9]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-[#63FFD9]">
                        Github
                      </h3>
                      <p className="text-gray-400">jasperodrozario</p>
                    </div>
                  </div>
                </a>

                <a
                  className="w-2/3"
                  href="https://www.linkedin.com/in/jasper-oliver-d-rozario/"
                  target="_blank"
                >
                  <div className="flex items-center space-x-4 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
                    <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 group-hover:text-[#63FFD9]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                        />
                        <rect
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                        />
                        <circle
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          cx="4"
                          cy="4"
                          r="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-[#63FFD9]">
                        LinkedIn
                      </h3>
                      <p className="text-gray-400">Jasper Oliver D Rozario</p>
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 w-2/3 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
                  <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 group-hover:text-[#63FFD9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-[#63FFD9]">
                      Email
                    </h3>
                    <p className="text-gray-400">jasper.odrozario@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 w-2/3 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
                  <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 group-hover:text-[#63FFD9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-[#63FFD9]">
                      Location
                    </h3>
                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 w-2/3 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
                  <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 group-hover:text-[#63FFD9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-[#63FFD9]">
                      Response Time
                    </h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-6 text-[#63FFD9]">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
