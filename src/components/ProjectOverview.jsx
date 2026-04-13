import React from "react";
import { ChevronRight } from "lucide-react";

import fotoDeal from "../assets/deal.jpg";
import fotoGudang from "../assets/gudang.jpeg";
import fotoLoading from "../assets/loading.jpeg";
import fotoPengiriman from "../assets/pengiriman.jpeg";

export default function ProjectOverview() {
  const steps = [
    {
      title: "Strategic Alliance",
      image: fotoDeal,
      desc: "Membangun kepercayaan melalui konsultasi mendalam untuk memahami visi dan spesifikasi teknis proyek Anda.",
    },
    {
      title: "Premium Inventory",
      image: fotoGudang,
      desc: "Menjamin ketersediaan profil aluminium kualitas unggul yang siap mendukung skala proyek apa pun.",
    },
    {
      title: "Precision Handling",
      image: fotoLoading,
      desc: "Proses pemuatan profesional dengan standar keamanan tinggi untuk menjaga integritas material tetap sempurna.",
    },
    {
      title: "Seamless Delivery",
      image: fotoPengiriman,
      desc: "Komitmen ketepatan waktu distribusi hingga ke titik proyek sebagai bagian dari solusi rantai pasok kami.",
    },
  ];

  return (
    <section
      id="progress"
      className="w-full bg-slate-50 py-16 md:py-24 px-4 md:px-6 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#473472] font-semibold text-xs md:text-sm uppercase tracking-widest overline decoration-cyan-500 decoration-2 decoration-double">
              PROGRESS OVERVIEW
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 tracking-tight">
            High-Level Strategy
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Your strategic partner in material transformation, ensuring
            operational excellence and superior outcomes at every step
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Floating Number - Responsif Size */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-cyan-500 text-white flex items-center justify-center rounded-xl font-black z-20 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6 text-sm md:text-base">
                0{index + 1}
              </div>

              {/* Card Container - Adaptif h-[400px] di mobile ke h-[480px] di desktop */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[480px] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-4">
                {/* Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                {/* Text Content - Tetap terbaca di Mobile */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform transition-transform duration-500">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 tracking-tight flex items-center gap-2">
                    {step.title}
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h4>

                  {/* Decorative Line */}
                  <div className="h-px w-0 group-hover:w-full bg-cyan-500 transition-all duration-500 mb-4"></div>

                  {/* Description - Opacity disesuaikan agar tetap bisa diakses di mobile saat hover/tap */}
                  <p className="text-slate-200 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Progress Arrow - Hanya muncul di Desktop (Layar besar) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-30">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-cyan-500 border border-slate-50">
                    <ChevronRight className="w-5 h-5 stroke-[3px]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
