import book1 from "../assets/books/book1.jpg"
import book2 from "../assets/books/book2.jpg"
import book3 from "../assets/books/book3.jpg"

import { FaStar } from "react-icons/fa"

const booksData = [
    {
        id: 1,
        img: book1,
        title: "Banora White Tree",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa quibusdam, nihil debitis earum neque tempore voluptates libero, voluptas quo qui asperiores esse iusto."
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

function BestBooks( { handleOrderPopup } ) {
    return(
        <>
            <div className="py-10">
                <div className="container">
                    {/* header section */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trending Books</p>

                        <h1 className="text-3xl font-bold">Best Books</h1>

                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, labore modi.
                        </p>
                    </div>

                    {/* card section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 sm:gap-x-10 md:gap-5 place-items-center">
                        {
                            booksData.map( ( { id, img, title, description } ) => (
                                <div 
                                    data-aos="zoom-in"                                    
                                    key={ id }
                                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-200 max-w-[300px] min-h-[308px] group"
                                >
                                    <div className="h-[100px]">
                                        <img 
                                            src={ img } 
                                            alt="cover"
                                            className="max-w-[100px] min-h-[150px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md" 
                                        />
                                    </div>
                                    
                                    <div className="p-4 text-center">
                                        <div className="w-full flex items-center justify-center space-x-1">
                                            <FaStar className="text-yellow-500 cursor-pointer"/>
                                            <FaStar className="text-yellow-500 cursor-pointer"/>
                                            <FaStar className="text-yellow-500 cursor-pointer"/>
                                            <FaStar className="text-yellow-500 cursor-pointer"/>
                                        </div>

                                        <h1 className="text-xl font-bold">{ title }</h1>
                                       
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{ description }</p>
                                        
                                        <button 
                                            className=" bg-primary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                                            onClick={ handleOrderPopup }
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { BestBooks }