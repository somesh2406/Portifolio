import type React from "react";
import { ArrowDown } from "lucide-react";
import potrait from "../assets/somesh.png";
import potrait_terminator from "../assets/somesh_terminator.png";
import StatsArc from "./StatsArc";

export default function Hero({
  canvasRef,
  maskImage,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  maskImage: string;
}) {
  return (
    <section id="home" className="hero relative scroll-mt-0 bg-black">
      <div className="relative h-dvh overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: "translate3d(var(--grid-x, 0px), var(--grid-y, 0px), 0)",
          }}
        >
          <svg
            className="h-full w-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Main portrait */}
        <div
          className="absolute inset-0 z-10 bg-size-[auto_220%] bg-position-[80%_center] bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: `url("${potrait}")`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-20 bg-black/15" />

        {/* Terminator / hover image */}
        <div
          className="absolute inset-0 z-30 bg-size-[auto_220%] bg-position-[80%_center] bg-no-repeat"
          style={{
            backgroundImage: `url("${potrait_terminator}")`,
            maskImage,
            WebkitMaskImage: maskImage,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-0 z-40 bg-linear-to-t from-black/75 via-black/10 to-black/10" />

        {/* Stats */}
        <StatsArc />

        {/* Hero content */}
        <div className="absolute bottom-[clamp(1.5rem,5vh,5rem)] left-5 z-50 max-w-87.5 sm:left-8 sm:max-w-xl md:left-12 lg:max-w-2xl">
          <p
            className="hero-rise text-[10px] font-semibold tracking-[0.18em] text-white/75 sm:text-xs"
            style={{ animationDelay: "0.15s" }}
          >
            SOFTWARE DEVELOPMENT ENGINEER
          </p>

          <h1
            className="hero-rise mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.09em] text-white"
            style={{ animationDelay: "0.3s" }}
          >
            I build software
            <br />
            from interface
            <br />
            to infrastructure.
          </h1>

          <p
            className="hero-rise mt-4 max-w-xl text-[clamp(0.75rem,1.2vw,1rem)] leading-relaxed text-white/80 sm:mt-5"
            style={{ animationDelay: "0.5s" }}
          >
            Applications [ Web & Mobile ], backend systems, developer platforms
            and the engineering infrastructure that connects them.
          </p>

          <div
            className="hero-rise mt-5 flex flex-wrap items-center gap-3 sm:mt-6"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              type="button"
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="group relative overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:px-8 sm:py-3.5"
            >
              <span className="relative z-10">View my work</span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <button
              type="button"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Let's connect
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[clamp(1rem,3vh,1.75rem)] right-6 z-50 hidden items-center gap-2 text-[9px] font-semibold tracking-[0.18em] text-white/50 lg:flex">
          SCROLL TO EXPLORE
          <ArrowDown size={12} />
        </div>

        {/* Hidden canvas used for the hover mask */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-[-9999px] top-[-9999px] opacity-0"
        />
      </div>
      <div className="h-20 bg-black" />
    </section>
  );
}
