import Link from "next/link";
import { Hexagon, Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Hexagon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="font-display font-bold text-lg">
              Keep<span className="text-primary">Nex</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            End-to-end IT services — from document digitization and onsite teams
            to cloud, security and custom software.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@keepnex.io</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Global · Remote-first</div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link href="/services" className="text-muted-foreground hover:text-primary">All services</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KeepNex IT Services. All rights reserved.
      </div>
    </footer>
  );
}
