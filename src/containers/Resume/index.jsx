import React from 'react'
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import DocumentTitle from '../DocumentTitle';
const Resume = () => {
  DocumentTitle('resume ✦ rani')
  return (
    <Navbar>
    <div className="container py-2 mx-auto animate__animated animate__fadeInLeftBig  animate__slow">
      <div>
        <PageHeader headerText="Resume" icon="ww" />
      </div>
      <div className='container py-10'>
        <div className='grid md:grid-cols-2'>
          <div className='border-r-2 border-color_purple dark:border-gray-300 px-3'>
            <div className='flex items-center justify-center pb-4'>
              <h1 className='text-xl font-semibold border-b-2 border-color_purple dark:border-gray-300 text-color_purple dark:text-white'> <i className="ri-macbook-line mr-1"></i> Experience</h1>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3 shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>Online Munim</h1>
               <h3 className='dark:text-gray-300 mb-1'>Pune</h3>
               <h3 className='dark:text-gray-300'>2022 - Present</h3>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3 shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>Touchmedia Ads </h1>
               <h3 className='dark:text-gray-300 mb-1'>Pune</h3>
               <h3 className='dark:text-gray-300'>Feb-2020</h3>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3 shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>Keencow Software Pvt Ltd</h1>
               <h3 className='dark:text-gray-300 mb-1'>Pune</h3>
               <h3 className='dark:text-gray-300'>May-2019</h3>
            </div>
          </div>
          <div className='px-3'>
          <div className='flex items-center justify-center pb-4'>
              <h1 className='text-xl font-semibold border-b-2 border-color_purple text-color_purple dark:text-white dark:border-gray-200'> <i className="ri-graduation-cap-line mr-1"></i> Education</h1>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3  shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>Bachelor of Arts (B.A)</h1>
               <h3 className='dark:text-gray-300 mb-1'>Yashwantrao chavan pune
               university </h3>
               <h3 className='dark:text-gray-300'>2014-2018 </h3>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3  shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>H.S.C </h1>
               <h3 className='dark:text-gray-300 mb-1'>MSBTE</h3>
               <h3 className='dark:text-gray-300'>2010</h3>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 border-gray-300 dark:border-gray-200 rounded-lg my-3  shadow-md'>
               <h1 className='text-xl mb-2 dark:text-white'>S.S.C</h1>
               <h3 className='dark:text-gray-300 mb-1'>MSBTE</h3>
               <h3 className='dark:text-gray-300'>2008</h3>
            </div>
          </div>
        </div>
      </div>
   </div>
  </Navbar>
  )
}

export default Resume
