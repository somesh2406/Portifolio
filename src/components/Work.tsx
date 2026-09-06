import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-20 bg-[#f5f5f3] px-5 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title={
            <>
              Systems I've build
              <br />
              and helped building.
            </>
          }
          description="A selection of product and engineering work spanning fintech, identity, internal developer infrastructure and reusable software components."
        />

        <div className="mt-20 grid gap-5">
          <ProjectCard
            number="01"
            category="FINTECH"
            title="Loan Origination & Vehicle Loan Management"
            description="Fintech mobile and web applications built around loan origination and vehicle loan management workflows."
            tags={["Mobile", "Web", "Fintech", "Product Engineering"]}
            featured
          />

          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard
              number="02"
              category="IDENTITY"
              title="SSO Portal"
              description="A centralized portal for managing client applications with support for modern OIDC and enterprise SAML authentication flows."
              tags={["OIDC", "SAML", "SSO", "Web", "Backend Service"]}
            />

            <ProjectCard
              number="03"
              category="PLATFORM"
              title="Internal Package Platform"
              description="An organizational package platform for managing internal software packages, formats, metadata and publishing workflows."
              tags={["Platform", "Packages", "APIs", "Developer Experience"]}
            />
          </div>

          <ProjectCard
            number="04"
            category="DEVELOPER EXPERIENCE"
            title="SDKs & Design Systems"
            description="Reusable SDKs and design systems for web and mobile applications, designed to reduce duplication and create consistent building blocks across products."
            tags={["SDKs", "Design Systems", "React", "Mobile", "Web"]}
          />
        </div>
      </div>
    </section>
  );
}
