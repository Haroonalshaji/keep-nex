"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Outcome-obsessed", body: "We measure success by your KPIs, not our timesheet." },
  { icon: Heart, title: "Operator empathy", body: "Most of our leadership ran IT before they sold it." },
  { icon: Lightbulb, title: "Pragmatic innovation", body: "New tech only when it earns its place in production." },
  { icon: Award, title: "Quietly excellent", body: "ISO 27001, SOC 2, and a 96% client retention rate." },
];

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero border-b border-border/60">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">/ about us</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            A small team of <span className="text-gradient-primary">serious operators</span>, building IT that just works.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            KeepNex was founded in 2021 by a group of enterprise IT leaders who
            were tired of seeing big consultancies bill big and deliver small.
            Today we run document, infrastructure, security and software
            programs for clients across finance, healthcare, government and
            manufacturing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">/ our mission</div>
            <h2 className="font-display text-4xl font-bold tracking-tight">
              Make enterprise IT <span className="text-gradient-primary">honest, fast, and accountable.</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We exist because too many IT initiatives are over-scoped,
                under-delivered, and run by people who won&apos;t be there when it
                breaks at 2am.
              </p>
              <p>
                Our model is different: a small senior team, fixed accountability,
                and a portfolio of services that compound. Digitize your records.
                Put them on a secure cloud. Build the software your team
                actually needs. Defend it. We do all of it — and we own the
                outcome.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors"
              >
                <v.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-display font-semibold text-lg">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 md:grid-cols-4 text-center">
          {[
            { v: "2014", l: "Founded" },
            { v: "180+", l: "Engineers & operators" },
            { v: "12", l: "Countries served" },
            { v: "96%", l: "Client retention" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-bold text-gradient-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Want to see if we&apos;d be a good fit?
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow glow transition-all"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
