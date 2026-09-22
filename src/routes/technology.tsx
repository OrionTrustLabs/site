import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerTechnology from "@/assets/banner-technology.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Audit Methodology - Orion Trust Labs" },
      { name: "description", content: "How Orion Trust Labs audits smart contracts: manual review, tooling, threat modeling, and remediation." },
      { property: "og:title", content: "Audit Methodology - Orion Trust Labs" },
      { property: "og:description", content: "Smart contract audit methodology and tooling." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechPage,
});

const pillars = [
  {
    n: "01",
    t: "Scope & Threat Modeling",
    d: "We map assets, trust boundaries, and attacker goals before reading code — so review time targets what can actually lose funds or break invariants.",
  },
  {
    n: "02",
    t: "Manual Smart Contract Review",
    d: "Senior auditors trace Solidity logic, storage, and external calls. We focus on reentrancy, access control, oracle manipulation, upgradeability, and economic exploits.",
  },
  {
    n: "03",
    t: "Automated & Differential Testing",
    d: "Foundry, Hardhat, fuzzing, and static analysis augment manual work — never replace it. We use tooling to expand coverage and confirm exploit paths.",
  },
  {
    n: "04",
    t: "Report & Remediation",
    d: "Findings are severity-ranked with clear impact, reproduction steps, and fix guidance. Re-audits verify patches before you ship or publish.",
  },
];

function TechPage() {
  return (
    <>
      <PageBanner
        image={bannerTechnology}
        alt="Layered planes representing structured audit depth"
        eyebrow="Methodology"
        title="How we make contracts safer."
        description="Our stack is an audit methodology — not a custody product. Every engagement combines adversarial thinking, deep Solidity expertise, and tooling chosen for signal, not checkbox compliance."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.n} className="rounded-2xl border border-border bg-card p-8">
            <div className="text-5xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-primary)" }}>
              {p.n}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground">Typical audit workflow</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Engagements are structured so clients always know what stage we are in and what deliverables to expect.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
            {[
              ["Kickoff", "Scope, repos, deployments, docs"],
              ["Review", "Manual + automated analysis"],
              ["Findings", "Draft report & client Q&A"],
              ["Remediation", "Fix review & final report"],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl border border-border bg-background/60 px-5 py-4 flex items-baseline justify-between gap-4">
                <span className="font-medium text-foreground">{t}</span>
                <span className="text-sm text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-semibold text-foreground">Tooling & standards</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Solidity / EVM", "Primary audit surface"],
            ["Foundry & Hardhat", "Tests, forks, fuzz"],
            ["Static analysis", "Slither, custom checks"],
            ["Disclosure", "Coordinated response"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm font-semibold text-foreground">{t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
