import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orion Trust Labs - Blockchain Infrastructure & Trust" },
      { name: "description", content: "Orion Trust Labs builds trust-minimized blockchain infrastructure, custody, and settlement rails for institutions." },
      { name: "author", content: "Orion Trust Labs" },
      { property: "og:title", content: "Orion Trust Labs" },
      { property: "og:description", content: "Trust-minimized blockchain infrastructure for institutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/technology", label: "Technology" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "var(--gradient-primary)" }}>
            <span className="h-3 w-3 rounded-full bg-background" />
          </span>
          <span className="font-semibold tracking-tight text-foreground">Orion Trust Labs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground transition-colors" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          style={{ background: "var(--gradient-primary)" }}
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md" style={{ background: "var(--gradient-primary)" }}>
              <span className="h-2.5 w-2.5 rounded-full bg-background" />
            </span>
            <span className="font-semibold text-foreground">Orion Trust Labs</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Trust-minimized infrastructure for the next era of digital assets.
          </p>
        </div>
        <FooterCol title="Company" links={[["About", "/about"], ["Careers", "/careers"], ["Solutions", "/solutions"], ["Technology", "/technology"]]} />
        <FooterCol title="Resources" links={[["Contact", "/contact"], ["Docs", "/technology"], ["Security", "/technology"]]} />
        <div>
          <h4 className="text-sm font-semibold text-foreground">Stay in orbit</h4>
          <p className="mt-2 text-xs text-muted-foreground">Research and product updates.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@company.com" className="flex-1 rounded-md bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
            <button type="button" className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Orion Trust Labs. All rights reserved.</span>
          <span>oriontrustlabs.com</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, "/" | "/about" | "/careers" | "/solutions" | "/technology" | "/contact"][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}><Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
