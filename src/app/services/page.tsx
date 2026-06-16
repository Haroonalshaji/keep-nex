import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services — KeepNex IT",
  description:
    "Document digitization, onsite inventory teams, CMMS, cloud services, cyber security, and custom software development.",
  openGraph: {
    title: "Services — KeepNex IT",
    description: "Six core IT services delivered by senior engineers.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
