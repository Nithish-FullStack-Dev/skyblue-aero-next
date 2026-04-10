import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);
  // const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  const getScreenType = () => {
  if (typeof window === "undefined") {
    return { mobile: false, tablet: false };
  }

  const width = window.innerWidth;
  return {
    mobile: width < 640,
    tablet: width >= 640 && width < 1024,
  };
};

const [{ mobile: isMobile, tablet: isTablet }, setScreen] = useState(getScreenType());

//   useEffect(() => {
//     if (!rootRef.current) return;

//     // const handleScreenSize = () => {
//     //   const width = window.innerWidth;
//     //   setIsMobile(width < 640);
//     //   setIsTablet(width >= 640 && width < 1024);
//     // };
//     const handleScreenSize = () => {
//   setScreen(getScreenType());
// };

//     const resizeOverlay = () => {
//       const root = rootRef.current;
//       const svg = root?.querySelector("#pin-overlay");

//       if (!root || !svg) return;

//       const w = root.offsetWidth;
//       const h = root.offsetHeight;

//       gsap.set(svg, {
//         attr: { width: w, height: h },
//       });
//     };

//     const ctx = gsap.context(() => {
//       gsap.set(".hero-heading", {
//         autoAlpha: 0,
//         y: 40,
//         scale: 0.96,
//       });

//       gsap.set(".hero-paragraph", {
//         autoAlpha: 0,
//         y: 30,
//       });

//       gsap.set(".hero-overlay", {
//         autoAlpha: 1,
//         scale: 1,
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero-section",
//           start: "top top",
//           end: "+=900",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       tl.to(
//         ".hero-overlay",
//         {
//           scale: 55,
//           autoAlpha: 0,
//           ease: "power2.inOut",
//           duration: 1.2,
//         },
//         0
//       )
//         .to(
//           ".hero-heading",
//           {
//             autoAlpha: 1,
//             y: 0,
//             scale: 1,
//             ease: "power3.out",
//             duration: 0.7,
//           },
//           0.45
//         )
//         .to(
//           ".hero-paragraph",
//           {
//             autoAlpha: 1,
//             y: 0,
//             ease: "power3.out",
//             duration: 0.7,
//           },
//           0.95
//         );

//       handleScreenSize();
//       resizeOverlay();

//       window.addEventListener("resize", handleScreenSize);
//       window.addEventListener("resize", resizeOverlay);
//     }, rootRef);

//     return () => {
//       window.removeEventListener("resize", handleScreenSize);
//       window.removeEventListener("resize", resizeOverlay);
//       // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       ctx.revert();
//     };
//   }, []);

  


useEffect(() => {
  if (!rootRef.current) return;

  const handleScreenSize = () => {
    setScreen(getScreenType());
  };

  const resizeOverlay = () => {
    const root = rootRef.current;
    const svg = root?.querySelector("#pin-overlay");

    if (!root || !svg) return;

    const w = root.offsetWidth;
    const h = root.offsetHeight;

    gsap.set(svg, {
      attr: { width: w, height: h },
    });
  };

  const ctx = gsap.context(() => {
    gsap.set(".hero-heading", {
      autoAlpha: 0,
      y: 40,
      scale: 0.96,
    });

    gsap.set(".hero-paragraph", {
      autoAlpha: 0,
      y: 30,
    });

    gsap.set(".hero-overlay", {
      autoAlpha: 1,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=900",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".hero-overlay", {
      scale: 55,
      autoAlpha: 0,
      ease: "power2.inOut",
      duration: 1.2,
    })
      .to(".hero-heading", {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.7,
      }, 0.45)
      .to(".hero-paragraph", {
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        duration: 0.7,
      }, 0.95);

    handleScreenSize();
    resizeOverlay();

    window.addEventListener("resize", handleScreenSize);
    window.addEventListener("resize", resizeOverlay);
  }, rootRef);

  return () => {
    window.removeEventListener("resize", handleScreenSize);
    window.removeEventListener("resize", resizeOverlay);

    ctx.revert(); // ✅ ONLY THIS (DO NOT KILL ALL)
  };
}, []);


const desktopFontSize = 375;
  const tabletFontSize = 100;
  const mobileFontSize = 70;

  return (
    <div ref={rootRef} className="w-full bg-black">
      <section className="hero-section relative h-screen w-full overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 z-[0] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/map.mp4" type="video/mp4" />
        </video>

        {/* DARK LAYER */}
        <div className="absolute inset-0 z-[1] bg-black/25" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-[3] flex items-center justify-center px-4 sm:px-6 pointer-events-none">
          <div className="flex max-w-4xl flex-col items-center text-center">
            <h3 className="hero-heading text-white font-extrabold tracking-[0.05em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
              Where Every Journey Becomes Exceptional
            </h3>

            <p className="hero-paragraph mt-4 sm:mt-6 max-w-3xl text-white/90 text-sm sm:text-base md:text-[1.25rem] leading-[1.7] md:leading-[1.9] font-medium px-2 sm:px-0">
              Experience private aviation, seamlessly redefined. With SkyBlue
              Aero, charter on demand, access a global fleet, and rely on
              expert trip management—meticulously tailored to your schedule.
            </p>
          </div>
        </div>

        {/* SVG OVERLAY */}
        <div className="hero-overlay absolute inset-0 z-[4] flex items-center justify-center overflow-hidden pointer-events-none">
          <svg
            id="pin-overlay"
            viewBox="0 0 4535.43 2100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <defs>
              <mask id="text-cut">
                <rect width="100%" height="100%" fill="white" />

                {isMobile ? (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="VenusRising-Regular, 'Venus Rising', sans-serif"
                    fontSize={mobileFontSize}
                    fill="black"
                    letterSpacing="3"
                    fontWeight="900"
                  >
                    <tspan x="50%" dy="-0.7em">
                      SKYBLUE
                    </tspan>
                    <tspan x="50%" dy="1.35em">
                      AERO
                    </tspan>
                  </text>
                ) : isTablet ? (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="VenusRising-Regular, 'Venus Rising', sans-serif"
                    fontSize={tabletFontSize}
                    fill="black"
                    letterSpacing="6"
                    fontWeight="900"
                  >
                    SKYBLUE AERO
                  </text>
                ) : (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="VenusRising-Regular, 'Venus Rising', sans-serif"
                    fontSize={desktopFontSize}
                    fill="black"
                    letterSpacing="10"
                    fontWeight="900"
                  >
                    SKYBLUE AERO
                  </text>
                )}
              </mask>
            </defs>

            <rect width="100%" height="100%" fill="white" mask="url(#text-cut)" />
          </svg>
        </div>
      </section>
    </div>
  );
}