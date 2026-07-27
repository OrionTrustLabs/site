import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerAbout from "@/assets/banner-about.jpg";
import memberCeo from "@/assets/team/member-ceo.jpg";
import memberAdvisor from "@/assets/team/member-advisor.jpg";
import memberBizdev from "@/assets/team/member-bizdev.jpg";
import memberOps from "@/assets/team/member-ops.jpg";
import memberRecruitment from "@/assets/team/member-recruitment.jpg";

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

const team = [
  { role: "Founder & CEO", img: memberCeo },
  { role: "Investor & Advisor", img: memberAdvisor },
  { role: "Business Development Manager", img: memberBizdev },
  { role: "Operations Manager", img: memberOps },
  { role: "Head of Recruitment", img: memberRecruitment },
];

function AboutPage() {
  return (
    <>
      <PageBanner
        image={bannerAbout}
        alt="Constellation of connected lights representing a shared founding mission"
        eyebrow="About"
        title="We're building the trust layer for the digital economy."
        description="Orion Trust Labs is an early-stage team working to remove trust assumptions from financial infrastructure - one proof at a time. We're pre-launch: no contracts deployed, no product shipped, and honest about it."
      />

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 md:grid-cols-3">
          {[
            ["Mission", "Make every financial operation cryptographically verifiable."],
            ["Principles", "Open science. Formal proofs. Zero unnecessary trust."],
            ["Where we are", "Large distributed founding team. Hiring selectively."],
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
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {team.map((p) => (
            <article key={p.role} className="rounded-2xl border border-border bg-card p-6 text-center">
              <img
                src={p.img}
                alt={p.role}
                width={160}
                height={160}
                className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-border"
              />
              <div className="mt-4 text-sm font-medium text-foreground">{p.role}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
