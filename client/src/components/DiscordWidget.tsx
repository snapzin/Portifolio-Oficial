import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gamepad2, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DiscordWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const username = "._zayon_.";
  const status = "Jogando Valorant";

  const handleCopy = () => {
    navigator.clipboard.writeText(username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#111] border border-white/10 rounded-xl p-4 w-72 shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Header Background */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-primary/20" />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white/50 hover:text-white z-20"
            >
              <X size={16} />
            </button>

            <div className="relative z-10 mt-4 flex flex-col gap-3">
              {/* Avatar & Status */}
              <div className="relative w-20 h-20 rounded-full border-4 border-[#111] bg-zinc-800 mx-auto">
                <img 
                  src="/images/avatar.png" 
                  alt="Discord Avatar" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-[#111]" title="Online" />
              </div>

              {/* User Info */}
              <div className="text-center">
                <h3 className="text-white font-bold text-lg">{username}</h3>
                <div className="flex items-center justify-center gap-1.5 text-xs text-white/70 mt-1 bg-white/5 py-1 px-2 rounded-full w-fit mx-auto">
                  <Gamepad2 size={12} className="text-primary" />
                  <span>{status}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-white/80 transition-all"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check size={14} className="mr-2 text-green-500" />
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
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white p-3 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </div>
  );
}
