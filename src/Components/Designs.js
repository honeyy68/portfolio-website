import React from 'react';
import projectData from "./ProjectData";
import WorkCard from "./WorkCard";

const designs = projectData.filter((project) => project.category === "graphics");

const Designs = () => {
  return (
    <div>
      <div className='project-container'>
      {designs.map((project) => (
        <WorkCard key={project.id} imgsrc={project.imgsrc} title={project.title} text={project.text} view={project.url} />
      ))}
      </div>
    </div>
  );
};

export default Designs;

