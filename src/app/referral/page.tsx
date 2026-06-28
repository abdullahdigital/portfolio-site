import type { Metadata } from "next";
import ReferralPage from "./ReferralPage";

export const metadata: Metadata = {
  title: "Referral Program | Abdullah",
  description:
    "Join Abdullah's referral program and earn commissions by referring clients for web development, AI, and cybersecurity projects.",
  alternates: {
    canonical: "/referral",
  },
};

export default function Page() {
  return <ReferralPage />;
}