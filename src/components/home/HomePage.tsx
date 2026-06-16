"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Trusted by 200+ enterprises across 4 continents
              </div>

              <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-gradient">Engineering the</span>
                <br />
                <span className="text-gradient-primary">digital backbone</span>
                <br />
                <span className="text-gradient">of modern enterprise.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                From paper to platform — KeepNex delivers document digitization,
                onsite inventory teams, maintenance software, cloud, cyber security
                and custom development under one roof.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow glow transition-all"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface/40 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-surface-elevated transition-colors"
                >
                  Talk to an expert
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { v: "200+", l: "Enterprise clients" },
                  { v: "12M+", l: "Pages digitized" },
                  { v: "99.98%", l: "Uptime SLA" },
                  { v: "24/7", l: "Global support" },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="font-display text-3xl font-bold text-gradient-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-border-strong/60 overflow-hidden shadow-card">
                <Image
                  src="/images/hero-tech.jpg"
                  alt="Futuristic digital technology visualization"
                  className="w-full h-auto object-cover"
                  width={1344}
                  height={768}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/20 blur-[60px]" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/20 blur-[50px]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">/ what we do</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Six services. One trusted partner.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Whether you need to digitize a basement of archives or ship a
            mission-critical product, our specialized teams deliver.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="relative border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">/ why keepnex</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Built for outcomes,
              <br />
              <span className="text-gradient-primary">not deliverables.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We&apos;re a vertically integrated IT services company — meaning your
              digitization project, the cloud it lives on, the software that
              indexes it, and the security that protects it all come from one
              accountable team.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Single accountable team across all 6 service lines",
                "ISO 27001 certified processes & compliance-ready delivery",
                "Senior engineers — no junior hand-offs",
                "Fixed-fee or T&M engagements, your choice",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-border-strong/60 overflow-hidden shadow-card">
              <Image
                src="/images/team-workspace.jpg"
                alt="Modern enterprise technology workspace"
                className="w-full h-auto object-cover"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-[50px]" />
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-accent/15 blur-[40px]" />
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border-gradient p-px">
          <div className="relative rounded-3xl bg-surface px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[400px] bg-primary/30 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                Ready to <span className="text-gradient-primary">modernize</span> your IT operations?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Book a 30-minute discovery call. We&apos;ll map out your priorities and
                a phased roadmap — no obligation, no sales theater.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow glow transition-all"
              >
                Schedule a call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
