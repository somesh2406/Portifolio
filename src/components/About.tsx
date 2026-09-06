import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title={
            <>
              Beyond the
              <br />
              job title.
            </>
          }
          description="I work across multiple layers of software engineering — from user-facing applications and backend services to developer platforms and delivery infrastructure."
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "APPLICATIONS",
              text: "Web, mobile and product-facing software built around real user workflows.",
            },
            {
              number: "02",
              title: "SYSTEMS",
              text: "Backend services, APIs, authentication, data and integration-heavy systems.",
            },
            {
              number: "03",
              title: "PLATFORMS",
              text: "Developer tooling, package infrastructure, SDKs, design systems and CI/CD.",
            },
          ].map((item) => (
            <div key={item.number} className="bg-white p-7 sm:p-9">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-gray-400">
                {item.number}
              </span>

              <h3 className="mt-14 text-sm font-semibold tracking-[0.12em] text-gray-950">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-[1fr_2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            Engineering philosophy
          </p>

          <p className="max-w-3xl text-xl leading-relaxed tracking-[-0.04em] text-gray-800 sm:text-2xl">
            I like understanding the layer underneath the layer — not just
            making something work, but understanding how it gets built,
            packaged, delivered, authenticated and maintained.
          </p>
        </div>
      </div>
    </section>
  );
}
