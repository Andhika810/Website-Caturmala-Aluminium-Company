import { ArrowRight, MessageCircle, Send } from "lucide-react"; // Tambah Send untuk icon hijau
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/scroll";
import logam from "../assets/logam.jpg";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285711200302?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20aluminium",
      "_blank",
    );
  };

  const scrollToContact = () => {
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="
        relative overflow-hidden
        pt-28 pb-16 sm:pt-32 sm:pb-20
        bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
        px-6 md:px-40 w-full
      "
    >
      {/* 1. FLOATING WHATSAPP BUTTON (POJOK KANAN BAWAH) */}
      {/* Tombol ini akan selalu muncul di HP maupun Desktop */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 flex items-center justify-center group"
          title="Chat via WhatsApp"
        >
          <MessageCircle size={28} className="fill-current" />
          {/* Label yang muncul saat di hover (opsional) */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold">
            WhatsApp
          </span>
        </button>
      </div>

      {/* BACKGROUND SHAPES */}
      <div className="hidden md:block absolute -top-40 -left-40 w-[600px] h-[600px] border-[40px] border-slate-400/40 rounded-full pointer-events-none z-0" />
      <div className="hidden md:block absolute -bottom-50 -right-48 w-[700px] h-[700px] border-[40px] border-slate-400/30 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* TEXT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left space-y-8 my-12 md:my-0"
          >
            <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight md:leading-[1.1]">
              Solid in{" "}
              <span
                className="font-extrabold 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                bg-clip-text text-transparent"
              >
                Quality
              </span>
              , <br className="hidden sm:block" />
              Bright in Service
            </h1>

            <p className="text-white/90 text-lg md:text-base lg:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              We build trust through solid quality and responsive, dependable
              service at every stage of your project.
            </p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
            >
              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all active:scale-95"
              >
                <MessageCircle size={22} />
                <span className="font-bold text-lg">Free Consultation</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={scrollToContact}
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-xl border border-slate-300 font-bold text-lg transition-all active:scale-95"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE - Hidden di Smartphone, Muncul di Desktop */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              hidden md:block
              relative
              h-[420px] lg:h-[31vw] 
              w-full lg:w-[50vw]
              clip-diagonal 
              overflow-hidden
            "
          >
            <div className="absolute inset-0">
              <img
                src={logam}
                alt="Aluminium Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
