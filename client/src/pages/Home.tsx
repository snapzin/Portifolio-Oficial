import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />

        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
