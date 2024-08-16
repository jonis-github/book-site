import logo from "../assets/website/logo.png"
import { DarkMode } from "."

import { FaCaretDown } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"


const menuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services"
    },
]

const dropDownLinks = [
    {
        name: "Trending Books",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Authors",
        link: "/#",
    },
]



function Navbar( { handleOrderPopup} ) {
    return(
        <>
            <div className="sticky top-0 z-10 shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <a 
                                href="/#" 
                                className="flex gap-2 justify-between items-center font-bold text-2xl sm:text-3xl">
                                <img 
                                    src={ logo }
                                    alt="Main logo"
                                    className="w-10"
                                />
                                Banora White
                            </a>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            {/* light/dark theme */}
                            <div>                                   
                                <DarkMode  />
                            </div>
                            
                            <ul className="hidden gap-2 sm:flex">
                                {/* menu links */}
                                {
                                    menuLinks.map( ( { id, name, link } ) => (
                                        <li key={ id }>
                                            <a 
                                                href={ link }
                                                className="inline-block py-4 px-4 hover:text-primary duration-200"
                                            >
                                                { name }
                                            </a>
                                        </li>
                                    ) )
                                }

                                {/* dropdown section */}
                                <li className="group relative cursor-pointer">
                                    <a 
                                        href="/#"
                                        className="flex p-4 items-center gap-[2px]"
                                    >
                                        Quick Links
                                        <span>
                                            <FaCaretDown 
                                                className="transition duration-300 group-hover:rotate-180"
                                            />
                                        </span>
                                    </a>

                                    {/* dropdown link section */}
                                    <div className="dark:bg-gray-900 dark:text-white absolute -left-9 z-[10]  group-hover:block text-black bg-white p-2 shadow-md hidden">
                                        <ul>
                                            {
                                                dropDownLinks.map( ( { name, link }, index ) => (
                                                    <li 
                                                        key={ index }
                                                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                                                    >
                                                        <a href={ link } >{ name }</a>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <button 
                                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300"
                                onClick={ handleOrderPopup }
                            >
                                Order
                                
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Navbar }