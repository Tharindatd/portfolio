import React from "react";
import Title from "../layouts/Title";
import {projectOne,projectTwo,projectThree} from "../../assets/index"
import ProjectCard from "./ProjectCard";

const projects = () => {
    return (
        <section id="projects"
        className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title 
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Project" />
            </div>
            <div className="grid grid-cols-3 gap-14">


                <ProjectCard 
                title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                src={projectOne} />


                <ProjectCard 
                title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                src={projectTwo}/>


                <ProjectCard
                 title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                src={projectThree} />


                <ProjectCard 
                title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                src={projectOne} />

                <ProjectCard 
                title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                src={projectTwo} />

                <ProjectCard title="SOCIAL MEDIA CLONE"
                des="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                src={projectThree} />

            </div>
        </section>
    )
}


export default projects