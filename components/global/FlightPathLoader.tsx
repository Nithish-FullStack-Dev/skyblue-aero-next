import { useEffect, useRef, useState } from "react";
import "./FlightPathLoader.css";

const FLIGHT_PATH = `
  M 118 304
  C 130 320, 154 314, 180 280
  C 196 258, 193 230, 176 228
  C 156 227, 157 255, 176 262
  C 190 268, 206 250, 197 229
  C 189 250, 198 280, 203 312
  C 206 334, 202 352, 200 362
  C 202 338, 210 315, 220 290
  C 230 270, 250 258, 275 255
  C 287 250, 296 225, 301 200
  C 304 180, 294 156, 286 150
  C 276 143, 277 168, 287 177
  C 295 184, 306 188, 325 194
  C 365 201, 415 200, 446 193
  C 465 188, 478 180, 490 168
  C 498 160, 501 143, 493 126
  C 486 113, 462 118, 451 128
  C 441 138, 441 156, 451 164
  C 465 176, 488 169, 504 155
  C 519 142, 531 124, 538 106
  C 545 87, 545 64, 535 51
  C 526 40, 547 52, 549 64
  C 552 78, 549 84, 560 85
  C 577 86, 590 84, 602 68
  C 614 52, 620 32, 637 16
  C 655 0, 688 2, 719 0
  C 739 0, 755 0, 772 0
`;

const LOOP_LETTERS = [
  { char: "A", x: 164, y: 394 },
  { char: "E", x: 288, y: 308 },
  { char: "R", x: 466, y: 258 },
  { char: "O", x: 570, y: 208 },
];

const TEXT = "Welcome TO SKYBLUE AERO";

const DURATION = 3200;
const LETTER_START_DELAY = 0.4;
const LETTER_STAGGER = 0.5;
const PLANE_ROTATION_OFFSET = 0;

function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function FlightPathLoader() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<SVGGElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // ✅ TYPEWRITER STATE
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();

    try {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    } catch {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, []);

  // ✅ TYPEWRITER EFFECT
  useEffect(() => {
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(TEXT.slice(0, index + 1));
        index++;

        if (index === TEXT.length) {
          clearInterval(interval);
        }
      }, 70); // speed

      return () => clearInterval(interval);
    }, 400); // slight delay for better sync

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const plane = planeRef.current;

    if (!path || !plane) return;

    const totalLength = path.getTotalLength();
    let raf = 0;
    let startTime = 0;

    const renderAt = (progress: number, rawProgress: number) => {
      const currentLength = totalLength * progress;
      const point = path.getPointAtLength(currentLength);

      const prev = path.getPointAtLength(Math.max(0, currentLength - 1));
      const next = path.getPointAtLength(Math.min(totalLength, currentLength + 1));

      const angle =
        (Math.atan2(next.y - prev.y, next.x - prev.x) * 180) / Math.PI +
        PLANE_ROTATION_OFFSET;

      const takeoffPhase = Math.min(rawProgress / 0.2, 1);
      const lift = Math.sin(takeoffPhase * Math.PI) * 8;

      let scale = 1;
      if (rawProgress < 0.2) {
        scale = 0.9 + takeoffPhase * 0.18;
      } else if (rawProgress < 0.34) {
        const settle = (rawProgress - 0.2) / 0.14;
        scale = 1.08 - settle * 0.08;
      }

      plane.setAttribute(
        "transform",
        `translate(${point.x} ${point.y - lift}) rotate(${angle}) scale(${scale})`
      );
    };

    if (reducedMotion) {
      renderAt(1, 1);
      return;
    }

    const tick = (time: number) => {
      if (!startTime) startTime = time;

      const elapsed = Math.min(time - startTime, DURATION);
      const raw = elapsed / DURATION;
      const eased = easeInOutCubic(raw);

      renderAt(eased, raw);

      if (elapsed < DURATION) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  return (
    <div className="flight-loader" aria-label="Loading">
      <div className="flight-loader__inner">
        <svg
          className="flight-loader__svg"
          viewBox="0 0 974 433"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Airplane flying along a dotted path"
        >
          <path d={FLIGHT_PATH} className="flight-loader__path-base" />

          <path
            ref={pathRef}
            d={FLIGHT_PATH}
            className={`flight-loader__path-dots ${
              reducedMotion ? "" : "flight-loader__path-dots--animate"
            }`}
          />

          <g className="flight-loader__letters" aria-hidden="true">
            {LOOP_LETTERS.map((item, index) => (
              <text
                key={item.char}
                x={item.x}
                y={item.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`flight-loader__loop-letter ${
                  reducedMotion ? "flight-loader__loop-letter--visible" : ""
                }`}
                style={
                  reducedMotion
                    ? undefined
                    : {
                        animationDelay: `${LETTER_START_DELAY + index * LETTER_STAGGER}s`,
                      }
                }
              >
                {item.char}
              </text>
            ))}
          </g>

          <g ref={planeRef} className="flight-loader__plane">
            <image
              href="/images/landed.png"
              x="-34"
              y="-34"
              width="68"
              height="68"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </svg>

        {/* ✅ TYPEWRITER TEXT */}
        <h2 className="flight-loader__text">
          {displayedText}
          {/* <span className="cursor">|</span> */}
        </h2>
      </div>
    </div>
  );
}