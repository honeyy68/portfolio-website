import React from 'react';
import projectData from "./ProjectData";
import WorkCard from './WorkCard';
import "./WorkCardStyle.css";
const AllProjects = () => {
  return (
    <div>
    <div className='project-container'>
      {projectData.map((project) => (
        <WorkCard key={project.id} imgsrc={project.imgsrc} title={project.title} text={project.text} view={project.url} />
      ))}
      </div>
    </div>
  );
};

export default AllProjects;