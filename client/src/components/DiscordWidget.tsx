import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gamepad2, X, MessageCircle, Github, Music, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function DiscordWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  // Dados reais do usuário
  const user = {
    id: "783008334516060191",
    username: "._zayon_.",
    global_name: "♕アルカード",
    avatar_url: "https://cdn.discordapp.com/avatars/783008334516060191/594a9ebb3c36c7c9bd92b0af1276e0fe.png",
    banner_url: "https://cdn.discordapp.com/banners/783008334516060191/a_f16352f42a60887e083ebafcfa506eb6.gif",
    status: "I Am Aspas", // Baseado na bio
    badges: [
      { name: "Nitro", icon: "https://cdn.discordapp.com/badge-icons/4f33c4a9c64ce221936bd256c356f91f.png" },
      { name: "Server Booster", icon: "https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png" },
      { name: "Quest Completed", icon: "https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png" },
      { name: "Orb Badge", icon: "https://cdn.discordapp.com/badge-icons/83d8a1eb09a8d64e59233eec5d4d5c2d.png" }
    ],
    connections: [
      { type: "riotgames", name: "Snapzin#MIBR", icon: <Gamepad2 size={14} /> },
      { type: "github", name: "snapzin", icon: <Github size={14} /> },
      { type: "spotify", name: "♕Зайон Антунес", icon: <Music size={14} /> },
      { type: "steam", name: "snapzin", icon: <Monitor size={14} /> }
    ]
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(user.username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#111] border border-primary/20 rounded-xl w-80 shadow-2xl backdrop-blur-md relative overflow-hidden group"
          >
            {/* Banner */}
            <div className="h-24 w-full relative overflow-hidden">
              <img 
                src={user.banner_url} 
                alt="Banner" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]" />
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white/50 hover:text-white z-20 bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors"
            >
              <X size={14} />
            </button>

            <div className="px-4 pb-4 relative z-10 -mt-12">
              <div className="flex justify-between items-end">
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-full border-[6px] border-[#111] bg-zinc-800">
                  <img 
                    src={user.avatar_url} 
                    alt="Avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-[#111]" title="Online" />
                </div>

                {/* Badges */}
                <div className="flex gap-1 mb-2 bg-[#000]/40 p-1 rounded-lg backdrop-blur-sm border border-white/5">
                  <TooltipProvider>
                    {user.badges.map((badge, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger>
                          <img src={badge.icon} alt={badge.name} className="w-5 h-5" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{badge.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>

              {/* User Info */}
              <div className="mt-3">
                <h3 className="text-white font-bold text-xl leading-tight">{user.global_name}</h3>
                <p className="text-white/60 text-sm font-medium">{user.username}</p>
                
                {/* Custom Status */}
                <div className="flex items-center gap-2 text-xs text-white/80 mt-2 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5 w-fit">
                  <img src="https://cdn.discordapp.com/emojis/1432488933274419200.webp?size=44&quality=lossless" alt="Radiante" className="w-4 h-4" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <span>{user.status}</span>
                </div>
              </div>

              {/* Connected Accounts */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {user.connections.map((conn, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] text-white/50 bg-white/5 p-1.5 rounded border border-white/5 overflow-hidden">
                    <span className="text-white/70 shrink-0">{conn.icon}</span>
                    <span className="truncate">{conn.name}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-primary/10 border-primary/20 hover:bg-primary/20 hover:text-primary text-primary transition-all font-bold"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check size={14} className="mr-2" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="mr-2" />
                      Copiar Username
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white p-3 rounded-full shadow-lg transition-colors relative group"
        >
          <MessageCircle size={24} />
          <span className="absolute right-0 top-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </motion.button>
      )}
    </div>
  );
}
