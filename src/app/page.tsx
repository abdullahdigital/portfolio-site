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
