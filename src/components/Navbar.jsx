import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "layanan" },
    { name: "Project", href: "portofolio" },
    { name: "Progress", href: "progress" },
    { name: "About Us", href: "tentang" },
    { name: "Faq", href: "faq" },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285711200302", "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm font-sans">
        <div className="relative z-50 bg-white">
          {" "}
          {/* Wrapper untuk menjaga nav tetap di atas overlay */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div
                onClick={() => handleScroll("beranda")}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <img
                  src={logoImage}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
                <div className="leading-tight">
                  <h1 className="text-black font-bold text-lg leading-none">
                    Caturmala Cipta Alumindo
                  </h1>
                  <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-semibold">
                    Aluminium Extrusion
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 ml-auto mr-10">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleScroll(item.href)}
                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* CTA Button Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg"
                >
                  Contact Us
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown & Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* BACKDROP/OVERLAY: Klik di mana saja di luar menu untuk menutup */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)} // FUNGSI CLIK DI LUAR
                className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 md:hidden"
              />

              {/* MOBILE MENU CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 left-0 w-full bg-white border-t border-gray-100 z-50 md:hidden shadow-xl"
              >
                <div className="flex flex-col space-y-1 px-4 py-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleScroll(item.href)}
                      className="block w-full text-left px-4 py-4 text-base font-bold text-gray-700 hover:bg-blue-50 rounded-xl"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-2 px-2">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-xl font-bold"
                    >
                      <Phone size={18} />
                      Contact Us
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
