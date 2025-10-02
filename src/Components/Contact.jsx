import { motion } from "framer-motion";
import { Github, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "2348025311411"; 
    const text = `Hello, my name is ${formData.user_name}.
My email is ${formData.user_email}.
Here is my message: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    setShowPopup(true);

    
    navigator.clipboard.writeText(text).catch(() => {});
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-16 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get In <span className="text-blue-600">Touch</span>
      </motion.h2>

     
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  value={formData.user_name}
  onChange={handleChange}
  className="w-full p-3 rounded-lg border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             placeholder-gray-500 text-gray-800 "
  required
/>

<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  value={formData.user_email}
  onChange={handleChange}
  className="w-full p-3 rounded-lg border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             placeholder-gray-500 text-gray-800 "
  required
/>

<textarea
  name="message"
  placeholder="Your Message"
  rows="5"
  value={formData.message}
  onChange={handleChange}
  className="w-full p-3 rounded-lg border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             placeholder-gray-500 text-gray-800"   
  required
></textarea>


        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Send via WhatsApp
        </button>
      </motion.form>

      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold mb-4">Message Ready</h3>
            <p className="text-gray-600 mb-4">
              Your message has been copied. Click below to open WhatsApp.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Open WhatsApp
            </a>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

     
      <motion.div
        className="flex space-x-6 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/Mercyweb-me" target="_blank" rel="noopener noreferrer">
          <Github size={28} className="text-gray-700 hover:text-blue-600 transition" />
        </a>

        <a href="https://wa.me/2348025311411" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={30} className="hover:text-green-500 transition" />
        </a>

        <a href="https://twitter.com/@KMoaren" target="_blank" rel="noopener noreferrer">
          <Twitter size={28} className="text-gray-700 hover:text-blue-600 transition" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
