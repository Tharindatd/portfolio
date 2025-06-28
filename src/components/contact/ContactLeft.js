import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { contactImg } from "../../assets";


const ContactLeft = () => {
    return(
        
        <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne
        flex flex-col gap-8 justify-center">
        <img
        className="w-full h-64 object-cover rounded-lg mb-2" 
        src={contactImg} 
        alt="contacting" />
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white">Jone Doe</h3>

            <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>

            <p className="text-base text-gray-400 tracking-wide "> 
             simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
                Phone <span className="text-lightText">+94 711120720</span>
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{""}
                <span className="text-lightText">tdsamaraweera0@gmail.com</span>
            </p>
        
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titlefont mb-4">find me in</h2>
            <div className="flex gap-4">
                <span className="bannerIcon"><FaFacebook /></span>
                <span className="bannerIcon"><FaInstagram /></span>
                <span className="bannerIcon"><FaLinkedin /></span>
            </div>
        </div>

        </div>
    )
}

export default ContactLeft