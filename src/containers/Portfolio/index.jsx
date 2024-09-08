import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {Link} from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import DocumentTitle from '../DocumentTitle';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Portfolio = () => {
  DocumentTitle("work ✦ rani")
  const menu = [

    {
      label: "Design",
      value: "design",
    },
    {
      label: "UI/UX",
      value: "ui/ux",
    },
    {
      label: "Logo",
      value: "logo",
    },
  ];

  return (
    <Navbar>
      <div className="container py-2 mx-auto animate__animated animate__fadeInLeftBig  animate__slow">
        <div>
          <PageHeader headerText="Work" icon="ww" />
        </div>
        <div className="container py-10">
          <div className="text-center md:w-3/5 m-auto mb-5">
            <p className="leadding-relaxed dark:text-gray-100 text-[18px]">
              It has been an absolute pleasure to put my heart and soul into
              these projects. While you're here, browse these projects.
            </p>
          </div>

          {/* accordian section */}

          <Tabs id="custom-animation" value="design" className="rounded-lg bg-white dark:bg-slate-800  z-10 relative">
            <TabsHeader className="tabHead w-max m-auto my-10">
              {
                menu.map((data, index)=>(
                  <Tab key={index} value={data.value} className="tab rounded-full p-2">
                <h1 className="cursor-pointer font-semibold">{data.label}</h1>
              </Tab>
                ))
              }  
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel value="design">
                <div className="w-7/5  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                  <div className="w-full overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/school.png" alt="" className="h-40 m-auto" />
                    </div>
                    <div className="bg-white rounded dark:bg-gray-900 p-2 flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black mb-2 dark:text-white">School  </h1>
                      <Link to="https://www.eprashasan.com/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                     
                    </div>
                  </div>
                  <div className="w-full relative rounded-md overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/education.png" alt="" className="h-40 m-auto" />
                    </div>
                    <div className="bg-white rounded p-2 flex items-center dark:bg-gray-900 justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Education Institute  </h1>
                      <Link to="https://alardinstitutes.com/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/ecom.png" alt="" className="h-40 m-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded p-2 flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Ecom </h1>
                      <Link to="https://rajkamaljewellers.in/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/hospital.png" alt="" className="h-40 m-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded p-2 flex items-center justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Hospitals</h1>
                      <Link to="https://nucleusivf.com/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/packers.png" alt="" className="h-40 m-auto"/>
                    </div>
                    <div className="bg-white p-2 dark:bg-gray-900 rounded flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black mb-2 dark:text-white">Packers & Movers</h1>
                      <Link to="https://kalyanimovers.com/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white dark:text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                  </div>
                  <div className="w-full  overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/interior.png" alt="" className="h-40 mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-2 rounded flex items-center  justify-center gap-5">
                      <h1 className="text-xl dark:text-white font-semibold text-black mb-2">Decore </h1>
                      <Link to="https://www.homecreativeinterior.com/" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                  </div>
                </div>
              </TabPanel>
             
            
              <TabPanel value="ui/ux">
                <div className="w-full  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                <div className="w-full overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/omunim-home.png" alt="" className="h-auto mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded p-2 flex items-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white">Jewellery Software </h1>
                      <Link to="../images/pdf/mobile-app.pdf" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                    <div>
                    <p className="leading-relaxed text-sm p-2 dark:text-white">Jewellery Software provides features like stock management, bills, tagging, orders, quotations, approvals, estimates, and a mobile app for the jewelry business. Plus, RFID tags make the stock tally process super fast.</p>
                    </div>
                  </div>
                  <div className="w-full  overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/navri-home.jpg" alt="" className="h-auto mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded p-2 flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Navri Jewellery </h1>
                      <Link to="../images/pdf/navri-jewellery.pdf" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                    <p className="leading-relaxed text-sm p-2 dark:text-white"> Imitation jewellery is made from a variety of materials, including metal, plastic, and glass. Imitation jewellery is often used as a cheaper alternative to real jewellery.</p>
                  </div>
                  <div className="w-full  overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/jewellers-app.png" alt="" className="h-80 mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-2 flex items-center rounded justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Jewellers App </h1>
                      <Link to="../images/pdf/jewellersapp.pdf" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                    <p className="leading-relaxed text-sm p-2 dark:text-white">Jewellersapp is an online portal for all jewellers who want to set their business online.</p>
                  </div>
                  <div className="w-full  overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/mobile-app.png" alt="" className="h-auto mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-2 flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Mobile App </h1>
                      <Link to="../images/pdf/mobile-app.pdf" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                    <p className="leading-relaxed text-sm p-2 dark:text-white">The Jewellery mobile app is the best option for managing your jewellery business on a smartphone or tablet. Imagine having a mini-office in your pocket to access important transactions and executive activities whenever and wherever you want.</p>
                  </div>
                  <div className="w-full  overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/software.png" alt="" className="h-auto mx-auto"/>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-2 flex items-center  justify-center gap-5">
                      <h1 className="text-xl font-semibold text-black dark:text-white mb-2">Jewellery Software </h1>
                      <Link to="../images/pdf/mobile-app.pdf" target="_blank" className="rounded shadow-sm text-sm p-1 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple"> <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                    <p className="leading-relaxed text-sm p-2 dark:text-white">Jewellery Billing Software can manage your multi-location jewelry showrooms with staff access management. It helps you to manage stock and inventory, generate colourful bills, track customers, manage cash flow, and calculate net profit and loss.</p>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="logo">
                <div className="w-full  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                  <div className="w-full h-auto bg-red-100 relative rounded-md overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/pdf/mobile-app.png" alt="" className="h-auto mx-auto"/>
                    </div>
                    <div className="bg-white py-2">
                      <h1 className="text-xl font-semibold text-black mb-2">Jewellery Software</h1>
                      <p className="leading-relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quidem.</p>
                     <div className="py-3"> 
                     <Link to="./" className="rounded shadow-sm px-4 py-2 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple">Visit  <i className="ri-arrow-right-up-line"></i></Link>
                     </div>
                     <p>The Jewellery mobile app is the best option for managing your jewellery business on a smartphone or tablet. Imagine having a mini-office in your pocket to access important transactions and executive activities whenever and wherever you want.</p>
                    </div>
                  </div>
                  <div className="w-full h-auto bg-red-100 relative rounded-md overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/p-1.jpg" alt="" />
                    </div>
                    <div className="bg-white py-2">
                      <h1 className="text-xl font-semibold text-black mb-2">Responsive</h1>
                      <p className="leading-relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quidem.</p>
                     <div className="py-3"> 
                     <Link to="./" className="rounded shadow-sm px-4 py-2 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple">Visit  <i className="ri-arrow-right-up-line"></i></Link>
                     </div>
                    </div>
                  </div>
                  <div className="w-full h-auto bg-red-100 relative rounded-md overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/p-1.jpg" alt="" />
                    </div>
                    <div className="bg-white py-2">
                      <h1 className="text-xl font-semibold text-black mb-2">Responsive</h1>
                      <p className="leading-relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quidem.</p>
                     <div className="py-3"> 
                     <Link to="./" className="rounded shadow-sm px-4 py-2 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple">Visit  <i className="ri-arrow-right-up-line"></i></Link>
                     </div>
                    </div>
                  </div>
                  <div className="w-full h-auto bg-red-100 relative rounded-md overflow-hidden">
                    <div className=" bg-cover bg-center z-0 hover:scale-[1.1] duration-300">
                      <img src="./images/p-1.jpg" alt="" />
                    </div>
                    <div className="bg-white py-2">
                      <h1 className="text-xl font-semibold text-black mb-2">Responsive</h1>
                      <p className="leading-relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quidem.</p>
                     <div className="py-3"> 
                     <Link to="./" className="rounded shadow-sm px-4 py-2 bg-color_purple text-white hover:bg-white hover:text-color_purple hover:border hover:border-color_purple">Visit  <i className="ri-arrow-right-up-line"></i></Link>
                     </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Navbar>
  );
};

export default Portfolio;
