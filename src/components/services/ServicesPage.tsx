"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/60">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">/ services</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Everything your IT roadmap needs — <span className="text-gradient-primary">end to end.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Six specialized service lines, one accountable team. Pick a single
            engagement or combine them into a coordinated transformation program.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 space-y-24">
        {services.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center scroll-mt-24 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                  / 0{i + 1}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow"
                >
                  Discuss your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative rounded-2xl border-gradient p-px">
                <div className="rounded-2xl bg-surface p-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    / what&apos;s included
                  </div>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </>
  );
}
