import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/5 relative">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">PROJETOS</h2>
          <div className="w-20 h-1 bg-primary" />
          <p className="text-muted-foreground mt-4 max-w-lg">
            Confira meus projetos e contribuições diretamente no meu GitHub.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,215,0,0.1)]">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                GitHub: @snapzin
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <CardDescription className="text-base">
                Explore meus repositórios, códigos e projetos em desenvolvimento.
              </CardDescription>
              
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() => window.open('https://github.com/snapzin', '_blank')}
              >
                Acessar GitHub <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
