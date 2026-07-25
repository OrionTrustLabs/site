import { createFileRoute } from "@tanstack/react-router";
import techImg from "@/assets/technology.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology - Orion Trust Labs" },
      { name: "description", content: "Under the hood: MPC, zero-knowledge proofs, hardware attestation, and formally verified settlement." },
      { property: "og:title", content: "Technology - Orion Trust Labs" },
      { property: "og:description", content: "MPC, zero-knowledge proofs, and formally verified settlement." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechPage,
});

const pillars = [
  { n: "01", t: "Threshold Cryptography", d: "Planned GG20 / CGGMP21 MPC signing schemes. No single signer ever holds a full key - quorums enforced across geographically distributed nodes." },
  { n: "02", t: "Zero-Knowledge Proofs", d: "STARK circuits designed to prove solvency, reserves, and compliance state so regulators verify math, not raw ledgers." },
  { n: "03", t: "Hardware Attestation", d: "Signers will run inside AWS Nitro Enclaves or Intel TDX, with boot-time attestation published on-chain." },
  { n: "04", t: "Formal Verification", d: "Settlement contracts intended to be proven correct in Lean and Certora so critical paths have no untested edge cases." },
];

function TechPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">Technology</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight">Cryptography you can audit. Systems you can trust.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">Our design brief: combine threshold cryptography, zero-knowledge proofs, and formally verified smart contracts to eliminate trust assumptions wherever possible. This page describes the architecture we're building - no smart contracts or services are deployed yet.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
            <img
              src={techImg}
              alt="Layered cryptographic protocol stack with glowing cyan planes"
              width={1024}
              height={1024}
              className="relative w-full rounded-2xl border border-border object-cover aspect-square"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.n} className="rounded-2xl border border-border bg-card p-8">
            <div className="text-5xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-primary)" }}>{p.n}</div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground">The Orion architecture</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">A modular stack - each layer independently auditable, replaceable, and proven correct.</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
            {[
              ["Attestation Layer", "STARK proofs"],
              ["Settlement Engine", "Formally verified"],
              ["MPC Signing Cluster", "t-of-n quorum"],
              ["Hardware Root of Trust", "Nitro / TDX"],
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
        <h2 className="text-3xl font-semibold text-foreground">Security posture (target)</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["SOC 2 Type II", "Targeted for launch"],
            ["ISO 27001", "Targeted for launch"],
            ["Bug Bounty", "Public program planned at GA"],
            ["Third-Party Audits", "Engagements to be announced"],
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
