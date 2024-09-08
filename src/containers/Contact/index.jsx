import React from 'react'
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";

const Contact = () => {
  return (
    <Navbar>
    <div className="container py-2 mx-auto animate__animated animate__fadeInLeftBig ">
      <div>
        <PageHeader headerText="Contact Me" icon="ww" />
      </div>
      <div className='container py-10'>
        <div className='md:w-3/4 border shadow-md bg-white m-auto rounded-md p-6'>
          <form action="">
             <div className='md:flex  items-center justify-between gap-3'>
             <div className='md:w-1/2'>
              <input type="text" placeholder='First Name' className='inputStyle'/>
           </div>
           <div className='md:w-1/2'>
              <input type="text" placeholder='Last Name' className='inputStyle'/>
           </div>
             </div>
             <div className='md:flex items-center justify-between gap-3'>
             <div className='md:w-1/2'>
              <input type="text" placeholder='Email' className='inputStyle'/>
           </div>
           <div className='md:w-1/2'>
              <input type="text" placeholder='Mobile' className='inputStyle'/>
           </div>
             </div>
             <div className='w-full'>
               <textarea name="" id="" rows={3} placeholder='message' className='inputStyle'></textarea>
           </div>
           <div className='text-center'>
             <button className='rounded shadow-sm px-4 py-2 bg-color_purple text-white hover:bg-white hover:text-color_purple'>Submit</button>
           </div>
          </form>
        </div>
      </div>
   </div>
  </Navbar>
  )
}

export default Contact
