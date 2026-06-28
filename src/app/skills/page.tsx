import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills | Abdullah",
  description:
    "Explore Abdullah's technical skills in AI, cybersecurity, full-stack development, cloud, databases, and modern web technologies.",
  alternates: {
    canonical: "/skills",
  },
};

export default function Page() {
  return <SkillsPage />;
}