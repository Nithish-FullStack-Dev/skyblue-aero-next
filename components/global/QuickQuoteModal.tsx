"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface QuickQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  message: string;
  // honeypot: string;
}

const QuickQuoteModal = ({ open, onClose }: QuickQuoteModalProps) => {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    // honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setErrors({});
      setFormState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
        // honeypot: "",
      });
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!formState.fullName.trim()) newErrors.fullName = "Name is required";

    if (!/^[6-9]\d{9}$/.test(formState.phone))
      newErrors.phone = "Enter valid mobile number";

    if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Enter valid email";

    if (!formState.message.trim())
      newErrors.message = "Please enter your requirement";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // if (formState.honeypot) return;

  if (!validate()) return;

  setSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbz7owVzSx_BwRm2MSTn6TYEcrOsev3BaAfutx7yKovCJWq6sAxabn-j8gLVvDwk7ccx/exec",
      {
        method: "POST",
        mode: "no-cors", // 🔥 IMPORTANT
        body: JSON.stringify({
          ...formState,
          formType: "Quick Quote",
          timestamp: new Date().toISOString(),
        }),
      }
    );

    toast.success("Request sent successfully 🚀");
    setSubmitted(true);

  } catch (error) {
    console.error(error);
    toast.error("Failed to send ❌");
  }

  setSubmitting(false);
};

  const inputClass =
    "w-full bg-transparent border-b border-brand-cream/20 text-brand-cream py-3 outline-none transition-all focus:border-brand-gold placeholder:text-brand-cream/30";

  const labelClass = "text-xs text-brand-cream/60 uppercase tracking-wide";

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-brand-obsidian/95 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="relative w-full max-w-xl mx-4 bg-brand-obsidian border border-brand-cream/10 p-6 md:p-10 z-10 rounded-2xl shadow-xl  "
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-cream/40 hover:text-brand-cream"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl md:text-3xl text-brand-cream mb-6">
                  Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* <input
                    type="text"
                    name="honeypot"
                    className="hidden"
                    onChange={handleChange}
                  /> */}

                  {/* Name */}
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      ref={firstInputRef}
                      name="fullName"
                      placeholder="Sunny"
                      value={formState.fullName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Mobile Number</label>
                    <input
                      name="phone"
                      placeholder="9876543210"
                      value={formState.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      name="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us your requirements..."
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
  type="submit"
  disabled={submitting}
  className="mt-4 bg-orange-500 text-brand-obsidian py-3 rounded-xl font-semibold hover:bg-orange-500/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
>
  {submitting ? (
    <>
      <Loader2 className="animate-spin" size={18} />
      Sending...
    </>
  ) : (
    "Send Request"
  )}
</button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-brand-obsidian" />
                </div>
                <h3 className="text-xl text-brand-cream mb-2">Message Sent</h3>
                <p className="text-brand-cream/60 text-sm">
                  We'll contact you shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickQuoteModal;