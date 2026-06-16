import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KeepNex IT Services" },
      { name: "description", content: "Talk to a KeepNex expert about digitization, cloud, security or custom software. Reply within one business day." },
      { property: "og:title", content: "Contact — KeepNex IT" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero border-b border-border/60">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">/ contact</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Let's talk about your <span className="text-gradient-primary">next initiative.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tell us a little about what you're trying to do — we'll respond
            within one business day with next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <Mail className="h-5 w-5 text-primary mb-3" />
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="font-display font-semibold mt-1">inof@keepnex.io</div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <Phone className="h-5 w-5 text-primary mb-3" />
            <div className="text-sm text-muted-foreground">Phone</div>
            <div className="font-display font-semibold mt-1">+966505643718</div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <MapPin className="h-5 w-5 text-primary mb-3" />
            <div className="text-sm text-muted-foreground">Headquarters</div>
            <div className="font-display font-semibold mt-1">Riyadh - KSA </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Delivery hubs in India and the Middle East.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border-gradient p-px"
          >
            <div className="rounded-2xl bg-surface p-8 space-y-5">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold">Message received</h3>
                  <p className="mt-2 text-muted-foreground">
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Company" name="company" />
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Service of interest
                      </label>
                      <select className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                        <option>Not sure yet</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      How can we help?
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="A few sentences about your project, timeline and any constraints."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow glow transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Send message
                  </button>
                </>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
