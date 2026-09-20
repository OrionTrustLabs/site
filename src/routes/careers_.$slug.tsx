import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { careers, getCareerBySlug } from "@/lib/careers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [applyOpen, setApplyOpen] = useState(false);

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
        <button
          type="button"
          onClick={() => setApplyOpen(true)}
          className="inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          Apply for this role
        </button>
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
          Share a short note about relevant work, links to code or portfolio pieces, and anything else that helps us understand how you think.
          You can also email{" "}
          <a href={`mailto:${careers.applyEmail}`} className="text-primary hover:underline">
            {careers.applyEmail}
          </a>{" "}
          with the role title in the subject line.
        </p>
        <button
          type="button"
          onClick={() => setApplyOpen(true)}
          className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-medium text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          Apply now
        </button>
      </section>

      <ApplyFormDialog
        open={applyOpen}
        onOpenChange={setApplyOpen}
        roleTitle={role.title}
      />
    </article>
  );
}

function ApplyFormDialog({
  open,
  onOpenChange,
  roleTitle,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roleTitle: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setSent(false);
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-lg">
        {sent ? (
          <div className="py-8 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <DialogHeader className="mt-6 space-y-2">
              <DialogTitle className="text-xl text-foreground">Application received.</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Thanks for applying to {roleTitle}. We'll review and get back to you.
              </DialogDescription>
            </DialogHeader>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-8 inline-flex rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-foreground">Apply for this role</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {roleTitle} · We'll review every application personally.
              </DialogDescription>
            </DialogHeader>

            <form
              className="mt-4 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" placeholder="Ada Lovelace" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="LinkedIn or portfolio URL" name="portfolio" type="url" placeholder="https://" />
              <Field label="Resume / CV link" name="resume" type="url" placeholder="https://drive.google.com/..." />
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-primary">
                  Why Orion / relevant work
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about relevant work, links to code or papers, and what draws you to this role."
                  className="mt-2 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <input type="hidden" name="role" value={roleTitle} />
              <button
                type="submit"
                className="mt-2 rounded-md px-5 py-3 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                Submit application
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
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
