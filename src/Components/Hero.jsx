import React from 'react';
import { motion } from "framer-motion";
import MyPhoto from '../assets/MyPhoto.png'; // ✅ import the image

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                 px-4 sm:px-6 md:px-12 text-center"
    >
   
      <motion.img
      src={MyPhoto}  // ✅ updated path to image
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl border-4 border-yellow-300 mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-yellow-300">MERCY</span>
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-2xl mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A passionate Frontend Developer who builds clean & modern web
        applications.
      </motion.p>

      <motion.a
        href="#projects"   
        className="bg-yellow-300 text-gray-900 px-6 py-3 sm:px-8 sm:py-4 
                   rounded-full font-semibold shadow-lg 
                   hover:bg-yellow-400 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
