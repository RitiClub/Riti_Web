"use client"
import React, { useRef } from 'react'   
import Lottie from 'react-lottie-player'
import pencil from "./lotte/pencil.json"
import cloth from "./lotte/cloth.json"
import { motion, useInView,AnimatePresence} from "framer-motion"

interface VisionCardProps {
  title: string;
  description: string;
  points: string[];
  animation: any;
  direction: 'left' | 'right';
}

const VisionCard: React.FC<VisionCardProps> = ({ title, description, points, animation, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: direction === 'left' ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative"
    >
      {/* Card Background with Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f53a5d] to-[#FB8C00] rounded-3xl blur-[2px] opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
      
      <div className="relative flex flex-col gap-5 w-full h-[450px] bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
        {/* Title with Gradient */}
        <h3 className="md:text-3xl text-xl font-semibold bg-gradient-to-r from-[#f53a5d] to-[#FB8C00] bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Main Description */}
        <div className="mx-auto max-w-xl md:text-lg text-md text-gray-700">
          {description}
        </div>

        {/* Points with Animated Bullets */}
        <div className="space-y-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 group/item"
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#f53a5d] to-[#FB8C00] group-hover/item:scale-125 transition-transform duration-300" />
              <span className="text-md md:text-lg text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Lottie Animation Container */}
        <div className="mt-auto">
          <div className="w-full flex relative">
            <motion.div 
              className="h-12 w-12 md:h-16 md:w-16 absolute right-0"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Lottie loop play animationData={animation} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Visions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const visionData = [
    {
      title: "Design",
      description: "Transform discarded clothes into new and exciting garments",
      points: [
        "Experiment with different techniques like embroidery, patchwork, and dyeing",
        "Create unique and sustainable fashion pieces",
        "Embrace upcycling as a form of creative expression"
      ],
      animation: pencil,
      direction: 'left' as const
    },
    {
      title: "Style",
      description: "Showcase the upcycled creations through captivating styling",
      points: [
        "Create cohesive looks that highlight the unique designs",
        "Create unique and sustainable fashion pieces",
        "Embrace upcycling as a form of creative expression"
      ],
      animation: cloth,
      direction: 'right' as const
    },
    {
      title: "Embrace",
      description: "Lead the sustainable fashion movement with innovative solutions",
      points: [
        "Create cohesive looks that highlight the unique designs",
        "Create unique and sustainable fashion pieces",
        "Embrace upcycling as a form of creative expression"
      ],
      animation: cloth,
      direction: 'right' as const
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <AnimatePresence>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(#f53a5d 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              className="h-2 w-2 rounded-full bg-[#f53a5d]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-600 text-lg font-medium">Our Goals</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent pb-2">
            What do we do?
          </h2>

          <motion.div 
            className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#f53a5d] to-[#FB8C00]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Vision Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {visionData.map((vision, index) => (
            <VisionCard key={index} {...vision} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full blur-[120px] bg-[#f53a5d]/20 mix-blend-multiply" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full blur-[120px] bg-[#FB8C00]/20 mix-blend-multiply" />
      </AnimatePresence>
    </section>
  );
}

export default Visions