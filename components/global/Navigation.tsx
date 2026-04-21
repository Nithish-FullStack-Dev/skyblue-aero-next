"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Contract Fuel", path: "/contract-fuel" },
  { label: "Trip Support", path: "/trip-support" },
  { label: "Brokerage", path: "/brokerage" },
  { label: "Maintenance", path: "/maintenance" },
  { label: "Charters", path: "/charters" },
  { label: "Crew Leasing", path: "/crew-leasing" },
];

const Navigation = ({
  onOpenQuote,
  showLogo,
}: {
  onOpenQuote: () => void;
  showLogo?: boolean;
}) => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // ✅ FIX: prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            {mounted && (
              <motion.img
                src="/logo.png"
                alt="SkyblueAero Logo"
                layoutId="logo"
                initial={false}
                animate={{
                  opacity: showLogo ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="h-8 md:h-10 w-auto"
              />
            )}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              const baseTextColor = isActive
                ? "text-brand-gold"
                : scrolled
                ? "text-brand-navy/80"
                : "text-white";

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative inline-block font-body font-extrabold text-base tracking-wide transition-colors duration-300 ${baseTextColor}`}
                >
                  <span className="relative block whitespace-nowrap">

                    {/* Normal text */}
                    <span
                      className={`block transition-opacity duration-200 ${
                        hoveredLink === link.path ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Hover animation */}
                    <motion.span
                      initial={false}
                      animate={
                        hoveredLink === link.path
                          ? { width: "100%", opacity: 1 }
                          : { width: "0%", opacity: 0 }
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

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              onClick={onOpenQuote}
              className="bg-brand-navy text-brand-cream px-6 py-2.5 text-sm font-body tracking-wide hover:bg-brand-obsidian transition-colors"
            >
              Reach Us
            </MagneticButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-brand-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>
      </header>

      {/* MOBILE MENU */}
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
                  href={link.path}
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
                Reach Us
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;