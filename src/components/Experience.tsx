import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 / EXPERIENCE"
          dark
          title={
            <>
              Growing through
              <br />
              engineering.
            </>
          }
          description="My professional journey began in November 2023 at Craft Silicon, where my work has expanded across application development, backend engineering, platforms and delivery systems."
        />

        <div className="mt-20 border-t border-white/10">
          <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[180px_1fr_220px]">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-white/40">
                15 NOV 2023
              </p>
              <p className="mt-2 text-xs text-white/30">CAREER START</p>
            </div>

            <div>
              <p className="text-xs tracking-[0.14em] text-white/40">
                CRAFT SILICON PVT LTD
              </p>

              <h3 className="mt-3 text-2xl tracking-[-0.05em] sm:text-3xl">
                Software Development Engineer
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                Working across software products and engineering systems,
                spanning web, mobile, backend services, developer platforms,
                SDKs and delivery infrastructure.
              </p>
            </div>

            <div className="md:text-right">
              <span className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-[10px] tracking-[0.14em] text-white/50">
                PRESENT
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Web applications",
            "Mobile applications",
            "Backend systems",
            "Developer platforms",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-6"
            >
              <span className="text-[10px] text-white/30">0{index + 1}</span>

              <p className="mt-12 text-sm text-white/75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
