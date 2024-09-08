import React from "react";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import DocumentTitle from '../DocumentTitle';

const About = () => {
  DocumentTitle("about ✦ rani")
  return (
    <Navbar>
      <div className="container py-2 mx-auto animate__animated animate__fadeInLeftBig  animate__slow">
        <div>
          <PageHeader headerText="About Me" icon="ww" />
        </div>
        <div className=" dark:bg-gray-900">
          <div className="container mx-auto py-10">
            <div className="md:flex items-center gap-4">
              <div className="w-3/6 mx-auto ">
                <div className="flex">  
                  <img src="./images/about.png" alt="" />
                 
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <div>
                  <h4 className="text-center text-2xl font-bold text-color_black dark:text-white">
                  Little about me. Also, It's not that hard to find me
                  </h4>
                  <p className="py-4 leading-relaxed text-color_black dark:text-gray-100 text-[18px]">
                    Seasoned and Independent Front end developer with 3.5 years
                    of experience in blending the art of design with skill of
                    programming to deliver an immersive and engaging user
                    experience through efficient website development, proactive
                    feature optimization, and relentless debugging. Very
                    passionate about aesthetics and UI design.{" "}
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default About;
