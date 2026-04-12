import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../animations/scroll";
import aboutus from "../../assets/aboutus.jpg";

export default function About() {
  return (
    <section
      id="tentang"
      className="py-20 px-6 md:px-40 bg-white w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT – PROFILE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6 order-1"
          >
            <div>
              <span className="text-[#473472] font-semibold text-sm uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
                About Us
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Your Trusted Partner for Aluminum Solutions
              </h2>

              {/* Gambar Khusus Mobile (Hanya muncul di HP, di bawah judul) */}
              <div className="block md:hidden my-8">
                <img
                  src={aboutus}
                  alt="Team Aluminium"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                PT Caturmala Cipta Alumindo is a growing aluminium solution
                company based in South Jakarta, specializing in aluminium
                extrusion products and custom extrusion services for
                construction, industrial, and interior applications. We source
                from reputable manufacturers to ensure precision, durability,
                and consistent product quality while maintaining flexible order
                quantities and fast response for every client. Caturmala Cipta
                Alumindo is committed to delivering reliable aluminium extrusion
                solutions through service excellence, innovative design, and
                strong supply chain support.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT – IMAGE (Hanya muncul di Desktop) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block order-2"
          >
            <div className="relative mb-6 md:mb-12">
              <img
                src={aboutus}
                alt="Team Aluminium"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10 bg-slate-100"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
