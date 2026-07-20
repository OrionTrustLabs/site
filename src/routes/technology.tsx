import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Orion Trust Labs" },
      { name: "description", content: "Under the hood: MPC, zero-knowledge proofs, hardware attestation, and formally verified settlement." },
      { property: "og:title", content: "Technology — Orion Trust Labs" },
      { property: "og:description", content: "MPC, zero-knowledge proofs, and formally verified settlement." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechPage,
});

const pillars = [
  { n: "01", t: "Threshold Cryptography", d: "Planned GG20 / CGGMP21 MPC signing schemes. No single signer ever holds a full key — quorums enforced across geographically distributed nodes." },
  { n: "02", t: "Zero-Knowledge Proofs", d: "STARK circuits designed to prove solvency, reserves, and compliance state so regulators verify math, not raw ledgers." },
  { n: "03", t: "Hardware Attestation", d: "Signers will run inside AWS Nitro Enclaves or Intel TDX, with boot-time attestation published on-chain." },
  { n: "04", t: "Formal Verification", d: "Settlement contracts intended to be proven correct in Lean and Certora so critical paths have no untested edge cases." },
];

function TechPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary">Technology</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight max-w-3xl">Cryptography you can audit. Systems you can trust.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Our design brief: combine threshold cryptography, zero-knowledge proofs, and formally verified smart contracts to eliminate trust assumptions wherever possible. This page describes the architecture we're building — no smart contracts or services are deployed yet.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.n} className="rounded-2xl border border-border bg-card p-8">
            <div className="text-5xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-primary)" }}>{p.n}</div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">The Orion architecture</h2>
            <p className="mt-4 text-muted-foreground">A modular stack — each layer independently auditable, replaceable, and proven correct.</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 font-mono text-xs text-foreground/90 space-y-2">
            {[
              "┌─────────────────────────────────────┐",
              "│  Attestation Layer  (STARK proofs)  │",
              "├─────────────────────────────────────┤",
              "│  Settlement Engine  (formally verified) │",
              "├─────────────────────────────────────┤",
              "│  MPC Signing Cluster  (t-of-n quorum)  │",
              "├─────────────────────────────────────┤",
              "│  Hardware Root of Trust  (Nitro / TDX) │",
              "└─────────────────────────────────────┘",
            ].map((l, i) => <div key={i}>{l}</div>)}
          </div>
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