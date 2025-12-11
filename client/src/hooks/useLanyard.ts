import { useState, useEffect } from 'react';

const LANYARD_WS = 'wss://api.lanyard.rest/socket';
const DISCORD_ID = '783008334516060191';

export type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

export interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name: string;
    display_name: string;
    public_flags: number;
  };
  discord_status: DiscordStatus;
  activities: Array<{
    type: number;
    state: string;
    name: string;
    id: string;
    emoji?: { name: string; id?: string; animated?: boolean };
    created_at: number;
    timestamps?: { start: number; end?: number };
    details?: string;
    assets?: { large_image?: string; large_text?: string; small_image?: string; small_text?: string };
  }>;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

export function useLanyard() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [status, setStatus] = useState<DiscordStatus>('offline');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let socket: WebSocket;
    let heartbeatInterval: NodeJS.Timeout;

    const connect = () => {
      socket = new WebSocket(LANYARD_WS);

      socket.onopen = () => {
        // console.log('Lanyard WS Connected');
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const { op, d } = message;

        switch (op) {
          case 1: // Hello
            // Send Initialize
            socket.send(JSON.stringify({
              op: 2,
              d: { subscribe_to_id: DISCORD_ID }
            }));
            
            // Setup Heartbeat
            heartbeatInterval = setInterval(() => {
              socket.send(JSON.stringify({ op: 3 }));
            }, d.heartbeat_interval);
            break;

          case 0: // Event
            if (message.t === 'INIT_STATE' || message.t === 'PRESENCE_UPDATE') {
              setData(d);
              setStatus(d.discord_status);
              setLoading(false);
            }
            break;
        }
      };

      socket.onclose = () => {
        // console.log('Lanyard WS Closed, reconnecting...');
        clearInterval(heartbeatInterval);
        setTimeout(connect, 5000);
      };
    };

    connect();

    return () => {
      if (socket) socket.close();
      if (heartbeatInterval) clearInterval(heartbeatInterval);
    };
  }, []);

  return { data, status, loading };
}
