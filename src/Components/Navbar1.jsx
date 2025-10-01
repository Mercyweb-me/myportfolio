import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#service" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const id = e.target.getAttribute("href").substring(1);
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setOpen(false);
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-900 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      
        <a href="#home" className="text-2xl font-bold text-yellow-400">
          MyPortfolio
        </a>

      
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-yellow-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   
      {open && (
        <div className="md:hidden bg-indigo-800 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-yellow-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
