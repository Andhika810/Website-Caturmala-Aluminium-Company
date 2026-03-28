import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285711200302?text=Halo,%20saya%20tertarik%20dengan%20layanan%20aluminium%20Anda",
      "_blank"
    );
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full
  bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("layanan")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portofolio")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              FAQ
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-indigo-500 text-white px-6 py-2.5 rounded-lg flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("layanan")}
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("portofolio")}
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Portofolio
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              FAQ
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Hubungi Kami</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
