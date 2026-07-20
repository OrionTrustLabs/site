import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              In development · Pre-launch
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Trust, engineered at the{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                protocol layer.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Orion Trust Labs is designing cryptographic infrastructure to let institutions custody, settle, and verify digital assets without compromise. We're pre-launch — building in the open and talking to design partners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solutions" className="rounded-md px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                What we're building
              </Link>
              <Link to="/technology" className="rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors">
                Our approach
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["2026", "Founded"], ["Stealth", "Current stage"], ["Open", "Design partners"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-semibold text-foreground">{v}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
            <img src={heroImg} alt="Blockchain mesh network visualization" width={1024} height={1024} className="relative rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-elegant)" }} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">What we're building</p>
            <h2 className="mt-2 text-4xl font-semibold text-foreground">Infrastructure designed for verifiable guarantees</h2>
          </div>
          <Link to="/solutions" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">See the roadmap →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Institutional Custody", d: "MPC-based hot and cold vaults with policy engines, HSM anchoring, and hardware attestation." },
            { t: "Settlement Rails", d: "Atomic, deterministic settlement across L1s and L2s with sub-second finality guarantees." },
            { t: "Attestation Layer", d: "Zero-knowledge proofs for reserves, compliance, and cross-chain state without leaking data." },
          ].map((c) => (
            <article key={c.t} className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/60">
              <div className="h-10 w-10 rounded-lg mb-6" style={{ background: "var(--gradient-primary)" }} />
              <h3 className="text-xl font-semibold text-foreground">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-primary">Design partner program</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground max-w-2xl mx-auto">We're onboarding a small cohort of institutions to shape the v1 product.</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">If you're a fund, exchange, or custodian exploring cryptographic settlement, we'd like to talk.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>Get in touch</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">Why Orion</p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground">Verifiable by design. Regulated by default.</h2>
          <p className="mt-4 text-muted-foreground">
            The Orion stack is being designed so every operation produces a cryptographic proof that regulators, auditors, and counterparties can verify — without granting them access to sensitive data.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Targeting SOC 2 Type II & ISO 27001 for launch","MPC signing with policy quorum enforcement","Open-source attestation clients, planned third-party audits","Incident response and SLA commitments at GA"].map(x => (
              <li key={x} className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /><span className="text-muted-foreground">{x}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />
          <pre className="relative text-xs text-foreground/90 font-mono leading-relaxed overflow-x-auto">
{`# Illustrative CLI — product not yet released
$ orion verify --proof reserves.stark

✔ Merkle root anchored on-chain
✔ Reserve ≥ liabilities
✔ Signer quorum satisfied
✔ Attestation timestamped

design preview — join the pilot at
oriontrustlabs.com/contact`}
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Ready to build with proof?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">We're pre-launch and talking to design partners. Tell us what you'd want from cryptographic custody, settlement, or attestation.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-md px-6 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
