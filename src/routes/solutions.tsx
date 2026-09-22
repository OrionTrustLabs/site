import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerSolutions from "@/assets/banner-solutions.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Security Services - Orion Trust Labs" },
      { name: "description", content: "Smart contract audits, pre-launch reviews, and ongoing security advisory from Orion Trust Labs." },
      { property: "og:title", content: "Security Services - Orion Trust Labs" },
      { property: "og:description", content: "Smart contract auditing and security reviews." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const services = [
  {
    name: "Smart Contract Audits",
    tag: "Core",
    body: "Our primary offering. Full-scope review of Solidity codebases — architecture, access control, economic logic, and integration risk — with a report your team and partners can rely on.",
    features: ["Threat modeling & scope workshop", "Manual line-by-line review", "Automated analysis where useful", "Severity-ranked findings + PoCs"],
  },
  {
    name: "Pre-Launch & Upgrade Reviews",
    tag: "Launch",
    body: "Time-boxed engagements before mainnet, token launch, or proxy upgrades. We prioritize exploit paths that could cause immediate loss of funds or governance capture.",
    features: ["Upgrade & migration paths", "Admin key & timelock review", "Oracle & external call surfaces", "Go / no-go readiness summary"],
  },
  {
    name: "Remediation & Re-Audit",
    tag: "Follow-up",
    body: "After your team lands fixes, we verify remediations, close findings, and update the report for investors, exchanges, and integrators.",
    features: ["Fix verification", "Regression-focused re-review", "Updated audit letter", "Optional public disclosure support"],
  },
  {
    name: "Security Advisory",
    tag: "Partnership",
    body: "Retainer-style support for teams shipping frequently — design reviews, incident triage, and auditor-on-call during critical releases.",
    features: ["Architecture review sessions", "Release gate checklists", "Incident response coordination", "Team training & secure SDLC"],
  },
];

function SolutionsPage() {
  return (
    <>
      <PageBanner
        image={bannerSolutions}
        alt="Parallel glowing rails representing structured security review"
        eyebrow="Security services"
        title="Auditing is our main field. Safer contracts are the outcome."
        description="Orion Trust Labs is a security company — not a custody or settlement product vendor. Smart contract security is our proposal to the market: rigorous audits that help teams ship with confidence."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.name} className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative">
              <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">{s.name}</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border p-12 text-center bg-card/40">
          <h3 className="text-3xl font-semibold text-foreground">Not sure which engagement fits?</h3>
          <p className="mt-3 text-muted-foreground">Share your repo, timeline, and deployment context — we will recommend scope and next steps.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
