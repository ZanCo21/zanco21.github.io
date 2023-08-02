import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, i) => (
        <div className=" items-center mt-3 cursor-pointer flex">
              <div className="px-2 ms-2 py-3 sm:p-3">
                <p>{ i + 1 }</p>
              </div>
              <div className="lg:flex-initial flex-1 w-1/3 items-center flex px-2 py-3  sm:p-3">
                <img src={project.image} alt="" className='w-20 h-10' />
                <div className='ps-4'>
                <p className='font-bold lg:text-[16px] text-[12px]'>{project.title}</p>
                <p className='lg:text-sm opacity-50 text-[10px]'>ZanCo.</p>
                </div>
              </div>
              <div className="flex-1 opacity-50 ms-4 lg:line-clamp-1 lg:hover:line-clamp-none" id="myDesc">
                <p>{project.excerpt}</p>
              </div>
              <div className="opacity-50 flex-initial w-[16%] px-2 py-3 sm:p-3" id='myDesc'>
                <p>12 jun, 2023</p>
              </div>
              <div className="px-2 py-3 sm:p-3 sm:block dark:text-gray-400">
                <a href={project.github}>
                  <img src="/github.png" alt="" />
                </a>
              </div>
            </div>
      ))}
    </div>
  );
};

export default ProjectList;
