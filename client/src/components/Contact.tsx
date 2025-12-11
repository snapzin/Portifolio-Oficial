import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container max-w-4xl text-center">
        <div className="relative p-8 md:p-16 rounded-2xl border border-dashed border-border bg-card/30 backdrop-blur-sm overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col items-center space-y-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                <img 
                  src="/images/avatar-snpazin.jpg" 
                  alt="snpazin" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-card" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Estou sempre aberto a novos projetos e oportunidades de colaboração. 
                Entre em contato para discutirmos sua próxima ideia!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-bold px-8 h-14 rounded-full shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all duration-300"
                onClick={() => window.location.href = 'mailto:zayonantunes@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Disponível para novos projetos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
