import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import bannerAbout from "@/assets/banner-about.jpg";
import memberCeo from "@/assets/team/member-ceo.jpg";
import memberAdvisor from "@/assets/team/member-advisor.jpg";
import memberOps from "@/assets/team/member-ops.jpg";
import memberRecruitment from "@/assets/team/member-recruitment.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Orion Trust Labs" },
      { name: "description", content: "Orion Trust Labs is a smart contract security company focused on auditing and making on-chain systems safer." },
      { property: "og:title", content: "About - Orion Trust Labs" },
      { property: "og:description", content: "Smart contract security and auditing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  // { role: "Founder & CEO", img: memberCeo },
  // { role: "Investor & Advisor", img: memberAdvisor },
  // { role: "Operations Manager", img: memberOps },
  // { role: "Head of Recruitment", img: memberRecruitment },
];

function AboutPage() {
  return (
    <>
      <PageBanner
        image={bannerAbout}
        alt="Constellation of connected lights representing a shared security mission"
        eyebrow="About"
        title="A security company focused on smarter contracts."
        description="Orion Trust Labs exists to raise the bar for on-chain safety. Auditing is our core practice — smart contract security is how we help teams protect users, treasury, and reputation."
      />

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 md:grid-cols-3">
          {[
            ["Mission", "Make deployed contracts measurably safer through rigorous audit and clear remediation."],
            ["Principles", "Adversarial review. Evidence in reports. No security theater."],
            ["Where we are", "Growing audit and research team serving clients globally."],
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
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Auditors, researchers, and operators working together to deliver trustworthy security reviews.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <article key={p.role} className="rounded-2xl border border-border bg-card p-6 text-center">
              <img
                src={p.img}
                alt={p.role}
                width={160}
                height={160}
                className="mx-auto h-30 w-30 rounded-full object-cover border-2 border-border"
              />
              <div className="mt-4 text-sm font-medium text-foreground">{p.role}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
