import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
      
    return (
        <div className="w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Tharinda Dilshan</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking={false}
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyfont leading-6 -tracking-wide">
                    I fell in love with web development a few years ago and now that's what I do. 
                    I am a determined person who loves to create websites with my fullest effort.
                </p>
            </div>
            <div> 
                <h2 className="text-base uppercase font-titlefont mb-4">find me on</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon"><FaFacebookF /></span>
                    <span className="bannerIcon"><FaInstagram /></span>
                    <span className="bannerIcon"><FaLinkedin /></span>
                    <span className="bannerIcon"><FaGithub /></span>
                </div>
            </div>
        </div>
    );
}

export default LeftBanner;
