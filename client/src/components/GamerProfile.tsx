import { motion } from "framer-motion";
import { Gamepad2, Github, Music, Monitor, Trophy, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GamerProfile() {
  // Dados reais do usuário
  const user = {
    id: "783008334516060191",
    username: "._zayon_.",
    global_name: "♕アルカード",
    avatar_url: "https://cdn.discordapp.com/avatars/783008334516060191/594a9ebb3c36c7c9bd92b0af1276e0fe.png",
    banner_url: "https://cdn.discordapp.com/banners/783008334516060191/a_f16352f42a60887e083ebafcfa506eb6.gif",
    status: "I Am Aspas",
    bio: "https://guns.lol/snapzin._.",
    badges: [
      { name: "Nitro", icon: "https://cdn.discordapp.com/badge-icons/4f33c4a9c64ce221936bd256c356f91f.png" },
      { name: "Server Booster", icon: "https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png" },
      { name: "Quest Completed", icon: "https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png" },
      { name: "Orb Badge", icon: "https://cdn.discordapp.com/badge-icons/83d8a1eb09a8d64e59233eec5d4d5c2d.png" }
    ],
    connections: [
      { type: "riotgames", name: "Snapzin#MIBR", icon: <Gamepad2 size={16} />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
      { type: "github", name: "snapzin", icon: <Github size={16} />, color: "text-white", bg: "bg-white/10", border: "border-white/20" },
      { type: "spotify", name: "♕Зайон Антунес", icon: <Music size={16} />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
      { type: "steam", name: "snapzin", icon: <Monitor size={16} />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" }
    ],
    steam_stats: {
      game_count: 80,
      created_at: "2020-09-11",
      item_count_dota2: 3
    }
  };

  return (
    <section id="gamer-profile" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">PERFIL <span className="text-primary">GAMER</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha identidade digital e conquistas nos jogos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-[#111] border-white/10 overflow-hidden h-full">
              <div className="h-32 w-full relative">
                <img 
                  src={user.banner_url} 
                  alt="Banner" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]" />
              </div>
              
              <CardContent className="relative pt-0 px-6 pb-6 -mt-12">
                <div className="flex justify-between items-end mb-4">
                  <div className="relative w-24 h-24 rounded-full border-[6px] border-[#111] bg-zinc-800">
                    <img 
                      src={user.avatar_url} 
                      alt="Avatar" 
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#111]" title="Online" />
                  </div>
                  
                  <div className="flex gap-1 mb-2 bg-black/40 p-1.5 rounded-lg backdrop-blur-sm border border-white/5">
                    {user.badges.map((badge, i) => (
                      <img key={i} src={badge.icon} alt={badge.name} className="w-6 h-6" title={badge.name} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{user.global_name}</h3>
                    <p className="text-white/50 font-mono text-sm">{user.username}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/80 bg-white/5 py-2 px-3 rounded-lg border border-white/5 w-fit">
                    <img src="https://cdn.discordapp.com/emojis/1432488933274419200.webp?size=44&quality=lossless" alt="Radiante" className="w-5 h-5" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <span>{user.status}</span>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      Valorant Player
                    </Badge>
                    <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10 hover:bg-white/10">
                      Full Stack Dev
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats & Connections */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Connections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.connections.map((conn, i) => (
                <Card key={i} className={`bg-[#111] ${conn.border} border transition-all hover:scale-[1.02]`}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`p-3 rounded-full ${conn.bg} ${conn.color}`}>
                      {conn.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{conn.type}</p>
                      <p className="text-white font-medium truncate">{conn.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Steam Stats */}
            <Card className="bg-[#111] border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Monitor className="text-blue-500" size={24} />
                  <h3 className="text-xl font-bold text-white">Steam Statistics</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground text-sm flex items-center gap-2">
                      <Gamepad2 size={14} /> Jogos
                    </span>
                    <span className="text-2xl font-bold text-white">{user.steam_stats.game_count}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground text-sm flex items-center gap-2">
                      <Calendar size={14} /> Membro desde
                    </span>
                    <span className="text-2xl font-bold text-white">2020</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground text-sm flex items-center gap-2">
                      <Trophy size={14} /> Dota 2 Items
                    </span>
                    <span className="text-2xl font-bold text-white">{user.steam_stats.item_count_dota2}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bio Link */}
            <a 
              href="https://guns.lol/snapzin._." 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-gradient-to-r from-primary/20 to-transparent border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Ver Bio Completa</h3>
                    <p className="text-muted-foreground text-sm">guns.lol/snapzin._.</p>
                  </div>
                  <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary group-hover:text-black transition-all">
                    <ArrowRightIcon />
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
