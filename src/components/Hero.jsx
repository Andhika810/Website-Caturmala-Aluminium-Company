import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/scroll";
import logam from "../assets/logam.jpg";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285711200302?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20aluminium",
      "_blank"
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
        bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-40
      "
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] border-[40px] border-slate-400/40 rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-50 -right-48 w-[700px] h-[700px] border-[40px] border-slate-400/30 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* TEXT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Solid in{" "}
              <span
                className="font-bold 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                bg-clip-text text-transparent"
              >
                Quality
              </span>
              , <br className="hidden sm:block" />
              Bright in Service
            </h1>

            <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              We build trust through solid quality and responsive, dependable
              service at every stage of your project.
            </p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={handleWhatsApp}
                className="
                  bg-gradient-to-r from-indigo-500 to-indigo-800
                  text-white px-7 py-3.5 rounded-lg
                  flex items-center justify-center gap-2
                  shadow-lg hover:shadow-2xl
                  transition-transform hover:scale-105
                "
              >
                <MessageCircle size={20} />
                <span className="font-semibold">Free Consultation</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToContact}
                className="
                  bg-white text-slate-800
                  hover:bg-slate-100
                  px-7 py-3.5 rounded-lg
                  border border-slate-300
                  font-semibold
                  transition-transform hover:scale-105
                "
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              relative
              h-[100vw] sm:h-[320px] md:h-[420px] lg:h-[31vw]  w-[100vw] lg:w-[50vw]
              clip-diagonal 
            "
          >
            <div className="absolute inset-0 overflow-hidden">
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
