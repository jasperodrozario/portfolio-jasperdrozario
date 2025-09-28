import { featuredProjects } from "@/data/projects";
import Card from "@/components/Card";

export default function FeaturedProject() {
  return (
    <div className="space-y-28">
      {featuredProjects.map((project, index) => (
        <Card key={index} project={project} isLeft={!(index % 2 === 0)} />
      ))}
    </div>
  );
}
