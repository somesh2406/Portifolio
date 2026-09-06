import { ArrowUp, ArrowUpRight } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[75vh] scroll-mt-20 overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 sm:py-32 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contact-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-between">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.18em] text-white/35">
            07 / CONTACT
          </p>

          <h2 className="mt-8 max-w-5xl text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl md:text-8xl">
            Let's build
            <br />
            something useful.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
            Open to software engineering opportunities, interesting technical
            problems, freelance work and collaborations.
          </p>
        </div>

        <div className="mt-20 grid gap-3 sm:flex sm:flex-wrap">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-8 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/75 transition-colors hover:bg-white hover:text-gray-950 sm:justify-start"
          >
            LinkedIn
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-8 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/75 transition-colors hover:bg-white hover:text-gray-950 sm:justify-start"
          >
            GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-between gap-8 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/75 transition-colors hover:bg-white hover:text-gray-950 sm:justify-start"
          >
            Email Me
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-20 flex items-end justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] tracking-[0.15em] text-white/25">
            SOMESWARA RAO
          </span>

          <button
            type="button"
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-[9px] tracking-[0.15em] text-white/30 transition-colors hover:text-white"
          >
            BACK TO TOP
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
