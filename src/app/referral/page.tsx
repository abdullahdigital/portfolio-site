import type { Metadata } from "next";
import ReferralPage from "./ReferralPage";

export const metadata: Metadata = {
  title: "Referral Program | Abdullah - Earn 25% Commission",
  description:
    "Join Abdullah's referral and affiliate program. Earn up to 25% commission by referring clients for web development, AI, and cybersecurity projects. Start earning passive income today!",
  alternates: {
    canonical: "/referral",
  },
  openGraph: {
    title: "Referral Program | Abdullah - Earn 25% Commission",
    description:
      "Join Abdullah's referral program. Earn up to 25% commission by referring clients for web development, AI, and cybersecurity projects.",
    url: "https://abdullahdigital.vercel.app/referral",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-referral.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullah's Referral Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program | Abdullah - Earn 25% Commission",
    description: "Join Abdullah's referral program. Earn up to 25% commission by referring web development and cybersecurity clients.",
    images: ["/og-referral.jpg"],
  },
  keywords: [
    "referral program",
    "affiliate program",
    "earn commission",
    "web development referrals",
    "cybersecurity referrals",
    "passive income",
    "freelance referrals",
    "Abdullah referral",
  ],
};

const referralSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Referral Program | Abdullah - Earn 25% Commission",
  "description": "Join Abdullah's referral and affiliate program. Earn up to 25% commission by referring clients for web development, AI, and cybersecurity projects.",
  "url": "https://abdullahdigital.vercel.app/referral",
  "about": {
    "@type": "Thing",
    "name": "Referral & Affiliate Program"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Bronze Partner",
      "description": "10% Commission for projects under $500",
      "price": "10",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "Under $500"
      }
    },
    {
      "@type": "Offer",
      "name": "Silver Partner",
      "description": "15% Commission for projects $500-$2000",
      "price": "15",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "$500 - $2000"
      }
    },
    {
      "@type": "Offer",
      "name": "Gold Partner",
      "description": "20-25% Commission for projects $2000+",
      "price": "20",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "$2000+"
      }
    }
  ],
  "potentialAction": {
    "@type": "CommunicateAction",
    "name": "Submit Referral",
    "description": "Submit your referral to earn commission",
    "target": "https://abdullahdigital.vercel.app/referral"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(referralSchema),
        }}
      />
      <ReferralPage />
    </>
  );
}