"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  const labelClass = "text-sm font-medium text-[#1470A9]";
  const inputClass =
    "w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:border-[#1470A9] transition";

  // 🔹 Social Links (SVG)
  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.76 8.43-4.91 8.43-9.93z"/>
        </svg>
      ),
      link: "https://www.facebook.com/Skyblueaero1",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"/>
        </svg>
      ),
      link: "https://www.linkedin.com/company/skyblueaero/posts/?feedView=all",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2H21l-6.5 7.44L22 22h-6.828l-5.35-7.02L3.9 22H1l6.95-7.96L2 2h6.99l4.84 6.33L18.244 2z"/>
        </svg>
      ),
      link: "https://x.com/skyblueaero1",
    },
  ];

  // 🔹 Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors: any = {};

    if (!formState.fullName) newErrors.fullName = "Name is required";
    if (!formState.phone) newErrors.phone = "Phone is required";
    if (!formState.email) newErrors.email = "Email is required";
    if (!formState.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz7owVzSx_BwRm2MSTn6TYEcrOsev3BaAfutx7yKovCJWq6sAxabn-j8gLVvDwk7ccx/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            ...formState,
            formType: "Contact Page",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      toast.success("Request sent successfully 🚀");

      setFormState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send ❌");
    }

    setSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-[#FFF9F0] text-[#0F172A] px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#1470A9] mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Let’s Plan Your Next Journey
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl mb-6 font-semibold text-[#1470A9]">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  ref={firstInputRef}
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
              </div>

              <div>
                <label className={labelClass}>Mobile Number</label>
                <input
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-4 bg-[#EF7D05] text-white py-3 rounded-xl font-semibold hover:bg-[#d96f04] transition"
              >
                {submitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>

          {/* INFO + SOCIAL */}
          <div className="space-y-8">

            {/* Contact */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl mb-4 font-semibold text-[#1470A9]">
                Contact Info
              </h2>
              <p>Sales@skyblue.aero</p>
              <p>Ops@skyblue.aero</p>
              <p>+1 647 694 6122</p>
            </div>

            {/* Social */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl mb-4 font-semibold text-[#1470A9]">
                Follow Us
              </h2>

              <div className="flex gap-5">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="group w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:border-[#1470A9] hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-gray-600 group-hover:text-[#1470A9] group-hover:scale-110 transition">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}