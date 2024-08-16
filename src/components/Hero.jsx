import { useState } from "react"
import book1 from "../assets/books/book1.jpg"
import book2 from "../assets/books/book2.jpg"
import book3 from "../assets/books/book3.jpg"
import vector from "../assets/website/blue-pattern.png"

const imageList = [
    {
        id: 1,
        img: book1,
        title: "Banora White Tree",
        description: 
        <div className="text-sm">
            <p>This webapp is a sample project.</p>
            <div>
                Here is the original video
                <a
                    className="text-blue-950 font-extrabold dark:bg-clip-text dark:bg-gradient-to-b dark:from-primary dark:to-secondary dark:text-transparent"
                    href="https://www.youtube.com/watch?v=d-XyhNQQWFw"
                >
                    {" "}Link
                </a>
            </div>
            <div className="text-2xl">
                Credit to{" "} 
                <span>"The</span> 
                <span className="bg-gradient-to-tr from-blue-900 to-blue-950 text-transparent bg-clip-text font-bold dark:bg-clip-text dark:bg-gradient-to-b dark:from-primary dark:to-secondary dark:text-transparent" >
                    <a href="https://www.youtube.com/watch?v=d-XyhNQQWFw">
                        {" "}Coding
                    </a>
                </span>
                <span> Journey"</span>
            </div>
        </div>
    },
    {
        id: 2,
        img: book2,
        title: "Do you know the dumbapple tree?",
        description: "A Banora White also known as a dumbapple  is a kind of fruit found only in the village of Banora. Banora White trees bear fruit at random times during the year, which is the reason the villagers call them."
    },
    {
        id: 3,
        img: book3,
        title: "Lorem ipsum dolor sit amet consectetur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa quibusdam, nihil debitis earum neque tempore voluptates libero, voluptas quo qui asperiores esse iusto."
    },
]

function Hero( { handleOrderPopup } ) {
    const [ img, setImg ] = useState( imageList[0].img )
    const [ title, setTitle ] = useState( imageList[0].title )
    const [ description, setDescription ] = useState( imageList[0].description )

    const changeImg = ( img, title, description ) => {
        setImg( img )
        setTitle( title )
        setDescription( description )
    }

    const bgImg = {
        backgroundImage: `url( ${ vector } )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%"
    }

    return(
        <>
            <div 
                className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={ bgImg }
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">

                        {/* text content section */}
                        <div className="flex flex-col justify-center text-center gap-4 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1">
                            <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                { title }
                                <p className="bg-clip-text text-sm text-right bg-gradient-to-b from-primary to-secondary text-transparent">
                                    <a href="https://www.youtube.com/watch?v=d-XyhNQQWFw">
                                        by The Coding Journey
                                    </a>
                                </p>
                            </h1>

                            <div 
                                data-aos="slide-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-sm indent-8">
                                { description }
                            </div>

                            <div>
                                <button 
                                    data-aos="zoom-in"
                                    data-aos-once="true"                                    
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                                    onClick={ handleOrderPopup }
                                >
                                    Order now
                                </button>
                            </div>
                        </div>

                        {/* image section */}
                        <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
                                    data-aos="zoom-in"                                    
                                    data-aos-once="true" 
                                    src={ img }
                                    alt="Img Section"
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                                />
                            </div>

                            {/* other image list */}
                            <div className="flex lg:flex-col absolute lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                {
                                    imageList.map( ({ id, img, title, description }) => (
                                        <img
                                            data-aos="zoom-in"                                            
                                            data-aos-once="true"
                                            key={ id } 
                                            src={ img }
                                            alt="Img List"
                                            className="max-w-[100px] h-[100px] inline-block hover:scale-110 duration-200"
                                            onClick={ () => changeImg( img, title, description ) }
                                        />
                                    ) )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Hero }