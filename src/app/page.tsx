import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Industries from "../components/Industries";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AbdullahDigital | AI, Cybersecurity & Full-Stack Developer",
  description:
    "Abdullah's portfolio featuring AI, cybersecurity, and full-stack development projects, skills, certifications, and services.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="sr-only" aria-label="AbdullahDigital overview">
        <h1>AbdullahDigital | AI, Cybersecurity & Full-Stack Developer</h1>
        <p>
          AbdullahDigital is a portfolio and digital services brand for Muhammad Abdullah, a full-stack developer, cybersecurity specialist, and AI automation engineer based in Rawalpindi, Pakistan. The site showcases web development, cybersecurity services, AI integrations, software engineering projects, and client contact options for businesses, startups, and teams that need scalable digital solutions.
        </p>
        <p>
          Services include custom web applications, secure backend systems, AI-enabled workflows, responsive design, SEO strategy, and technical consulting. Visitors can explore projects, skills, industries served, certifications, and contact information for hiring or collaboration.
        </p>
      </section>
      <Navbar />
      <Hero />
      <Facts />
      <Skills />
      <Industries />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
