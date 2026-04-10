"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";

const navLinks = [
  // { label: "Air Charters", path: "/charters" },
  
  { label: "Trip Support", path: "/trip-support" },
  { label: "Brokerage", path: "/brokerage" },
  { label: "Maintenance", path: "/maintenance" },
  { label: "Crew Leasing", path: "/crew-leasing" },
  // { label: "About", path: "/about" },
  // { label: "Gallery", path: "/gallery" },
  // { label: "Blog", path: "/blog" },
];

const Navigation = ({
  onOpenQuote,
  showLogo,
}: {
  onOpenQuote: () => void;
  showLogo?: boolean;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-3">
          {/* <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-tight text-brand-navy">
            Skyblue<span className="text-brand-gold">Aero</span>
          </Link>  */}
          <Link to="/" className="flex items-center">
            {showLogo && (
              <motion.img
                src="/logo.png"
                layoutId="logo"
                alt="SkyblueAero Logo"
                className="h-8 md:h-10 w-auto"
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                }}
              />
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              const baseTextColor = isActive
                ? "text-brand-gold"
                : scrolled
                ? "text-brand-navy/80"
                : "text-white";

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative inline-block font-body font-extrabold text-base tracking-wide transition-colors duration-300 ${baseTextColor}`}
                >
                  <span className="relative block whitespace-nowrap">
                    {/* Default visible text */}
                    <span
                      className={`block transition-opacity duration-200 ${
                        hoveredLink === link.path ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Typewriter hover text */}
                    <motion.span
                      initial={false}
                      animate={
                        hoveredLink === link.path
                          ? {
                              width: "100%",
                              opacity: 1,
                            }
                          : {
                              width: "0%",
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 0.45,
                        ease: "linear",
                      }}
                      className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-brand-gold pointer-events-none"
                      style={{
                        borderRight:
                          hoveredLink === link.path
                            ? "1.5px solid currentColor"
                            : "none",
                      }}
                    >
                      {link.label}
                    </motion.span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              onClick={onOpenQuote}
              className="bg-brand-navy text-brand-cream px-6 py-2.5 text-sm font-body tracking-wide hover:bg-brand-obsidian transition-colors"
            >
              Quick Quote
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-brand-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-obsidian flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="font-display text-2xl text-brand-cream hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
                className="mt-4 bg-orange-500 text-brand-obsidian px-8 py-3 font-body text-sm tracking-wide"
              >
                Quick Quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;