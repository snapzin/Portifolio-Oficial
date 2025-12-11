import { Github, ExternalLink, Code2, Globe, Bot, Layout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      name: "Website Dr. Elaine Antunes",
      description: "Site oficial para nutricionista oncológica, oferecendo planos de dieta personalizados e consultas online.",
      tags: ["HTML", "CSS", "Web Design"],
      link: "https://github.com/snapzin/Website-for-Dr.-Elaine-Antunes-Oncology-Nutritionist.",
      icon: Globe
    },
    {
      name: "SocietyX Bot",
      description: "Bot desenvolvido em JavaScript para automação e interações em comunidades.",
      tags: ["JavaScript", "Automation", "Bot"],
      link: "https://github.com/snapzin/societyx-bot-main",
      icon: Bot
    },
    {
      name: "Meu Portfólio (V1)",
      description: "Primeira versão do portfólio focada em UI responsiva e código limpo.",
      tags: ["CSS", "Frontend", "UI/UX"],
      link: "https://github.com/snapzin/meu-portifolio",
      icon: Layout
    },
    {
      name: "Little Project v.2",
      description: "Projeto de aprendizado focado em estrutura web, semântica HTML e fundamentos.",
      tags: ["HTML", "Learning", "Basics"],
      link: "https://github.com/snapzin/Little-Project-v.2",
      icon: Code2
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/5 relative">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">PROJETOS</h2>
          <div className="w-20 h-1 bg-primary" />
          <p className="text-muted-foreground mt-4 max-w-lg">
            Alguns dos meus trabalhos recentes e estudos em desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {projects.map((project) => (
            <Card key={project.name} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,215,0,0.1)] flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => window.open(project.link, '_blank')}>
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </Button>
                </div>
                <CardTitle className="mt-4 text-xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-base mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Github className="mr-2 w-4 h-4" /> Ver Código
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8"
            onClick={() => window.open('https://github.com/snapzin', '_blank')}
          >
            Ver todos no GitHub <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
