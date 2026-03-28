import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/scroll";
import menaraEra from "../assets/menaraEra.jpg";
import kemayoran from "../assets/kemayoran.jpg";
import gbk from "../assets/gbk.jpg";
import polres from "../assets/polres.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Stadium Gelora Bung Karno",
      category: "Facility",
      image: [gbk],
      description:
        "Architectural aluminum applications in national sports facilities",
    },
    {
      title: "Jakata Kemayoran Building",
      category: "Commercial",
      image: [kemayoran],
      description:
        "Architectural aluminum system for commercial buildings in the Kemayoran area",
    },
    {
      title: "Sadikun Niaga Mas (Era Tower)",
      category: "Commercial",
      image: [menaraEra],
      description:
        "Architectural aluminum system for facades and building elements of office buildings.",
    },
    {
      title: "Polres Metro Jaya Jakarta Pusat",
      category: "Government Building",
      image: [polres],
      description:
        "Architectural aluminum applications in public police facility buildings.",
    },
  ];

  return (
    <section
      id="portofolio"
      className="py-20 px-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-white font-semibold text-sm  uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
              Our Portfolio
            </span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              Projects We Have Worked On
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              The trust of hundreds of clients reflects our commitment to
              delivering premium aluminium solutions across diverse projects.
            </p>
          </div>
        </motion.div>

        {/* Grid 2 Atas - 2 Bawah */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-[#473472] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
