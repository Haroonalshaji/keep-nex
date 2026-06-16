import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ogImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0aed96e-6514-412f-8cd2-2dbe886b4452/id-preview-cc5ac0fc--152c5ada-28a6-4cb6-817b-cff8476fb1ea.lovable.app-1777663210564.png";

export const metadata: Metadata = {
  title: {
    default: "KeepNex — Enterprise IT Services",
    template: "%s — KeepNex",
  },
  description:
    "Document digitization, onsite inventory teams, CMMS, cloud, cyber security and software development for modern enterprises.",
  openGraph: {
    title: "KeepNex — Enterprise IT Services",
    description:
      "Document digitization, onsite inventory teams, CMMS, cloud, cyber security and software development for modern enterprises.",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeepNex — Enterprise IT Services",
    description:
      "Document digitization, onsite inventory teams, CMMS, cloud, cyber security and software development for modern enterprises.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
