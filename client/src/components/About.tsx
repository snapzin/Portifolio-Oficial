import { Gamepad2, Code2, Layers, Cpu, Globe, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const technologies = [
    "React & Next.js", "TypeScript", "Node.js", "NestJS", 
    "Prisma & PostgreSQL", "Tailwind CSS", "Angular", "Svelte",
    "C#", "Python", "Ruby", "Lua"
  ];

  const specialties = [
    { name: "Desenvolvimento Full-Stack", icon: Code2 },
    { name: "UI/UX Design", icon: Layers },
    { name: "Arquitetura de Software", icon: Cpu },
    { name: "APIs REST & GraphQL", icon: Globe },
    { name: "Deploy & DevOps", icon: Server }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">SOBRE MIM</h2>
              <div className="w-20 h-1 bg-primary" />
            </div>
            
            <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
              <p>
                Olá! Sou desenvolvedor full-stack especializado em criar soluções digitais modernas e inovadoras. 
                Com experiência em tecnologias de ponta, transformo ideias em realidade através de código limpo e design pensado.
              </p>
              <p>
                Minha paixão está em desenvolver aplicações web e mobile que não apenas funcionam perfeitamente, 
                mas também proporcionam experiências excepcionais aos usuários. Trabalho com as mais recentes 
                tecnologias do mercado para garantir que cada projeto seja robusto, escalável e eficiente.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Otaku no tempo livre</span>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-12">
            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-mono flex items-center gap-2">
                <span className="text-primary">&gt;</span> Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="px-3 py-1.5 text-sm font-normal bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-mono flex items-center gap-2">
                <span className="text-primary">&gt;</span> Especialidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((spec) => (
                  <div 
                    key={spec.name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-background group-hover:text-primary transition-colors">
                      <spec.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{spec.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
