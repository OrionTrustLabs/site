import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Orion Trust Labs" },
      { name: "description", content: "Cryptographers, engineers, and operators building trust infrastructure for the on-chain economy." },
      { property: "og:title", content: "About - Orion Trust Labs" },
      { property: "og:description", content: "Cryptographers and engineers building trust infrastructure." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary">About</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight max-w-4xl">We're building the trust layer for the digital economy.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Orion Trust Labs is an early-stage team working to remove trust assumptions from financial infrastructure - one proof at a time. We're pre-launch: no contracts deployed, no product shipped, and honest about it.</p>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 md:grid-cols-3">
          {[
            ["Mission", "Make every financial operation cryptographically verifiable."],
            ["Principles", "Open science. Formal proofs. Zero unnecessary trust."],
            ["Where we are", "Small distributed founding team. Hiring selectively."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-sm uppercase tracking-widest text-primary">{t}</h3>
              <p className="mt-3 text-lg text-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-semibold text-foreground">Team</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">A small founding team with backgrounds in applied cryptography, distributed systems, and regulated financial infrastructure. We'll introduce individual members as roles are announced.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { r: "Founder & CEO", b: "Cryptography and product background." },
            { r: "Founding Engineer - Protocol", b: "Distributed systems and MPC." },
            { r: "Founding Engineer - ZK", b: "STARK circuits and formal methods." },
          ].map((p) => (
            <article key={p.r} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-14 w-14 rounded-full mb-4" style={{ background: "var(--gradient-primary)" }} />
              <h3 className="font-semibold text-foreground">To be announced</h3>
              <div className="text-xs text-primary mt-0.5">{p.r}</div>
              <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card/40 p-10 text-center">
          <h2 className="text-2xl font-semibold text-foreground">No investors or partners to announce yet</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">We're bootstrapping the earliest work and talking to a small group of prospective design partners. When there's news, it will appear here.</p>
        </div>
      </section>
    </>
  );
}