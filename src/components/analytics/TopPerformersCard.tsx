import { Player } from '@/data/players';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopPerformersCardProps {
  title: string;
  players: Player[];
  statKey: string;
  getStatValue: (player: Player) => number;
  color: 'blue' | 'purple' | 'pink';
}

const medals = ['🥇', '🥈', '🥉'];
const medalClasses = ['medal-gold', 'medal-silver', 'medal-bronze'];

export const TopPerformersCard = ({
  title,
  players,
  getStatValue,
  color,
}: TopPerformersCardProps) => {
  const borderClass = color === 'blue' ? 'neon-border' : color === 'purple' ? 'neon-border-purple' : 'neon-border-pink';
  const textClass = color === 'blue' ? 'text-primary neon-text' : color === 'purple' ? 'text-secondary neon-text-purple' : 'text-accent neon-text-pink';

  return (
    <div className={cn('neon-card', borderClass)}>
      <div className="flex items-center gap-3 mb-4">
        <Trophy className={cn('h-5 w-5', textClass)} />
        <h3 className={cn('font-display font-bold text-lg', textClass)}>{title}</h3>
      </div>

      <div className="space-y-3">
        {players.slice(0, 3).map((player, index) => (
          <div
            key={player.id}
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg transition-all duration-300',
              index === 0 && 'bg-neon-gold/10 border border-neon-gold/30',
              index === 1 && 'bg-neon-silver/10 border border-neon-silver/30',
              index === 2 && 'bg-neon-bronze/10 border border-neon-bronze/30'
            )}
          >
            <span className={cn('text-2xl', medalClasses[index])}>{medals[index]}</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{player.name}</p>
              <p className="text-xs text-muted-foreground">{player.role}</p>
            </div>
            <div className={cn('font-display font-bold text-xl', medalClasses[index])}>
              {getStatValue(player).toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
