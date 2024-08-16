import lightMode from "../assets/website/light-mode-button.png"
import darkMode from "../assets/website/dark-mode-button.png"
import { useEffect, useState } from "react"

function DarkMode() {
    const [ theme, setTheme ] = useState( localStorage.getItem( "theme" ) || "light" )
    const [ isPress, setIsPress ] = useState( false )
    const [ keyCode, setKeyCode ] = useState()

    const changeTheme = () => {
        if( theme === "light" ) {
            setTheme( "dark" )
        } else {
            setTheme( "light" )
        }
    }
    
    // toggle theme color onclick
    useEffect( () => {    
        
        if( theme === "dark" ) {
            document.documentElement.classList.add( "dark" )
            localStorage.setItem( "theme", "dark" )
        } else {
            document.documentElement.classList.remove( "dark" )
            localStorage.setItem( "theme", "light" )
        }

        
    }, [ theme ] )

    const keyDown = (e) => {
        setKeyCode( e.keyCode )
        setIsPress( !isPress )
    }

    // toogle theme color onkeydown - using backtic ( ` ) keyCode ( 192 ) 
    useEffect( () => {
        document.addEventListener( "keydown", keyDown )

        console.log( keyCode )

        if( keyCode === 192 && theme === "light" ) {
            changeTheme()
        } else if( keyCode === 192 && theme === "dark" ) {
            changeTheme()
        }

        return() => {   
            document.removeEventListener( "keydown", keyDown )
        }
    }, [ isPress ] )

    return(
        <>     
            <div className="relative">
                <img 
                    src={ lightMode }
                    alt="theme"
                    className={`w-12 cursor-pinter drop-shadow-[1px_1xp_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100" }`}
                    onClick={ changeTheme }
                />

                <img 
                    src={ darkMode }
                    alt="theme"
                    className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300`}
                    onClick={ changeTheme }
                />
            </div>
        </>
    )
}

export { DarkMode }