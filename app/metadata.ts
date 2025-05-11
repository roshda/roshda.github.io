// app/metadata.ts
import { Metadata } from "next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Roshni Dave",
    template: "%s | Roshni Dave", 
  },
  description: "Roshni C. Dave.",  
  openGraph: {
    title: "roshda",  
    description: "Roshni's portfolio and cybersecurity blog", 
    url: baseUrl,
    siteName: "Roshni C. Dave",  
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
