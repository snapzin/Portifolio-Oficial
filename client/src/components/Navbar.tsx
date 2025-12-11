import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navLinks.map(link => link.href === "/" ? "hero" : link.href.substring(1));
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section === "hero" ? "/" : `#${section}`);
            break;
          }
        }
      }
      
      // Special case for top of page
      if (window.scrollY < 100) {
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/20 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-mono font-bold text-xl tracking-tighter">PORTFOLIO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                activeSection === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-dashed border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-mono text-xs h-9"
            onClick={() => scrollToSection("#contact")}
          >
            <MessageSquare className="w-3 h-3 mr-2" />
            Contato
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-left text-lg font-medium py-3 border-b border-border/10 transition-colors flex items-center justify-between group",
                    activeSection === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === link.href ? "bg-primary" : "bg-transparent group-hover:bg-primary/50"
                  )} />
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold"
                  onClick={() => scrollToSection("#contact")}
                >
                  Entre em contato
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
