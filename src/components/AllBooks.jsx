import { FaStar } from "react-icons/fa"

import book1 from "../assets/books/book1.jpg"
import book2 from "../assets/books/book2.jpg"
import book3 from "../assets/books/book3.jpg"

const booksData = [
    {
        id: 1,
        img: book1,
        title: "The Coding Journey?",
        rating: 5.0,
        author: "unknown"
    },
    {
        id: 2,
        img: book2,
        title: "The Coding Journey??",
        rating: 4.5,
        author: "unknown"
    },
    {
        id: 3,
        img: book3,
        title: "The Coding Journey??",
        rating: 4.7,
        author: "unknown"
    },
    {
        id: 4,
        img: book2,
        title: "The Coding Journey??",
        rating: 5.0,
        author: "unknown"
    },
    {
        id: 5,
        img: book3,
        title: "The Coding Journey??",
        rating: 5.0,
        author: "unknown"
    },
]

function AllBooks() {
    return(
        <>
            <div className="py-10">
                <div className="container placeholder-gray-100">
                    {/* header */}                    
                    <div 
                        data-aos="slide-up"
                        className="text-center mb-20 max-w-[400px] mx-auto"
                    >                        
                        <p className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Best Books
                        </p>

                        <h1 className="text-3xl font-bold">
                            Top Books
                        </h1>

                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, explicabo quae?
                        </p>
                    </div>

                    {/* card */}
                    <div data-aos="slide-up">                       
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                            {
                                booksData.map( ( { id, img, title, rating, author } ) => (
                                    <div 
                                        key={ id }
                                        className="space-y-3"
                                    >
                                        {/* h-[220px] w-[150px] object-cover rounded-md */}
                                        <img 
                                            src={ img }
                                            alt={ title }
                                            className="h-[220px] w-[150px] object-cover rounded-md"
                                        />

                                        <div>
                                            <h2 className="font-semibold">{ title }</h2>

                                            <p className="text-sm text-gray-700 dark:text-gray-400">{ author }</p>

                                            <div className="flex items-center gap-1">
                                                <FaStar className="text-yellow-500" />

                                                <span>{ rating }</span>
                                            </div>
                                        </div>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                    
                    <div className="flex justify-center">                        
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">
                            View All Books
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AllBooks }