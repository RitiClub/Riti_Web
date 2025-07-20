import React from 'react'
import {motion} from "framer-motion"
import "./Ahero.modules.css"
import Image from 'next/image'
import bgImage from './images/image.jpg'

const BackgroundSection = () => (
  <div className="absolute inset-0 w-full h-full z-0">
    <Image
      src={bgImage}
      alt="Background"
      fill
      className="object-cover object-center opacity-100"
      priority
      quality={100}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
    <div className="absolute inset-0 backdrop-blur-[0px]" />
  </div>
)

const HeroContent = () => (
  <motion.div 
    className="text-center relative z-10 w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
     <h1 className="text-4xl md:text-7xl lg:text-8xl font-normal text-white pb-2">
  Elevate Your Online
  <span className="block mt-2">Presence with Lift</span>
</h1>

    </motion.div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


   
  </motion.div>
)

const FloatingOrb = () => (
  <motion.div 
    className="absolute -bottom-32 left-1/2 -translate-x-1/2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.8 }}
  >
    <motion.div 
      animate={{ rotate: -360 }} 
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}  
      className="relative w-72 h-72 md:w-96 md:h-96"
    >
      <div className="absolute inset-0 rounded-full blur-[50px] bg-gradient-to-r from-[#f53a5d] to-[#FB8C00] opacity-70" />
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full blur-[25px] bg-gradient-to-r from-[#FB8C00] to-[#f53a5d] opacity-70"
      />
    </motion.div>
  </motion.div>
)

function Ahero() {
  return (
    <section className="min-h-screen pt-24 overflow-hidden relative flex items-center justify-center">
      <BackgroundSection />
      <div className="container mx-auto px-4 min-h-[calc(100vh-6rem)] flex items-end">
        <HeroContent />
      </div>
      
    </section>
  )
}

export default Ahero