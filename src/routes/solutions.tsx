import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerSolutions from "@/assets/banner-solutions.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions - Orion Trust Labs" },
      { name: "description", content: "Custody, settlement, and attestation infrastructure built for regulated digital-asset institutions." },
      { property: "og:title", content: "Solutions - Orion Trust Labs" },
      { property: "og:description", content: "Custody, settlement, and attestation infrastructure." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    name: "Institutional Custody",
    tag: "Custody",
    body: "MPC key management with hardware-anchored signers, policy quorums, and cold-warm-hot vault tiers. Targeting SOC 2 Type II and ISO 27001 by GA.",
    features: ["Threshold MPC (t-of-n)", "HSM & Nitro Enclave signing", "Policy engine with time locks", "Insurance partners in scoping"],
  },
  {
    name: "Settlement Rails",
    tag: "Payments",
    body: "Designing deterministic atomic settlement across L1s, L2s, and traditional rails, with cryptographic receipts for every leg of a trade.",
    features: ["Atomic multi-chain swaps", "PvP and DvP settlement", "Fast-finality architecture", "ISO 20022 adapters planned"],
  },
  {
    name: "Attestation Layer",
    tag: "Compliance",
    body: "Zero-knowledge proofs of reserves, solvency, KYC status, and off-chain state - designed to be verifiable by regulators without exposing raw data.",
    features: ["STARK-based proofs of reserve", "Selective KYC disclosures", "Public verifier endpoints (planned)", "Audit-ready proof archives"],
  },
  {
    name: "Validator Operations",
    tag: "Staking",
    body: "Non-custodial staking with slashing protection and 24/7 SRE monitoring. Network coverage expanding as we approach launch.",
    features: ["Multi-network coverage", "Slashing protection roadmap", "Distributed validator tech (DVT)", "Real-time reward dashboards"],
  },
];

function SolutionsPage() {
  return (
    <>
      <PageBanner
        image={bannerSolutions}
        alt="Parallel glowing rails representing institutional settlement infrastructure"
        eyebrow="Solutions"
        title="A full stack for institutional digital assets - in development."
        description="Four modules being designed to interlock - or work on their own - to secure, move, and prove digital assets at scale. Nothing on this page is live yet; we're building toward a design-partner pilot."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <article key={s.name} className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative">
              <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">{s.name}</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground"><span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border p-12 text-center bg-card/40">
          <h3 className="text-3xl font-semibold text-foreground">Not sure where to start?</h3>
          <p className="mt-3 text-muted-foreground">Our solutions engineers will map your workflow to the right modules.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>Contact us</Link>
        </div>
      </section>
    </>
  );
}
