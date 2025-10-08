import React, { useState } from "react";
import { motion } from "framer-motion";
import MyPhoto from "../assets/MyPhoto.png";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center 
                 bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-6"
    >
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 space-y-6">
        <motion.img
          src={MyPhoto}
          alt="Mercy"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-yellow-300 shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-yellow-300">MERCY</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-100 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A passionate Frontend Developer who builds clean & modern web
          applications.
        </motion.p>

        <motion.a
          href="#projects"
          className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg 
                     hover:bg-yellow-400 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          View My Work
        </motion.a>
      </div>

      <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center items-center">
        <div
          style={{ perspective: "1000px" }}
          className="w-64 h-64 md:w-80 md:h-80"
        >
          <div
            className="animated-border rounded-2xl p-[4px] w-full h-full"
          >
            <div
              className="card-inner relative w-full h-full rounded-2xl transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={MyPhoto}
                  alt="Mercy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center p-6 text-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  background: "#0b1220", 
                }}
              >
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <p className="text-sm md:text-base text-gray-300">
                  I’m a creative Frontend Developer who loves building beautiful,
                  user-focused designs. Always exploring new ideas and
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
