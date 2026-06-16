import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About — KeepNex IT Services",
  description:
    "We're a senior-led IT services firm building the digital backbone of modern enterprises.",
  openGraph: {
    title: "About — KeepNex IT",
    description: "Senior-led, vertically integrated IT services.",
  },
};

export default function Page() {
  return <AboutPage />;
}
