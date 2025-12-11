import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-bg-batman.gif')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-8 relative inline-block"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">SNPAZIN</span>
              <span className="absolute -inset-1 text-primary/20 blur-lg select-none z-0">SNPAZIN</span>
            </div>
            <img 
              src="/images/batman-dancing.gif" 
              alt="Batman Dancing" 
              className="h-24 md:h-40 w-auto object-contain -mt-6 md:-mt-10"
            />
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            Desenvolvimento moderno e <span className="text-primary font-bold">design inovador</span>
          </h2>
          <p className="text-lg text-muted-foreground/80">
            Transformando ideias em realidade digital através de código limpo e interfaces imersivas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-12 rounded-none border border-transparent relative overflow-hidden group"
            onClick={() => window.open('https://github.com/snapzin', '_blank')}
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-white/20 text-white hover:bg-white/5 font-medium text-base px-8 h-12 rounded-none relative overflow-hidden group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Solicitar Orçamento <Download className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>

        
      </div>
    </section>
  );
}
