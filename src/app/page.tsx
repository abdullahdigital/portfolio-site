import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Industries from "../components/Industries";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
