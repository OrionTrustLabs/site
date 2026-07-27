import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageBanner } from "@/components/page-banner";
import bannerCareers from "@/assets/banner-careers.jpg";
import { careerTeams, careers, filterCareers } from "@/lib/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Orion Trust Labs" },
      { name: "description", content: "Join Orion Trust Labs. Build trust-minimized infrastructure with cryptographers, engineers, and operators across Zurich, New York, and Singapore." },
      { property: "og:title", content: "Careers - Orion Trust Labs" },
      { property: "og:description", content: "Build trust-minimized infrastructure with us." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const values = [
  ["Proof over promise", "We verify, not assume. Every claim is backed by cryptography or evidence."],
  ["Adversarial by default", "We design as if attackers are already inside the perimeter - because some day they might be."],
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
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All");
  const filteredRoles = filterCareers(careers.roles, query, team);

  return (
    <>
      <PageBanner
        image={bannerCareers}
        alt="Ascending planes of light representing building a founding team"
        eyebrow="Careers"
        title="Build the trust layer with us."
        description="We're hiring members of a large founding team. If you want to make financial infrastructure verifiable, resilient, and beautiful under the hood - cryptographers, engineers, operators, and skeptics welcome."
      />

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
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Open roles</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {filteredRoles.length} of {careers.roles.length} roles
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="sr-only">Search roles</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword — Solidity, React, MPC…"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {careerTeams.map((teamName) => {
              const active = team === teamName;
              return (
                <button
                  key={teamName}
                  type="button"
                  onClick={() => setTeam(teamName)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {teamName}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {filteredRoles.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card/40 p-10 text-center">
              <p className="text-foreground font-medium">No roles match that search.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try another keyword or clear the team filter.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setTeam("All");
                }}
                className="mt-5 text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredRoles.map((job) => (
              <Link
                key={job.slug}
                to="/careers/$slug"
                params={{ slug: job.slug }}
                className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="text-primary uppercase tracking-wider">{job.team}</span>
                      <span>{job.remoteOption}</span>
                      <span>{job.type}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">{job.summary}</p>
                  </div>
                  <span
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shrink-0 self-start md:self-center"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    View role
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Don't see a fit? Send your best work to{" "}
          <a href={`mailto:${careers.applyEmail}`} className="text-primary hover:underline">
            {careers.applyEmail}
          </a>
          .
        </p>
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
