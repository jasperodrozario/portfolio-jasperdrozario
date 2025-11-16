// component imports
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
import FeaturedProjects from "@/components/FeaturedProjects";
import ToolCard from "@/components/utils/ToolCard";
import Tool from "@/components/utils/Tool";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import ContactForm from "@/components/forms/ContactForm";
import ContactCard from "@/components/utils/ContactCard";

// data imports
import { frontend, backend, others } from "@/data/tools";
import { education } from "@/data/education";
import { featuredProjects } from "@/data/projects";
import { contactDetails } from "@/data/contactDetails";

// graphic imports
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
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandGithub,
  IconExplicit,
  IconBrandBootstrap,
  IconBrandMeetup,
  IconMathGreater,
  IconShadow,
} from "@tabler/icons-react";
import LottieAnimation from "@/components/LottieAnimation";

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
      case "Bootstrap":
        return <IconBrandBootstrap className="min-h-6 min-w-6" />;
      case "Material UI":
        return <IconBrandMeetup className="min-h-6 min-w-6" />;
      case "Aceternity":
        return <IconMathGreater className="min-h-6 min-w-6" />;
      case "Shadcn":
        return <IconShadow className="min-h-6 min-w-6" />;
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
      case "Express.js":
        return <IconExplicit className="min-h-6 min-w-6" />;
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
      case "MySQL":
        return <IconBrandMysql className="min-h-6 min-w-6" />;
      case "Firebase":
        return <IconBrandFirebase className="min-h-6 min-w-6" />;
      case "Email":
        return <IconMail />;
      case "LinkedIn":
        return <IconBrandLinkedin />;
      case "Github":
        return <IconBrandGithub />;
      case "Location":
        return <IconMapPin />;
      case "Time":
        return <IconClock />;
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
        <Hero />
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col mb-50 max-w-full items-center"
      >
        <div className="">
          <div className="flex gap-10 justify-content max-w-250">
            <div className="mb-40">
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
              <p className="">
                Hello! I'm a motivated CSE student from Independent University,
                Bangladesh (IUB), with all coursework now complete (only thesis
                remaining). I'm possessing a strong foundation in programming
                and problem-solving, passionate about web development and AI integration.
                I am a fast learner who thrives in collaborative
                environments. I am seeking to apply my skills to contribute to
                challenging projects in a professional environment.
              </p>
            </div>
            <LottieAnimation
              className={" rounded-xl bg-white"}
              fileName={"Traveler.json"}
              width={1600}
              height={210}
            />
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
      <section id="projects" className="mb-50">
        <div className="">
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
          <FeaturedProjects>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isLeft={!(index % 2 === 0)}
              />
            ))}
          </FeaturedProjects>
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
                  If you want me to work with you just send me an email. I'm
                  always interested in new opportunities and exciting projects.
                </p>
              </div>

              <div className="space-y-5 grid grid-cols-3 lg:grid-cols-1">
                {contactDetails.map((item, index) => {
                  return (
                    <ContactCard
                      key={index}
                      link={item.link}
                      heading={item.heading}
                      body={item.body}
                    >
                      <div className="w-12 h-12 bg-[#63FFD9]/10 rounded-lg flex items-center justify-center">
                        {iconSelector(item.icon)}
                      </div>
                    </ContactCard>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
