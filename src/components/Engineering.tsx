import SectionHeading from "./SectionHeading";

export default function Engineering() {
  const layers = [
    {
      number: "01",
      title: "PRODUCT",
      items: ["Web", "Mobile", "User workflows"],
    },
    {
      number: "02",
      title: "APPLICATION",
      items: ["React", "React Native", "Android"],
    },
    {
      number: "03",
      title: "BACKEND",
      items: ["Go", "Java", "Rust", "Redis", "Kafka"],
    },
    {
      number: "04",
      title: "PLATFORM",
      items: ["SSO", "Packages", "SDKs", "Design systems"],
    },
    {
      number: "05",
      title: "DELIVERY",
      items: ["Jenkins", "Docker", "Nginx", "Bash"],
    },
    {
      number: "06",
      title: "INFRASTRUCTURE",
      items: ["Linux", "Azure", "Kubernetes", "Terraform"],
    },
  ];

  return (
    <section
      id="engineering"
      className="scroll-mt-20 bg-black px-5 py-24 text-white sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="04 / ENGINEERING"
          dark
          title={
            <>
              I don't just work
              <br />
              at one layer.
            </>
          }
          description="My work has gradually moved across the stack — from building interfaces and applications to the systems used to authenticate, package, deliver and operate them."
        />

        <div className="mt-20 grid gap-3">
          {layers.map((layer) => (
            <div
              key={layer.number}
              className="group grid gap-5 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:bg-white/[0.06] sm:p-7 md:grid-cols-[80px_220px_1fr] md:items-center"
            >
              <span className="text-[10px] tracking-[0.14em] text-white/25">
                {layer.number}
              </span>

              <h3 className="text-sm font-semibold tracking-[0.14em] text-white">
                {layer.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45 transition-colors group-hover:border-white/20 group-hover:text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-lg leading-8 tracking-[-0.03em] text-white/55 sm:text-xl">
            The direction I'm moving toward is platform engineering and cloud
            infrastructure — understanding not only how applications are
            written, but how engineering teams build, ship and operate them.
          </p>
        </div>
      </div>
    </section>
  );
}
