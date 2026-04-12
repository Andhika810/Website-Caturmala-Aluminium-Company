import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../animations/scroll";
import cutting from "../assets/cutting.jpg";
import customAluminium from "../assets/customaluminium.jpg";
import supplyDistribution from "../assets/supply&distribution.jpg";
import logistics from "../assets/logistics.jpg";
import consultation from "../assets/consultation.jpg";

export default function Services() {
  const services = [
    {
      image: [customAluminium],
      title: "Dies & Mould",
      description:
        "Design and production of aluminium profile dies based on your project needs — from architectural structures to industrial parts",
    },
    {
      image: [supplyDistribution],
      title: "Supply & Distribution",
      description:
        "We manufacture our own aluminium extrusion lines, while also offering aluminium profiles, hollows, plates, and accessories from leading brands like Alexindo and YKK.",
    },
    {
      image: [cutting],
      title: "Cutting & Finishing",
      description:
        "Accurate cutting, surface finishing, and packaging services to meet project specifications",
    },
    {
      image: [consultation],
      title: "Material Consultation",
      description:
        "Helping clients choose the right alloy, thickness, and finish to achieve both performance and aesthetics",
    },
    {
      image: [logistics],
      title: "Logistics & Fulfillment",
      description:
        "Fast delivery and flexible scheduling to ensure every material arrives safely and on time",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-24 bg-white px-6 md:px-40 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <span className="text-[#473472] font-semibold text-sm uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide high-quality aluminium solutions, seamless service, and
              reliable support for your projects.
            </p>
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* ===== BARIS ATAS (3 GRID) ===== */}
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}

            <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-10">
              {services.slice(3, 5).map((service, index) => (
                <div key={index} className="w-full md:w-1/3">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== CARD COMPONENT ===== */
function ServiceCard({ service }) {
  return (
    <div
      className="
        group bg-gradient-to-br from-amber-200 via-slate-100 to-white
        p-8 md:p-10 rounded-2xl
        border border-gray-100
        text-center
        h-full
      "
    >
      {/* IMAGE BULAT BESAR */}
      <div className="flex justify-center mb-8">
        <div
          className="
            w-28 h-28
            rounded-full
            overflow-hidden
            shadow-xl
            ring-4 ring-white
            group-hover:scale-110
            transition-transform
          "
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {service.description}
      </p>
    </div>
  );
}
