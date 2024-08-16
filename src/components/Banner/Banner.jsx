import { BannerIcons } from "./BannerIcons"

import libraryImg from "../../assets/website/library.jpg"

import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

function Banner() {
    return(
        <>
            <div className="py-10"> 
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        {/* image section */}
                        <div>                            
                            <img
                                data-aos="zoom-in"  
                                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                                src={ libraryImg }
                                alt="library.jpg"
                            />
                        </div>

                        {/* text section */}        
                        <div
                            data-aos="slide-up" 
                            className="flex flex-col justify-center gap-6 sm:pt-0"
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold">Library at your fingertips</h1>

                            <p className="text-sm text-gray-500 tracking-wide leading-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis numquam consequuntur, explicabo nemo exercitationem laboriosam modi id eveniet ea ipsa.
                            </p>

                            {/* additional icons */}
                            <div className="flex flex-col gap-4">                                
                                <BannerIcons icon={ <GrSecure /> } classes="bg-violet-100 dark:bg-violet-400" text="Quality Books" />
                                <BannerIcons icon={ <IoFastFood /> } classes="bg-orange-100 dark:bg-orange-400" text="Fast Delivery" />
                                <BannerIcons icon={ <GiFoodTruck /> } classes="bg-green-100 dark:bg-green-400" text="Easy Payment Method" />
                                <BannerIcons icon={ <GiFoodTruck /> } classes="bg-yellow-100 dark:bg-yellow-400" text="Get Offers on Books" />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Banner }