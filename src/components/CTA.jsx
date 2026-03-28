import { MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeRight } from "../animations/scroll";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Halo, saya ingin konsultasi proyek aluminium.

Nama: ${form.name}
WhatsApp: ${form.phone}
Email: ${form.email}
Jenis Proyek: ${form.project}
Pesan: ${form.message}
    `;

    window.open(
      `https://wa.me/6285711200302?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="kontak"
      className="py-20  px-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <div className="text-center mb-12">
            <span className="text-white font-semibold text-sm uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
              Project Consultation
            </span>
            <h2 className="text-4xl md:text-4xl font-bold text-white mt-3 mb-4">
              What you need?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will contact you with the
              best solution for your aluminum needs.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Nama */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Full Name / Company
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name / Company"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="xyz@gmail.com"
              />
            </div>

            {/* Jenis Proyek */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Type of Project
              </label>
              <select
                name="project"
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Choose Type</option>
                <option>Profil Aluminium </option>
                <option>Plat Aluminium</option>
                <option>Coil Aluminium</option>
                <option>Aluminium Extrusi</option>
                <option>Aluminium Foil</option>
                <option>Aluminium Metal</option>
                <option>Hollow Aluminium</option>
                <option>Others</option>
              </select>
            </div>

            {/* Pesan */}
            <div className="md:col-span-2">
              <label className="text-white text-sm font-semibold mb-2 block">
                Notes
              </label>
              <textarea
                name="message"
                rows="4"
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Describe your project requirements..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
              >
                <Send size={22} />
                Send & Consult via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
