import type { ReactNode } from "react";

type PageBannerProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageBanner({ image, alt, eyebrow, title, description, children }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <p className="text-sm uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight max-w-3xl">{title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
