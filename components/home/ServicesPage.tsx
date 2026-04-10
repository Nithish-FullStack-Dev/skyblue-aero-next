"use client";

import { ServiceCard } from "@/components/ui/service-card";

export default function ServicesPage() {
  const services = [
    {
      title: "Trip Support",
      desc: "Comprehensive global trip support covering permits, fuel coordination, and logistics.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      variant: "red",
      className: "col-span-2 row-span-2",
    },
    {
      title: "Air Charters",
      desc: "Charter private aircraft with global access and full flexibility.",
      img: "https://images.unsplash.com/photo-1508614999368-9260051292e5",
      variant: "default",
    },
    {
      title: "Aircraft Brokerage",
      desc: "Acquisition, sale, and leasing through a trusted global network.",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      variant: "gray",
    },
    {
      title: "Aircraft Maintenance",
      desc: "High-standard maintenance ensuring safety and performance.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      variant: "blue",
    },
    {
      title: "Crew Leasing",
      desc: "Professional pilots and crew delivering world-class service.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      variant: "default",
      className: "col-span-2",
    },
  ];

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Aviation Solutions, Precisely Tailored to Every Journey
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            href="#"
            imgSrc={service.img}
            imgAlt={service.title}
            variant={
              service.variant as "red" | "default" | "gray" | "blue"
            }
            className={`h-full ${service.className || ""}`}
          />
        ))}
      </div>
    </section>
  );
}