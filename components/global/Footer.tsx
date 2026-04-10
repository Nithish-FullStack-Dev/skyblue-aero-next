import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden py-16 md:py-24">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/footerlanding.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OPTIONAL DARK OVERLAY (for readability) */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* FOOTER CONTENT */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-white-aero.png" 
                alt="SkyblueAero Logo" 
                className="h-14 md:h-14 w-auto mb-10"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white max-w-xs font-medium">
              Sky Blue Aero delivers seamless private aviation solutions, offering charter services, global trip support, and expert aviation management.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#EF7D05] mb-6 font-semibold">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Air Charters", path: "/charters" },
                { name: "Aircraft Brokerage", path: "/brokerage" },
                { name: "Trip Support", path: "/trip-support" },
                { name: "Maintenance & Mgt", path: "/maintenance" },
                { name: "Crew Leasing", path: "/crew-leasing" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-sm text-white hover:text-[#EF7D05] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#EF7D05] mb-6 font-semibold">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Insights", path: "/blog" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-sm text-white hover:text-[#EF7D05] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#EF7D05] mb-6 font-semibold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white">
              <span className="font-medium">24/7 Operations Centre</span>
              <a 
                href="mailto:ops@skyblue.aero" 
                className="hover:text-[#EF7D05] transition-colors duration-300"
              >
                ops@skyblue.aero
              </a>
              <a 
                href="tel:+16476946122" 
                className="hover:text-[#EF7D05] transition-colors duration-300"
              >
                +1 (647) 694-6122
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white font-medium tracking-wide">
            © {new Date().getFullYear()} Skyblue Aero. All rights reserved. Powered by Outright Creators
          </p>
          <div className="flex gap-6 text-xs text-white font-medium tracking-wide">
            <Link to="/privacy" className="hover:text-[#EF7D05] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#EF7D05] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;