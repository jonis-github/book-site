// npm i aos - animate on scroll

import footerLogo from "../assets/website/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa"

const footerLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
    {
        title: "Blog",
        link: "/#"
    },
]

function Footer() {
    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-950">
                <div className="container">
                    <div className="grid md:grid-cols-3 py-5 ">
                        {/* company details */}                      
                        <div className="py-8 px-4">                            
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                                Books Store
                            </h1>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum necessitatibus similique neque.
                            </p>

                            <br />

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Jonis E. Daclag</p>
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>(+91)943-123-4567</p>
                            </div>

                            <div className="flex items-center gap-3 mt-6">
                                <a href="#"><FaInstagram className="text-3xl"/></a>
                                <a href="#"><FaFacebook className="text-3xl"/></a>
                                <a href="#"><FaLinkedin className="text-3xl"/></a>
                            </div>
                        </div>

                        {/* links section */}                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">                            
                            <div>
                                <div className="py-8 px-4">                                
                                    <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>         

                                    <ul className="flex flex-col gap-3">
                                        {
                                            footerLinks.map( ( { title, link }, id ) => (                                                
                                                <li 
                                                    key={ id }
                                                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                                                >
                                                    <span>&#11162;</span>
                                                    <span>{title}</span>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">                                
                                    <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>         

                                    <ul className="flex flex-col gap-3">
                                        {
                                            footerLinks.map( ( { title, link }, id ) => (
                                                // cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500
                                                <li 
                                                    key={ id }
                                                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                                                >
                                                    <span>&#11162;</span>
                                                    <span>{title}</span>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <div className="py-8 px-4">                                
                                    <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>         

                                    <ul className="flex flex-col gap-3">
                                        {
                                            footerLinks.map( ( { title, link }, id ) => (
                                                // cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500
                                                <li 
                                                    key={ id }
                                                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                                                >
                                                    <span>&#11162;</span>
                                                    <span>{title}</span>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>  

                        </div>
                    </div>

                    {/* copyright section */}
                    <div>
                        <div className="border-t-2 border-gray-300/50">
                            <p className="text-center py-10">
                                Copyright &copy; { new Date().getFullYear() }. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Footer }