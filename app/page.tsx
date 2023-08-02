import './globals.css'
import React from 'react';
import Image from 'next/image';
import ProjectList from '../public/js/main';
import { projects } from '../public/js/data'; 

export default function Home() {
  return (
    <>
      <div className='w-full h-profile  bg-gradient-to-t from-customDarkBlue via-customTeal to-customBlue'>
        <div className='container mx-auto lg:pt-16 pt-6'>
          <div className='lg:flex flex-row'>
            <div>
            <img src="/profile.png" className='lg:w-[660px] mx-auto w-[179px] lg:rounded-none rounded-lg' alt="Picture of the author" /> 
            </div>
            <div className='flex-row ps-8 lg:pt-0 pt-4'>
              <p className='font-bold lg:text-[16px] text-[11px]'>Portofolio</p>
              <p className='lg:text-[82px] font-bold lg:my-[-1rem] sm:text-[50px] mb-[-1rem]'>Fauzan Alghifari</p>
              <p className='pt-4 lg:w-9/12 text-justify font-normal lg:text-[16px] sm:text-[11px] text-[10px] w-11/12'>Welcome to my portfolio! Thank you for visiting this page. I am delighted to share my works and experiences here.If you are interested in collaborating, discussing, or have any questions, please feel free to reach out to me via email.Thank you again for your visit, and I hope you have a wonderful day!</p>
              <div className='flex lg:pt-5 pt-3 pb-2 items-center'>
                <img src="/small-profile.jpg" className='lg:w-[31px] rounded-[14px] w-[25px]' alt="" />
                <p className='lg:ps-3 font-bold ps-1 lg:text-[16px] text-[11px]'>ZanCo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto w-auto bg-[#121212]'>
        <div className='flex items-center justify-between ps-8 lg:pt-8 lg:pb-0 pt-6 pb-4'>
          <div className='flex items-center'>
            <img className='lg:h-7 lg:w-[34px] w-[22px]' src="/About.png" alt="About" />
            <img className='lg:ms-8 ms-3 w-[25px] lg:w-[39px]' src="/contact.png" alt="Contact" />
          </div>
    
          {/* <p className='lg:pe-24 pe-4 md:pe-[60px] lg:text-[16px] text-[12px]'>Custom Order</p> */}
        </div>
        
        {/* porto */}
        <div  className="container p-2 sm:p-8 ">
        <div className="flex flex-col">
          <div className="flex text-left border-b border-gray-500">
            <div className="opacity-50 px-2 ms-2 py-3 sm:p-3"><p>#</p></div>
            <div className="opacity-50 lg:flex-initial flex-1 w-1/3 px-2 py-3 sm:p-3"><p>Title</p></div>
            <div className="opacity-50 flex-1 px-2 sm:p-3" id='myDesc'><p>Short Description</p></div>
            <div className="opacity-50 lg:flex-initial w-[16%] px-2 py-3 sm:p-3" id="myDesc"><p>Date</p></div>
            <div className="px-2 py-3 sm:p-3 sm:block"><img src="/link-icon.png"/></div>
          </div>
          
          <div id='all-projects' className='lg:flex-col'>
          <div className=" items-center mt-3 cursor-pointer hidden">
              <div className="px-2 ms-2 py-3 sm:p-3">
                <p>1</p>
              </div>
              <div className="lg:flex-initial flex-1 w-1/3 items-center flex px-2 py-3  sm:p-3">
                <img src="/starsel.png" alt="" className='w-20 h-10' />
                <div className='ps-4'>
                <p className='font-bold lg:text-[16px] text-[12px]'>StarSel Website and mobile.</p>
                <p className='lg:text-sm opacity-50 text-[10px]'>ZanCo.</p>
                </div>
              </div>
              <div className="flex-1 opacity-50 ms-4 lg:line-clamp-1 lg:hover:line-clamp-none" id="myDesc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis sit quaerat earum vitae sint culpa qui minima fugiat recusandae.</p>
              </div>
              <div className="opacity-50 flex-initial w-[16%] px-2 py-3 sm:p-3" id='myDesc'>
                <p>jane 21, 2023</p>
              </div>
              <div className="px-2 py-3 sm:p-3 sm:block dark:text-gray-400">
              <img src="/github.png" alt="" />
              </div>
            </div>
          <ProjectList projects={projects} />
          </div>

            
        </div>
        </div>
      </div>
    </>
  )
}
