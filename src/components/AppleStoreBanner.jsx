import boardImg from "../assets/website/board.png"
import playStoreImg from "../assets/website/play_store.png"
import appStoreImg from "../assets/website/app_store.png"

const bannerImg = {
    backgroundImage: `url( ${ boardImg } )`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

function AppleStoreBanner() {
    return(
        <>
            <div 
                className="bg-gray-100 dark:bg-gray-800 text-white py-10"
                style={ bannerImg }
            >
                <div className="container">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 
                            data-aos="slide-up"
                            className="text-2xl text-center sm:text-4xl font-semibold">Read Books at your fingertips
                        </h1>
                        
                        <div 
                            data-aos="slide-up"
                            className="flex flex-wrap justify-center items-center gap-4"
                        >
                            <a href="#">
                                <img 
                                    src={ playStoreImg }
                                    alt=""
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                />
                            </a>

                            <a href="#">
                                <img 
                                    src={ appStoreImg }
                                    alt=""
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AppleStoreBanner }