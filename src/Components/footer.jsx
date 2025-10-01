import { Github, Twitter, MessageCircle } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <h2 className="text-lg font-bold text-white mb-4 md:mb-0">
          MyPortfolio
        </h2>

        
       

        
        <div className="flex space-x-4">
          <a href="https://github.com/Mercyweb-me" target="_blank" rel="noopener noreferrer">
            <Github size={22} className="hover:text-blue-400 transition" />
          </a>
         <a
  href="https://wa.me/2348025311411"  
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle size={30} className="hover:text-green-500 transition" />
</a>
          <a href="https://twitter.com/@KMoaren" target="_blank" rel="noopener noreferrer">
            <Twitter size={22} className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

    
      <div className="text-center text-sm text-gray-500 ">
        © {new Date().getFullYear()} MERCY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
