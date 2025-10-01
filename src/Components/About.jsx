import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-16"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-blue-600">Me</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          I’m a <span className="font-semibold">Frontend Developer</span> with
          a passion for creating clean, responsive, and interactive web
          applications. I enjoy turning complex problems into simple, beautiful
          designs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold text-blue-600">HTML</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold text-blue-600">CSS</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold text-blue-600">JavaScript</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold text-blue-600">React</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
