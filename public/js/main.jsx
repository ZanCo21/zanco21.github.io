import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, i) => (
        <div className="flex items-center mt-3 cursor-pointer" key={i}>
          <div className="px-2 ms-2 py-3 sm:p-3">
            <p>{i + 1}</p>
          </div>  
          <div className="flex-initial w-1/3 items-center flex px-2 py-3 sm:p-3">
            <img src={project.image} alt="" className="w-20 h-10" />
            <div className="ps-4">
              <p className="font-bold">{project.title}</p>
              <p className="text-sm opacity-50">ZanCo.</p>
            </div>  
          </div>
          <div className="flex-1 opacity-50 ms-4 line-clamp-1 hover:line-clamp-none">
            <p>{project.excerpt}</p>
          </div>
          <div className="opacity-50 flex-initial w-[16%] px-2 py-3 sm:p-3">
            <p>June 21, 2023</p>
          </div>
          <div className="px-2 py-3 sm:p-3 sm:block dark:text-gray-400">
            <img src="/github.png" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
