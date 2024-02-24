"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "DivitUp",
    description: "A system for task management to improve collaboration and productivity in event organization or similar activities",
    image: "/images/projects/divitup.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Haque360/DivItUp",
  },
  {
    id: 2,
    title: "UIURAAS",
    description: "A platform aimed at streamlining access to faculty research opportunities and publications for better student and faculty interaction.",
    image: "/images/projects/uiuraas.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Haque360/UIURAAS",
  },
  {
    id: 3,
    title: "DivitUp",
    description: "A system for task management to improve collaboration and productivity in event organization or similar activities",
    image: "/images/projects/divitup.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Haque360/DivItUp",
  },
  {
    id: 4,
    title: "UIURAAS",
    description: "A platform aimed at streamlining access to faculty research opportunities and publications for better student and faculty interaction.",
    image: "/images/projects/uiuraas.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Haque360/UIURAAS",
  },
 
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          name="UI/UX designs"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl="/"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
