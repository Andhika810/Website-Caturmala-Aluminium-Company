import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft } from "../animations/scroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to complete the aluminum project?",
      answer:
        "The completion time varies depending on the scale of the project. For a standard residential project, it usually takes 1-2 weeks, while a commercial project can take 3-8 weeks. We will provide a clear timeline after a site survey.",
    },
    {
      question: "Is there a warranty for the product and its workmanship?",
      answer:
        "Yes, we provide a warranty of up to 10 years for aluminum materials and 2 years for installation work. The warranty covers material damage, leaks, and other technical issues not caused by force majeure.",
    },
    {
      question:
        "Is it possible to customize the design according to my preferences?",
      answer:
        "Of course! We offer custom design services with a team of experienced designers. You can consult your design needs and preferences with us, and we will help bring them to life while still considering functionality and budget.",
    },
    {
      question: "How does the payment system work?",
      answer:
        "We provide a flexible payment system: 30% down payment after the deal, 40% when the materials arrive, and the remaining 30% after the work is completed. We also accept bank transfers, cash, and installments can be discussed for large projects.",
    },
    {
      question: "Do you offer delivery to other cities?",
      answer:
        "Yes, we deliver throughout Indonesia. For projects outside the city, we will calculate shipping and installation costs separately. Our team can also conduct a survey at your project location.",
    },
    {
      question: "What sets your aluminum products apart from the competitors?",
      answer:
        "We use grade A aluminum with industry-standard thickness, durable powder coating finish, imported quality hardware, and it is crafted by certified technicians.",
    },
    {
      question: "How do I get a price quote?",
      answer:
        "You can contact us via WhatsApp for a free consultation. We also provide a free on-site survey for accurate measurements and detailed quotes.",
    },
    {
      question: "Do you provide repair and maintenance services?",
      answer:
        "Yes, we provide after-sales services including repairs, maintenance, and parts replacement.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-6 md:px-40 bg-white w-full overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-[#473472] font-semibold text-sm uppercase tracking-wide overline decoration-cyan-500 decoration-2 decoration-double">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-2">
              Find answers to frequently asked questions about our services
            </p>
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors gap-4"
              >
                <span className="text-base md:text-lg font-semibold text-slate-900 leading-tight">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={20} className="text-blue-600 md:size-6" />
                  ) : (
                    <Plus size={20} className="text-gray-400 md:size-6" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-50 pt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
