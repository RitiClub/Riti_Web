'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(#f53a5d 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=100&mute=0&rel=0&controls=1&loop=0&playlist=${videoId}`}
            title="Team Introduction"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = '40K78d01X_Y';

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(#f53a5d 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient Orbs */}
      <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full blur-[120px] bg-[#f53a5d]/20 mix-blend-multiply" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full blur-[120px] bg-[#FB8C00]/20 mix-blend-multiply" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal bg-gradient-to-r from-[#f53a5d] via-[#FB8C00] to-[#f53a5d] bg-clip-text text-transparent pb-2">
              Meet the Team
            </h2>
            <motion.div 
              className="h-1 w-24 mt-4 rounded-full bg-gradient-to-r from-[#f53a5d] to-[#FB8C00]"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.p 
              className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get to know the passionate individuals behind our success. Our team brings together diverse talents and expertise to deliver exceptional results.
            </motion.p>

            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f53a5d]" />
                <span className="text-gray-700">Creative Problem Solvers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB8C00]" />
                <span className="text-gray-700">Dedicated Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f53a5d]" />
                <span className="text-gray-700">Industry Experts</span>
              </div>
            </motion.div>

            <motion.button
              className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-[#f53a5d] to-[#FB8C00] text-white font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join Our Team</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            className="relative cursor-pointer group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#f53a5d] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Gradient Border */}
              <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-[#f53a5d] to-[#FB8C00]">
                <div className="absolute inset-0 bg-white rounded-2xl" />
              </div>
              
              {/* Video Wrapper */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&rel=0`}
                  title="Team Introduction"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#f53a5d] rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#FB8C00] rounded-br-lg" />
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 rounded-full bg-[#f53a5d]"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-[#FB8C00]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videoId}
      />
    </section>
  )
}

export default TeamSection 