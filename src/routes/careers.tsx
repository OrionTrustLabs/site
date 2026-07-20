import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Orion Trust Labs" },
      { name: "description", content: "Join Orion Trust Labs. Build trust-minimized infrastructure with cryptographers, engineers, and operators across Zurich, New York, and Singapore." },
      { property: "og:title", content: "Careers — Orion Trust Labs" },
      { property: "og:description", content: "Build trust-minimized infrastructure with us." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Founding Cryptography Engineer", team: "Research", location: "Remote", type: "Full-time" },
  { title: "Founding MPC / Protocol Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
];

const values = [
  ["Proof over promise", "We verify, not assume. Every claim is backed by cryptography or evidence."],
  ["Adversarial by default", "We design as if attackers are already inside the perimeter — because some day they might be."],
  ["Open science", "We publish, peer-review, and open-source when it makes the ecosystem safer."],
  ["Operator discipline", "Reliability, runbooks, and incident transparency are part of the craft."],
];

const benefits = [
  "Meaningful founding equity",
  "Flexible PTO and remote-first culture",
  "Research budget + conference travel",
  "Health coverage as we formalize benefits",
  "Regular in-person team gatherings",
  "Hardware signing kit for every engineer",
];

function CareersPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary">Careers</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight max-w-4xl">Build the trust layer with us.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">We're pre-launch and hiring a small founding team. If you want to make financial infrastructure verifiable, resilient, and beautiful under the hood — cryptographers, engineers, operators, and skeptics welcome.</p>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 md:grid-cols-3">
          {[
            ["Day 1", "Founding team"],
            ["Remote", "Work from anywhere"],
            ["∞", "Curiosity required"],
          ].map(([n, d]) => (
            <div key={d}>
              <div className="text-4xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-primary)" }}>{n}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-semibold text-foreground">Open roles</h2>
        <div className="mt-10 space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="group rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors hover:border-primary/50">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="text-primary uppercase tracking-wider">{job.team}</span>
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <a
                href="mailto:careers@oriontrustlabs.com"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                Apply
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Don't see a fit? Send your best work to <a href="mailto:careers@oriontrustlabs.com" className="text-primary hover:underline">careers@oriontrustlabs.com</a>.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">How we work</h2>
          <div className="mt-8 grid gap-6">
            {values.map(([t, d]) => (
              <div key={t}>
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-foreground">Benefits</h2>
          <ul className="mt-8 grid gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 h-2 w-2 rounded-full shrink-0" style={{ background: "var(--gradient-primary)" }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
