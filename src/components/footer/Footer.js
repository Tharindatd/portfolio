import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import {logo} from "../../assets/index"



const Footer = () => {
    return(
        <div className="w-full py-20 h-auto border-t-[1px] border-black grid grid-cols-4 gap-8">
            <div className="w-full h-full flex flex-col gap-8">
                <img className= 'w-32' src={logo} alt="logo" />
                <div className="flex gap-4">
                <span className="bannerIcon"><FaFacebookF /></span>
                <span className="bannerIcon"><FaInstagram /></span>
                <span className="bannerIcon"><FaLinkedin /></span>
            </div>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    quick link
                </h3>
                <ul className="flex flex-col gap-4 font-titlefont font-medium  py-6 overflow-hidden">

                   
                   <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            About 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>
                   

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Portfolio 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                      <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Service 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Blog 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Contact 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>
                </ul>
            </div>


            <div className="w-full h-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
                    Resources
                </h3>
                <ul className="flex flex-col gap-4 font-titlefont font-medium  py-6 overflow-hidden">

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Authentication 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            System Status 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                      <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Terms of Service 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Pricing 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Over Right 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>
                </ul>
            </div>

            <div className="w-full h-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
                    Developers
                </h3>
                <ul className="flex flex-col gap-4 font-titlefont font-medium  py-6 overflow-hidden">

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Documentation 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Authentication 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                      <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            API Reference 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Support 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>

                    <li>
                        <span className="w-full hover:text-designColor duration-300 text-lg relative cursor-pointer group">
                            Open Source 
                        <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%]
                        group-hover:translate-x-0 transition-transform duration-300">
                            
                        </span></span>
                    
                    </li>
                </ul>
            </div>
            
        </div>
    )
}


export default Footer