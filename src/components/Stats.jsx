import { Building2, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/scroll";

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      value: "10+",
      label: "Project Completed",
      description: "Various scales of projects",
    },
    {
      icon: Users,
      value: "30+",
      label: "Satisfied Client",
      description: "Across Indonesia",
    },
    {
      icon: Award,
      value: "3+",
      label: "Years of Experience",
      description: "Aluminum Industry",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
      description: "Customer rating",
    },
  ];

  return (
    <section className="py-6 bg-white px-40 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-black" />
                    </div>

                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-gray-900 font-semibold mt-1">
                        {stat.label}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
