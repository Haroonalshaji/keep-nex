"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl border-gradient p-px overflow-hidden"
    >
      <div className="relative rounded-2xl bg-surface/80 backdrop-blur p-6 h-full flex flex-col">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
        </div>

        <Link
          href={`/services#${service.slug}`}
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
