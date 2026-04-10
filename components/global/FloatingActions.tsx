"use client";

import MagneticButton from "./MagneticButton";
import { MessageCircle } from "lucide-react";

const FloatingActions = ({ onOpenCharter }: { onOpenCharter: () => void }) => {
  return (
    <>
      {/* CENTER BUTTON */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <MagneticButton onClick={onOpenCharter} className="bg-white">
          Book a Charter
        </MagneticButton>
      </div>

      {/* WHATSAPP (RIGHT SIDE) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/44000000000?text=I%27d%20like%20to%20enquire%20about%20charter%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={22} className="text-white" />
        </a>
      </div>
    </>
  );
};

export default FloatingActions;