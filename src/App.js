import { useEffect, useState } from 'react';
import './App.css';
import { AllBooks, AppleStoreBanner, Banner, BestBooks, Footer, Hero, Navbar, Popup, Testimonial } from './components';

// aos import
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  const [ orderPopup, setOrderPopup ] = useState( false )

  const handleOrderPopup = () => {
    setOrderPopup( !orderPopup )
  }

  useEffect( () => {
    AOS.init( {
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    } )

    AOS.refresh()
  }, [] )

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={ handleOrderPopup } />
        <Hero handleOrderPopup={ handleOrderPopup } />
        <BestBooks handleOrderPopup={ handleOrderPopup } />
        <Banner />
        <AppleStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <Popup orderPopup={ orderPopup } handleOrderPopup={ handleOrderPopup } />
    </div>
  );
}

export default App;
