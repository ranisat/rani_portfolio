import React from 'react'
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import DocumentTitle from '../DocumentTitle';

const Skills = () => {
  DocumentTitle('tech ✦ rani')
  const tech = [
    {
      img:'./images/html.png',
    },
    {
      img:'./images/css.png',
    },
    {
      img:'./images/bootstrap.png',
    },
    {
      img:'./images/react.png',
    },
    {
      img:'./images/git.png',
    },
    {
      img:'./images/vs.png',
    },
    {
      img:'./images/figma.png',
    },
    {
      img:'./images/photoshop.png',
    },
    {
      img:'./images/canva.png',
    }
  ]
  return (
      <Navbar>
      <div className="container py-2 mx-auto animate__animated animate__fadeInLeftBig  animate__slow">
        <div>
          <PageHeader headerText="Tech" icon="ww" />
        </div>
        <div className='container py-10'>
           <div className='w-6/12  mx-auto grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2  gap-3'>
            {
              tech.map((data, index)=>(
                <div key={index} className='my-4 group relative'>
                <img src={data.img} alt="" className='h-[80px] m-auto mb-2 select-none group-hover:scale-[1.1] transition-all  tech duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl'/> 
               </div>
              ))
            }
         
           </div>
        </div>
     </div>
    </Navbar>
  )
}

export default Skills
