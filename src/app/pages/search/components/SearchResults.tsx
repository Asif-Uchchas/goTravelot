"use client";
import React, { useState } from "react";
import SearchTag from "./SearchTags";
import SearchCard from "./SearchCards";

interface Project {
  id: number;
  name: string;
  image: string;
  tag: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Yelinberg",
    image: "../rec.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    name: "Yelinberg",
    image: "../rec.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    name: "Yelinberg",
    image: "../rec.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    name: "Yelinberg",
    image: "../rec.jpg",
    tag: ["All", "Web"],
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
