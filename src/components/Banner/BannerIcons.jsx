function BannerIcons( { icon, classes, text } ) {
    return(
        <>
            <div className="flex items-center gap-4">
                <div className={ `text-4xl h-12 w-12 p-3 shadow-sm rounded-full dark:text-black flex items-center justify-center ${ classes }` }>
                    { icon }
                </div>
                <p>{ text }</p>
            </div>
        </>
    )
}

export { BannerIcons }