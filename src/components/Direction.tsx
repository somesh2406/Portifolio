export default function Direction() {
  return (
    <section className="bg-[#f5f5f3] px-5 py-24 sm:px-8 sm:py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">
          <div className="text-[10px] font-semibold tracking-[0.18em] text-gray-400">
            06 / NOW
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl leading-[0.98] tracking-[-0.07em] text-gray-950 sm:text-5xl md:text-6xl">
              Going deeper into
              <br />
              the machinery.
            </h2>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7">
                <span className="text-[10px] tracking-[0.16em] text-gray-400">
                  LEARNING
                </span>

                <h3 className="mt-10 text-xl tracking-[-0.04em]">Kubernetes</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Container orchestration and production application operations.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7">
                <span className="text-[10px] tracking-[0.16em] text-gray-400">
                  LEARNING
                </span>

                <h3 className="mt-10 text-xl tracking-[-0.04em]">Terraform</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Infrastructure as code and repeatable cloud infrastructure.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-950 p-7 text-white">
                <span className="text-[10px] tracking-[0.16em] text-white/40">
                  DIRECTION
                </span>

                <h3 className="mt-10 text-xl tracking-[-0.04em]">
                  Platform Engineering
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Building the systems that make software teams faster and more
                  reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
