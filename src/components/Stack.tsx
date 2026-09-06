import { coreStack, learningStack, workingStack } from "./constants";
import SectionHeading from "./SectionHeading";
import StackGroup from "./StackGroup";

export default function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 / TECHNOLOGY"
          title={
            <>
              The tools
              <br />I work with.
            </>
          }
          description="Not everything here has the same level of depth. The grouping reflects where I am strongest, where I actively work, and what I'm currently exploring."
        />

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          <StackGroup
            title="CORE"
            description="Technologies and engineering areas I want associated with my work."
            items={coreStack}
            emphasis
          />

          <StackGroup
            title="WORKING WITH"
            description="Tools and technologies I've used across products and engineering systems."
            items={workingStack}
          />

          <StackGroup
            title="EXPLORING"
            description="Technologies I'm actively learning and moving deeper into."
            items={learningStack}
          />
        </div>
      </div>
    </section>
  );
}
