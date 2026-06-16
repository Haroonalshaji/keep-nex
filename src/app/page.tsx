import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "KeepNex — Enterprise IT Services & Digital Transformation",
  description:
    "Trusted IT partner for document digitization, onsite inventory, CMMS, cloud, cyber security & custom software development.",
  openGraph: {
    title: "KeepNex — Enterprise IT Services",
    description: "Six core services. One trusted technology partner.",
  },
};

export default function Page() {
  return <HomePage />;
}
