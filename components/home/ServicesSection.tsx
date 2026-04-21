import React, { ElementType, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plane } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  className: string;
  delay: number;
  link?: string;
  cardAos: string;
};

const services: ServiceItem[] = [
  {
    title: "Trip Support",
    description:
      "Comprehensive global trip support covering permits, fuel coordination, ground handling, and logistics—ensuring every flight operates with precision across all destinations.",
    className: "",
    delay: 50,
    link: "/trip-support",
    cardAos: "fade-right",
  },
  {
    title: "Air Charters",
    description:
      "Charter private aircraft on demand with access to a worldwide fleet. Experience unmatched flexibility, complete privacy, and a journey tailored entirely around your schedule.",
    className: "",
    delay: 140,
    link: "/charters",
    cardAos: "fade-up",
  },
  {
    title: "Aircraft Brokerage",
    description:
      "Specialized aircraft brokerage for acquisition, sale, and leasing—connecting you with the right opportunities through a trusted global network.",
    className: "",
    delay: 230,
    link: "/brokerage",
    cardAos: "fade-left",
  },
  {
    title: "Aircraft Maintenance",
    description:
      "Dependable maintenance solutions that uphold the highest standards of safety, compliance, and performance—delivered with meticulous attention to detail.",
    className: "",
    delay: 320,
    link: "/maintenance",
    cardAos: "fade-up-right",
  },
  {
    title: "Crew Leasing",
    description:
      "Access highly trained pilots and cabin crew who bring professionalism, safety, and world-class service to every operation.",
    className: "",
    delay: 410,
    link: "/crew-leasing",
    cardAos: "fade-up-left",
  },
  {
    title: "Contract Fuel",
    description:
      "We provide you with a single source global fuel supply at over 4000 world-wide locations, at discounted rates. Every single fuel uplift is coordinated by our 24x7 Ops Team ensuring prompt service at the bay.",
    className: "",
    delay: 500,
    link: "/contract-fuel",
    cardAos: "fade-up",
  },
];

type TypewriterTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  as: Tag = "h2",
  className = "",
  speed = 2,
  startDelay = 0,
  onComplete,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayText("");
          setIsComplete(false);
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setDisplayText("");
          setIsComplete(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (!isVisible) return;

  if (displayText.length >= text.length) {
    setIsComplete(true);
    onComplete?.(); // 👈 TRIGGER CALLBACK
    return;
  }

  const timeout = window.setTimeout(
    () => {
      setDisplayText(text.slice(0, displayText.length + 1));
    },
    displayText.length === 0 ? startDelay : speed
  );

  return () => window.clearTimeout(timeout);
}, [displayText, isVisible, speed, startDelay, text, onComplete]);

  return (
    <div ref={wrapperRef}>
      <Tag className={className}>
        {displayText}
        {isVisible && !isComplete && (
          <span className="ml-1 inline-block animate-pulse">|</span>
        )}
      </Tag>
    </div>
  );
};


const MovingPlanes: React.FC = () => {
  return (
    <div className="relative mb-2 h-5 -mt-5 overflow-hidden">
      <div className="flex w-max animate-[planeLoop_6s_linear_infinite] gap-6">
        {[...Array(10)].map((_, i) => (
          <Plane key={"a" + i} className="h-5 w-5 text-white/80 shrink-0" />
        ))}

        {[...Array(10)].map((_, i) => (
          <Plane key={"b" + i} className="h-5 w-5 text-white/80 shrink-0" />
        ))}

        {[...Array(10)].map((_, i) => (
          <Plane key={"c" + i} className="h-5 w-5 text-white/80 shrink-0" />
        ))}
      </div>

      <style>
        {`
          @keyframes planeLoop {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

type ServiceCardProps = {
  title: string;
  description: string;
  className?: string;
  delay?: number;
  link?: string;
  cardAos?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  
  title,
  description,
  className = "",
  delay = 0,
  link,
  cardAos = "fade-up",
}) => {
  return (
    <div
      data-aos={cardAos}
      data-aos-delay={delay}
      data-aos-duration="950"
      data-aos-easing="ease-out-cubic"
      data-aos-anchor-placement="top-bottom"
      className={`group relative overflow-hidden rounded-[28px] border border-dashed border-white/70 bg-black/35 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/14 hover:shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-cyan-300/[0.06] opacity-70" />
      <CornerPlusIcons />

      <div className="relative z-10">
        <div
          data-aos="fade-down"
          data-aos-delay={delay + 120}
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
        >
          {/* <MovingPlanes /> */}
        </div>

        <h3
          data-aos="fade-up"
          data-aos-delay={delay + 180}
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
          className="text-[28px] leading-none font-normal text-white sm:text-[32px]"
        >
          {title}
        </h3>

        <p
          data-aos="fade-up"
          data-aos-delay={delay + 260}
          data-aos-duration="760"
          data-aos-easing="ease-out-cubic"
          className="mt-5 max-w-[32rem] text-base leading-8 text-white/80 sm:text-[17px]"
        >
          {description}
        </p>

        {link && (
          <a
            href={link}
            data-aos="fade-up"
            data-aos-delay={delay + 340}
            data-aos-duration="760"
            data-aos-easing="ease-out-cubic"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/60 pb-1 transition-all duration-300 hover:gap-3 hover:border-white"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

const CornerPlusIcons: React.FC = () => {
  return (
    <>
      <PlusIcon className="-left-3 -top-3" />
      <PlusIcon className="-right-3 -top-3" />
      <PlusIcon className="-bottom-3 -left-3" />
      <PlusIcon className="-bottom-3 -right-3" />
    </>
  );
};

const PlusIcon = ({ className = "" }: { className?: string }) => {
  return (
    <span className={`absolute z-10 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6 text-white/80"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5v14M5 12h14"
        />
      </svg>
    </span>
  );
};

const ServicesSection: React.FC = () => {
  const [showCards, setShowCards] = useState(false);
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 850,
      easing: "ease-out-cubic",
      offset: 70,
      anchorPlacement: "top-bottom",
    });

    const refresh = () => AOS.refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/sky.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-white/15 bg-black/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:p-5 lg:p-8">
          <div className="max-w-4xl">
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-white/80"
            >
              Our Services
            </p>

            <TypewriterText
  as="h2"
  text="Aviation Solutions, Precisely Tailored to Every Journey"
  className="max-w-4xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
  speed={1}
  startDelay={0}
  onComplete={() => {
    setTimeout(() => {
      setShowCards(true);
      AOS.refresh(); // 👈 re-trigger AOS after render
    }, 1); // slight delay feels smoother
  }}
/>
          </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
  {showCards &&
    services.map((service) => (
      <ServiceCard
        key={service.title}
        title={service.title}
        description={service.description}
        className={service.className}
        delay={service.delay}
        link={service.link}
        cardAos={service.cardAos}
      />
    ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;