import React from "react";
import Navbar from "../../components/Navbar";
import {useNavigate} from 'react-router-dom'
import DocumentTitle from '../DocumentTitle';

const Home = () => {
  DocumentTitle("rani ✦ designer developer")
  const navigate = useNavigate()
  const handaleContact = () => {
   navigate('./contact')
  }
  return (
    <Navbar>
      <div className=" dark:bg-gray-900">
        <div className="container mx-auto py-10">
          <div className="md:flex items-center gap-4">
              <div className="w-2/5 mx-auto">
                <img src="./images/hero.png" alt="" className="w-60 h-70 "/>
              </div>
              <div className="w-3/4 mx-auto">
                <h1 className="text-3xl font-bold text-color_black mb-2 dark:text-white">
                  <img src="./images/hi.png" alt="" className="h-10 mb-1 animate__animated animate__swing animate__infinite	infinite animate__delay-2s "/>
                  Hello, I Am Rani</h1>
                <h1 className="text-5xl font-bold text-color_purple dark:text-white md:ml-4">Front End Developer</h1>
                <p className="py-5 leading-relaxed text-color_black dark:text-gray-100 text-[18px]">A front-end developer based in Pune who developer modern, reactive, and user-friendly web applications using the latest technologies currently. I believe a perfect blend of UI architecture is one, where the goals and needs are accounted for in elegant, efficient, and robust design of the UI.</p>
  
                <div className="py-5">
                   <div className="flex items-center justify-start gap-4">
                   <button className="btn animate__animated animate__slideInUp" onClick={handaleContact}>Hire Me <i className="ri-hand ml-1 text-[16px]"></i></button>
                   <button className="btn animate__animated animate__slideInUp">Resume Download <i className="ri-download-2-line ml-1 text-[16px]"></i></button>
                   </div>
                </div>
              </div>
            </div>

            <div className="md:flex items-center gap-4 pt-20">
              <div className="w-3/4 mx-auto">
                <p className="py-5 leading-relaxed text-color_black dark:text-gray-100 text-[18px]">During these years of Frontend Development Experience, I have developed a strong problem-solving and critical thinking skills, and am able to quickly adapt to new technologies and methods of working. Given are some skill-set that I have learned and am still actively learning as days goes by.</p>
                <p className="dark:text-gray-100 leading-relaxed text-color_black text-[18px]">I develop modern, reactive, and user-friendly web applications using the latest technologies currently. Believe a perfect blend of user inteface architecture is one, where the goals and needs are accounted for in an elegant, efficient, and robust design of the user interface.</p>
               
              </div>
              <div className="w-2/5 mx-auto">
                 <div className="w-40 h-48 mx-auto flex-col items-center bg-color_purple dark:bg-slate-700 rounded-md text-center p-5">
                   <div  className="w-30 h-36 place-items-center bg-white dark:bg-black rounded-md p-2">
                     <h1 className="text-7xl font-bold text-color_purple dark:text-white">3<span className="text-3xl">.5</span></h1>
                     <p className="text-sm mt-2 dark:text-white">Years Of Experience</p>
                   </div>
                 </div>
              </div>
            </div> 
          </div>
        </div>
    </Navbar>
  );
};

export default Home;
