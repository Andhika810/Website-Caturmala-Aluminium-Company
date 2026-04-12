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
    <section className="relative w-full py-16 bg-white px-6 md:px-40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2 h-full border border-gray-100">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-full group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                      <Icon
                        size={32}
                        className="text-slate-900 group-hover:text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-4xl font-bold text-slate-900 mb-1">
                        {stat.value}
                      </p>
                      <p className="text-slate-800 font-bold text-lg leading-tight">
                        {stat.label}
                      </p>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">
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
