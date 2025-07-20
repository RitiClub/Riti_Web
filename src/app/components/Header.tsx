'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 ${
        scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent backdrop-blur-md opacity'
      }`}
    >
      <div className='w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto'>
        <motion.div 
          className='relative font-bold text-2xl'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='relative z-10 bg-gradient-to-r from-[#f53a5d] via-[#FB8C00] to-[#f53a5d] bg-clip-text text-transparent'>
            Riti
          </span>
          <div className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#f53a5d] via-[#FB8C00] to-[#f53a5d]' />
        </motion.div>
        
        <nav className='hidden md:block'>
          <div className='border border-[#f53a5d]/20 rounded-full px-8 py-3 flex gap-12 bg-white/50 backdrop-blur-sm'>
            {['About', 'Team', 'Apply'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-lg relative group'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='text-[#2d2d2d] group-hover:text-[#f53a5d] transition-colors'>
                  {item}
                </span>
                <div className='absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#f53a5d] to-[#FB8C00] group-hover:w-full transition-all duration-300' />
              </motion.a>
            ))}
          </div>
        </nav>

        <motion.a
          href="#"
          className='relative group'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='text-lg font-medium relative bg-gradient-to-r from-[#f53a5d] via-[#FB8C00] to-[#f53a5d] bg-clip-text text-transparent'>
            Visit e-riti
            <div className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#f53a5d] via-[#FB8C00] to-[#f53a5d]' />
          </span>
        </motion.a>
      </div>
    </motion.header>
  )
}