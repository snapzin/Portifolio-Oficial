import { Github, Instagram, Mail, MessageCircle, Heart, Coffee } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      username: "@1zayon_",
      icon: Instagram,
      href: "https://instagram.com/1zayon_",
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      username: "@snapzin",
      icon: Github,
      href: "https://github.com/snapzin",
      color: "hover:text-white"
    },
    {
      name: "Discord",
      username: "@._zayon_.",
      icon: MessageCircle,
      href: "#",
      color: "hover:text-indigo-400"
    },
    {
      name: "Email",
      username: "zayonantunes@gmail.com",
      icon: Mail,
      href: "mailto:zayonantunes@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="bg-background border-t border-border/20 pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 border border-dashed border-border/30 rounded-lg hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm hover:bg-card/50 flex flex-col items-center justify-center gap-4"
            >
              <div className={`p-3 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
                <link.icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">{link.name}</h3>
                <p className="text-sm text-muted-foreground font-mono">{link.username}</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/10 text-sm text-muted-foreground">
          <p>© 2025 snpazin. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}
