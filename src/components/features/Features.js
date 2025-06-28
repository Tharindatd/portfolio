import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Title from "../layouts/Title";
import Card from "./Card";



const Features = () => {
    return (
        <section id="features" 
        className="w-full py-20  items-center border-b-[1px] border-black"
        >
            <Title title="Features" des="what i do"/>
            <div className="grid grid-cols-3 gap-20">

                <Card
                  title="Wordpress Website"
                  des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                " icon={<FaWordpress />}
                 />
                 
                <Card title="Wordpress Website"
                des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                " icon={<FaBars />}
                />
                
                
                <Card title="SEO Optimisation"
                des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                " icon={<SiProgress />}
                />

                <Card title="Mobile Responsive"
                des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                " icon={<FaMobile />}
                />

                <Card title="E-Commerce Store"
                des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                "icon={<MdShoppingCart />}
                 />

                <Card title="Hosting Website"
                des="WordPress is an open-source software, meaning it's free to use. However, expenses arise for domain names,
                hosting services, and optional premium themes and plugins.
                " icon={<TbWorld />}
                />

            </div>
      
        </section>
        
    );
}

export default Features