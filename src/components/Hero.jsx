import React from 'react'
import hero from "../images/hero.png"
function Hero() {
  return (
    <section className='hero'>
         <img src={hero} className='hero--photo' alt="hero" />
         <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
   
    
  )
}

export default Hero