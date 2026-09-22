import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerHome from "@/assets/banner-home.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageBanner
        image={bannerHome}
        alt="Cyan mesh network representing protocol-layer security"
        eyebrow="Orion Trust Labs"
        title="Smart contract security, built on rigorous audit."
        description="Orion Trust Labs is a security company focused on smart contract auditing. We help protocols, DAOs, and institutions ship safer on-chain systems — through manual review, automated analysis, and clear remediation guidance."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/solutions" className="rounded-md px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Our security services
          </Link>
          <Link to="/technology" className="rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors">
            How we audit
          </Link>
        </div>
        <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
          {[["Audits", "Core practice"], ["Solidity", "Primary focus"], ["Remote", "Global clients"]].map(([v, l]) => (
            <div key={l}>
              <dt className="text-2xl font-semibold text-foreground">{v}</dt>
              <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
            </div>
          ))}
        </dl>
      </PageBanner>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">What we do</p>
            <h2 className="mt-2 text-4xl font-semibold text-foreground">Making every contract harder to break</h2>
          </div>
          <Link to="/solutions" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">See services →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Smart Contract Audits", d: "End-to-end review of Solidity and EVM logic — threat modeling, line-by-line analysis, and severity-ranked findings your team can act on." },
            { t: "Pre-launch & Upgrade Reviews", d: "Focused engagements before mainnet, proxy upgrades, or high-value migrations when the cost of a miss is highest." },
            { t: "Remediation & Retainers", d: "Re-review after fixes, ongoing advisory, and security partnership as your codebase evolves." },
          ].map((c) => (
            <article key={c.t} className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/60">
              <div className="h-10 w-10 rounded-lg mb-6" style={{ background: "var(--gradient-primary)" }} />
              <h3 className="text-xl font-semibold text-foreground">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">Why Orion</p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground">Security-first. Evidence over marketing.</h2>
          <p className="mt-4 text-muted-foreground">
            We are not a product company shipping custody or settlement rails. Our work is audit and assurance — helping teams understand risk, fix issues, and earn trust with users and partners.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Manual review led by experienced smart contract auditors",
              "Automated tooling (fuzzing, static analysis, invariant tests) where it adds signal",
              "Clear reports with reproducible steps and practical remediation",
              "Responsible disclosure process for client and ecosystem safety",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />
          <pre className="relative text-xs text-foreground/90 font-mono leading-relaxed overflow-x-auto">
{`# Illustrative audit summary (excerpt)
$ orion audit --scope Vault.sol,Router.sol

Critical:    0
High:        1  → reentrancy path in withdraw()
Medium:      3  → oracle staleness, access control
Informational: 5

✔ PoC attached for High finding
✔ Remediation review scheduled
✔ Report delivered to security@client.io`}
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Need an audit before you ship?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Tell us about your contracts, timeline, and deployment plans. We will scope an engagement focused on making your system safer.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-md px-6 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Request a security review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
