import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { careers, getCareerBySlug } from "@/lib/careers";

export const Route = createFileRoute("/careers_/$slug")({
  loader: ({ params }) => {
    const role = getCareerBySlug(params.slug);
    if (!role) throw notFound();
    return role;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} - Careers - Orion Trust Labs` : "Role - Orion Trust Labs" },
      {
        name: "description",
        content: loaderData?.summary ?? "Open role at Orion Trust Labs.",
      },
      { property: "og:title", content: loaderData ? `${loaderData.title} - Orion Trust Labs` : "Role - Orion Trust Labs" },
      { property: "og:description", content: loaderData?.summary ?? "Open role at Orion Trust Labs." },
      { property: "og:url", content: loaderData ? `/careers/${loaderData.slug}` : "/careers" },
    ],
    links: [{ rel: "canonical", href: loaderData ? `/careers/${loaderData.slug}` : "/careers" }],
  }),
  component: CareerDetailPage,
});

function CareerDetailPage() {
  const role = Route.useLoaderData();
  const applyHref = `mailto:${careers.applyEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← All roles
      </Link>

      <p className="mt-8 text-sm uppercase tracking-widest text-primary">{role.team}</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{role.title}</h1>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span>{role.location}</span>
        <span aria-hidden="true">·</span>
        <span>{role.type}</span>
        <span aria-hidden="true">·</span>
        <span>{role.remoteOption}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">{role.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <InfoCard title="Remote" body={role.remoteDetails} />
        <InfoCard title="Compensation" body={role.compensation} />
      </div>

      <div className="mt-8">
        <a
          href={applyHref}
          className="inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          Apply for this role
        </a>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">About the role</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{role.about}</p>
      </section>

      <DetailList title="Responsibilities" items={role.responsibilities} />
      <DetailList title="Requirements" items={role.requirements} />
      <DetailList title="Nice to have" items={role.niceToHave} />
      <DetailList title="Benefits" items={role.benefits} />

      <section className="mt-16 rounded-2xl border border-border bg-card/40 p-8">
        <h2 className="text-xl font-semibold text-foreground">How to apply</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Send a short note about relevant work, links to code or portfolio pieces, and anything else that helps us understand how you think.
          Email{" "}
          <a href={applyHref} className="text-primary hover:underline">
            {careers.applyEmail}
          </a>{" "}
          with the role title in the subject line.
        </p>
        <a
          href={applyHref}
          className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          Apply now
        </a>
      </section>
    </article>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-5">
      <h2 className="text-xs uppercase tracking-widest text-primary">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
