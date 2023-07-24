import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <div className='w-full h-profile  bg-gradient-to-t from-customDarkBlue via-customTeal to-customBlue'>
          <div className='container mx-auto pt-16'>
              <div className='flex'>
                  <img src="/profile.png" className='h-72' alt="Picture of the author" /> 
                  <div className='flex-row ps-8'>
                    <p className='text-cyan-50 font-bold'>in development</p>
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

        <div className='w-full h-80 bg-[#121212]'>
          <div className='flex items-center ps-8 pt-8'>
            <img className='h-7' src="/About.png" alt="About" />
            <button>
              <img className='ps-9' src="/contact.png" alt="Contact" />
            </button>
          </div>

          <div className='ps-8 pt-14'>
          </div>
        </div>

        
      </div>

      </>
  )
}
