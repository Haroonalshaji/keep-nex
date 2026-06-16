import {
  ScanLine,
  ClipboardList,
  Wrench,
  Cloud,
  ShieldCheck,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "document-scanning",
    title: "Document Scanning & Digitization",
    short: "Transform paper archives into searchable digital assets.",
    description:
      "End-to-end document digitization with high-speed scanning, OCR, indexing, and secure delivery. We handle everything from loose paper and bound books to engineering drawings and historical archives.",
    icon: ScanLine,
    features: [
      "High-resolution color & B/W scanning",
      "OCR with multilingual recognition",
      "Metadata indexing & taxonomy",
      "Secure chain-of-custody handling",
      "DMS integration (SharePoint, Alfresco)",
    ],
  },
  {
    slug: "onsite-inventory",
    title: "Onsite Inventory Team",
    short: "Trained field teams for asset, stock & document inventory.",
    description:
      "Deploy our certified onsite teams for physical inventory counts, IT asset audits, barcoding, and reconciliation. We ship trained crews with the equipment and SOPs to deliver accurate counts on tight timelines.",
    icon: ClipboardList,
    features: [
      "IT & fixed-asset audits",
      "Barcode / RFID tagging",
      "Real-time count reconciliation",
      "Pan-region deployment",
      "Detailed variance reporting",
    ],
  },
  {
    slug: "maintenance-software",
    title: "Maintenance Software (CMMS)",
    short: "Plan, track & optimize maintenance operations.",
    description:
      "Modern CMMS platforms tailored to your facilities and equipment. Schedule preventive maintenance, manage work orders, track spare parts, and surface insights that cut downtime.",
    icon: Wrench,
    features: [
      "Preventive & predictive scheduling",
      "Mobile work-order management",
      "Spare parts & inventory control",
      "IoT sensor integration",
      "Compliance & audit reporting",
    ],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    short: "Migrate, modernize & manage on AWS, Azure & GCP.",
    description:
      "Architecting, migrating and operating workloads across the major clouds. From lift-and-shift to cloud-native rebuilds, with FinOps to keep your bill predictable.",
    icon: Cloud,
    features: [
      "Cloud migration & assessments",
      "Kubernetes & containerization",
      "DevOps & CI/CD pipelines",
      "24/7 managed cloud operations",
      "Cost optimization (FinOps)",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Defend, detect & respond — across your stack.",
    description:
      "Layered security services covering assessments, compliance, monitoring and incident response. We help you meet ISO 27001, SOC 2 and regional regulatory frameworks.",
    icon: ShieldCheck,
    features: [
      "VAPT & red-team exercises",
      "SOC / SIEM monitoring",
      "ISO 27001 & SOC 2 readiness",
      "Identity & access management",
      "Incident response & forensics",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom web, mobile & enterprise software.",
    description:
      "Product-minded engineering teams that ship. Web platforms, mobile apps, internal tools and integrations — designed and built with modern stacks and clean architecture.",
    icon: Code2,
    features: [
      "Web & mobile applications",
      "API & systems integration",
      "UX-led product design",
      "QA & test automation",
      "Long-term product partnerships",
    ],
  },
];
