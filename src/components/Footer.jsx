import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logoImage from "../assets/logo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <img
                  src={logoImage}
                  alt="Logo Caturmala Cipta Alumindo"
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-white font-bold text-xl">
                  PT. Caturmala Cipta Alumindo
                </h3>
                <p className="text-gray-400 text-xs">ALUMINIUM EXTRUSION</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              A trusted partner for high-quality aluminum solutions at
              competitive prices. Serving a wide range of needs from residential
              to commercial.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu Cepat */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Menu</h3>
            <ul className="space-y-3">
              {["home", "services", "project", "about", "faq"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-blue-400 transition-colors capitalize"
                  >
                    {item === "tentang" ? "Tentang Kami" : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Dies & Mould",
                "Supply & Distribution",
                "Cutting & Finishing",
                "Material Consulton",
                "Logistics & Fulfillment",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={20} />
                <span className="text-gray-400">
                  JL Bangka 1B No. 11 B RT 002 RW 009, Pela Mampang, Mampang
                  Prapatan, Kota Adm. Jakarta Selatan, DKI Jakarta
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <a
                  href="tel:+6281234567890"
                  className="hover:text-blue-400 transition-colors"
                >
                  +62 857-1120-0302
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <a
                  href="mailto:info@alumpro.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  caturmalacipta@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Caturmala. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
