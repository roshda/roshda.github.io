// app/metadata.ts
import { Metadata } from "next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Roshni Dave",
    template: "%s | Roshni Dave",  // Keeping the title template from layout.tsx
  },
  description: "Roshni's portfolio.",  // Updated description from layout.tsx
  openGraph: {
    title: "roshda",  // Updated title from layout.tsx
    description: "This is my portfolio.",  // Same description
    url: baseUrl,
    siteName: "Roshni Dave",  // Site name from layout.tsx
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
