import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Player, initialPlayers } from '@/data/players';

interface PlayerContextType {
  players: Player[];
  addPlayer: (player: Omit<Player, 'id'>) => void;
  updatePlayer: (id: string, player: Partial<Player>) => void;
  deletePlayer: (id: string) => void;
  getPlayer: (id: string) => Player | undefined;
  selectedPlayer: Player | null;
  setSelectedPlayer: (player: Player | null) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const addPlayer = (playerData: Omit<Player, 'id'>) => {
    const newPlayer: Player = {
      ...playerData,
      id: Date.now().toString(),
    };
    setPlayers((prev) => [...prev, newPlayer]);
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, ...updates } : player
      )
    );
  };

  const deletePlayer = (id: string) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const getPlayer = (id: string) => {
    return players.find((player) => player.id === id);
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        addPlayer,
        updatePlayer,
        deletePlayer,
        getPlayer,
        selectedPlayer,
        setSelectedPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayers = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayers must be used within a PlayerProvider');
  }
  return context;
};
