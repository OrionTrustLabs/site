import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageBanner } from "@/components/page-banner";
import bannerContact from "@/assets/banner-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Orion Trust Labs" },
      { name: "description", content: "Talk to our team about custody, settlement, or attestation infrastructure." },
      { property: "og:title", content: "Contact - Orion Trust Labs" },
      { property: "og:description", content: "Talk to our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageBanner
        image={bannerContact}
        alt="Two connected nodes of light representing communication"
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Whether you're an institution evaluating custody, a protocol integrating settlement, or a regulator with questions - we'd like to hear from you."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-16 lg:grid-cols-2">
        <div>
          <div className="space-y-6 text-sm">
            {[
              ["Sales", "sales@oriontrustlabs.com"],
              ["Security disclosures", "security@oriontrustlabs.com"],
              // ["Press", "press@oriontrustlabs.com"],
            ].map(([t, e]) => (
              <div key={t}>
                <div className="text-xs uppercase tracking-widest text-primary">{t}</div>
                <div className="mt-1 text-foreground">{e}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-5 gap-6 max-w-md">
            {[["Zurich", "Bahnhofstrasse 45"], ["London", "Marina Bay Financial"], ["New York", "1 World Trade Center"]].map(([c, a]) => (
              <div key={c}>
                <div className="text-sm font-semibold text-foreground">{c}</div>
                {/* <div className="mt-1 text-xs text-muted-foreground">{a}</div> */}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8 h-fit"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Message received.</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you personally.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-foreground">Get in touch</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us about your use case. Design-partner intros welcome.</p>
              <div className="mt-6 grid gap-4">
                <Field label="Name" name="name" placeholder="Ada Lovelace" />
                <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Orion Capital" />
                <div>
                  <label className="text-xs uppercase tracking-widest text-primary">Interest</label>
                  <select className="mt-2 w-full rounded-md bg-input border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Custody</option>
                    <option>Settlement</option>
                    <option>Attestation</option>
                    <option>Validator services</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-primary">Message</label>
                  <textarea rows={4} className="mt-2 w-full rounded-md bg-input border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="What are you building?" />
                </div>
                <button type="submit" className="mt-2 rounded-md px-5 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>Send message</button>
              </div>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-primary">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-md bg-input border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
