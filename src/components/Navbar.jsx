import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/logo.jpg";

export default function Navbar() {
  const navItems = [
    { name: "Services", href: "#layanan" },
    { name: "Project", href: "#portofolio" },
    { name: "Progress", href: "#progress" },
    { name: "About Us", href: "#tentang" },
    { name: "Faq", href: "#faq" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285711200302?text=Halo,%20saya%20tertarik%20dengan%20layanan%20aluminium%20Anda",
      "_blank",
    );
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={logoImage}
              alt="Logo Caturmala Cipta Alumindo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-black font-bold text-lg">
                Caturmala Cipta Alumindo
              </h1>
              <span className="text-xs text-gray-600 tracking-wide">
                ALUMINIUM EXTRUSION
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex ml-auto mr-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative text-md font-medium text-gray-600 transition-colors hover:text-black"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t border-gray-100 md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-600 hover:text-black"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
