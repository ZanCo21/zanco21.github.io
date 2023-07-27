import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='w-full h-profile  bg-gradient-to-t from-customDarkBlue via-customTeal to-customBlue'>
        <div className='container mx-auto pt-16'>
          <div className='flex'>
            <div>
            <img src="/profile.png" className=' w-[660px]' alt="Picture of the author" /> 
            </div>
            <div className='flex-row ps-8 pt-4'>
              <p className='text-cyan-50 font-bold'>Portofolio</p>
              <p className='text-cyan-50 text-[82px] font-bold my-[-1rem]'>Fauzan Alghifari</p>
              <p className='text-cyan-50 pt-4 w-9/12 text-justify font-normal'>Fauzan is a web developer with several years of experience in developing functional websites. He is also open to learning new frameworks and technologies. Fauzan is accustomed to working in development teams and possesses strong communication skills.</p>
              <div className='flex pt-5 items-center'>
                <img src="/small-profile.jpg" className='w-[31px] rounded-[14px]' alt="" />
                <p className='ps-3 text-cyan-50 font-bold'>ZanCo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto w-auto bg-[#121212]'>

        <div className='flex items-center justify-between ps-8 pt-8'>
          <div className='flex items-center'>
            <img className='h-7' src="/About.png" alt="About" />
            <img className='ms-8' src="/contact.png" alt="Contact" />
          </div>
    
          <p className='pe-24'>Custom Order</p>
        </div>
        
        {/* porto */}
        <div className="container p-2 sm:p-8 ">
          <div className="flex flex-col">
            <div className="flex text-left border-b border-gray-500">
              <div className="opacity-50 px-2 ms-2 py-3 sm:p-3"><p>#</p></div>
              <div className="opacity-50 flex-initial w-1/3 px-2 py-3 sm:p-3"><p>Title</p></div>
              <div className="opacity-50 flex-1 px-2 sm:p-3"><p>Short Description</p></div>
              <div className="opacity-50 flex-initial w-[16%] px-2 py-3 sm:p-3"><p>Date</p></div>
              <div className=" py-3 sm:p-3 sm:block"><img src="/link-icon.png"/></div>
            </div>
            
            <div className="flex items-center mt-3 cursor-pointer">
              <div className="px-2 ms-2 py-3 sm:p-3">
                <p>1</p>
              </div>
              <div className="flex-initial w-1/3 items-center flex px-2 py-3  sm:p-3">
                <img src="/starsel.png" alt="" className='w-20 h-10' />
                <div className='ps-4'>
                <p className='font-bold'>StarSel Website and mobile.</p>
                <p className='text-sm opacity-50'>ZanCo.</p>
                </div>
              </div>
              <div className="flex-1 opacity-50 ms-4 line-clamp-1 hover:line-clamp-none">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis sit quaerat earum vitae sint culpa qui minima fugiat recusandae.</p>
              </div>
              <div className="opacity-50 flex-initial w-[16%] px-2 py-3 sm:p-3">
                <p>jane 21, 2023</p>
              </div>
              <div className="px-2 py-3 sm:p-3 sm:block dark:text-gray-400">
              <img src="/github.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}