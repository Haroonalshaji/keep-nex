import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — KeepNex IT Services",
  description:
    "Talk to a KeepNex expert about digitization, cloud, security or custom software. Reply within one business day.",
  openGraph: {
    title: "Contact — KeepNex IT",
    description: "Get in touch with our team.",
  },
};

export default function Page() {
  return <ContactPage />;
}
