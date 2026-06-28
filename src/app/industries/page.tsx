import type { Metadata } from "next";
import IndustriesPage from "./IndustriesPage";

export const metadata: Metadata = {
  title: "Industries | Abdullah",
  description: "Explore the industries I have built software for.",
  alternates: {
    canonical: "/industries",
  },
};

export default function Page() {
  return <IndustriesPage />;
}