import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhatsAppButton from "./components/Button/Whatsappbutton";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import About from "./components/About/About";
import Portfolio from "./components/Portofolio";
import FAQ from "./components/FAQ";
import Visi from "./components/About/VisionMission";
import Client from "./components/Client";

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <Client />
      <Stats />
      <Services />
      <Portfolio />
      <About />
      <Visi />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
