import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6285711200302?text=Halo,%20saya%20tertarik%20dengan%20layanan%20aluminium%20Anda",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle
        size={28}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
}
