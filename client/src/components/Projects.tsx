import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Wyx Tracker",
      description: "API de tracking completa, rastreie estatísticas e histórico de partidas do Valorant.",
      tags: ["API", "Tracking", "Valorant"],
      image: "/images/project-wyx.png",
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "Victims",
      description: "Plataforma completa para você criar sua própria página de biografia e links.",
      tags: ["Bio-Page", "Links", "Platform"],
      image: "/images/project-victims.png",
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/5 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">PROJETOS</h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-muted-foreground mt-4 max-w-lg">
              Uma seleção dos meus trabalhos recentes, focados em performance e experiência do usuário.
            </p>
          </div>
          
          <Button variant="outline" className="group">
            Ver todos no GitHub
            <Github className="w-4 h-4 ml-2 group-hover:text-primary transition-colors" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,255,0,0.1)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <Button size="icon" className="rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground">
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs border-primary/20 text-primary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="gap-4 pt-0">
                <Button variant="default" size="sm" className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                  Ver Projeto
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
