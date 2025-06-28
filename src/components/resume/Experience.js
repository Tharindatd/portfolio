import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Experience = () => {
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20">
        <div>
         <div className="py-12 font-titlefont">
             <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
             <h2 className="text-4xl font-bold">Job Experience</h2>
         </div>
         <div className="mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
             <ResumeCard 
             title="Bachelor of Information Technology(BIT)"
             subTitle="University of Colombo 2023-2024"
             result="3.90/4"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>

             <ResumeCard 
             title ="G.C.E A/L Examination"
             subTitle="Siddhartha College, Weligama"
             result="C1"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>

             <ResumeCard 
             title="G.C.E. O/L Examination"
             subTitle="Siddhartha College, Weligama"
             result="5.00/5"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>
         
         </div>
             
         </div>
         
         <div>
         <div className="py-12 font-titlefont">
             <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
             <h2 className="text-4xl font-bold">Trainer Experience</h2>
         </div>
         <div className="mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
             <ResumeCard 
             title="BSc in Computer Science"
             subTitle="University of DM 2006 - 2010"
             result="3.90/4"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>

             <ResumeCard 
             title ="AS - Science & Information"
             subTitle="SuperKing Collage (2001 - 2005)"
             result="4.75/5"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>

             <ResumeCard 
             title="Secondary School Education"
             subTitle="Kingstar Secondary School (1998 - 2000)"
             result="5.00/5"
             des="Higher education is tertiary education leading to award of an academic
             degree.Higher Education,also called post-secondary education"/>
         
         </div>
         </div>
          </motion.div>
    )
}

export default Experience