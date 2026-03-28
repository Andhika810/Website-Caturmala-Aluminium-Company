import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.jpeg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.jpg";
import client7 from "../assets/client7.jpeg";

export default function Partners() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];

  return (
    <section className="w-full overflow-hidden px-40 py-12 bg-white">
      <div className="text-center mb-16">
        <span className="text-[#473472] font-semibold text-xl underline underline-offset-4 decoration-cyan-500 decoration-2 decoration-double">
          Our Client
        </span>
      </div>
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max items-center gap-20"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...clients, ...clients].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client"
              className="h-10 w-auto opacity-60 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Gradient Fade */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
