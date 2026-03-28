import { Target, Eye, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "../../animations/scroll";

export default function VisionMission() {
  const items = [
    {
      icon: Eye,
      title: "Vision",
      description:
        "To become a trusted aluminium solution partner that connects innovation, craftsmanship, and reliability in every project.",
    },
    {
      icon: Target,
      title: "Mission",
      description:
        "Delivering high-quality aluminium solutions, seamless customer service, and reliable support for local industries.",
    },
    {
      icon: CheckCircle,
      title: "Commitment",
      description:
        "Preserving integrity, timeliness, and the quality of work through experienced experts and modern technology.",
    },
  ];

  return (
    <section id="visi-misi" className="py-20 px-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <div className="text-center mb-14">
            <span className="text-[#473472] font-semibold text-sm uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
              Our Company
            </span>
            <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Vision & Mission
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our main foundation in building trust, quality, and long-term
              relationships with every client.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={30} className="text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
