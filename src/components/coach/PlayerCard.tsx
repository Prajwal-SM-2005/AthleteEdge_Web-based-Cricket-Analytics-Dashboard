import { Player, getRoleColor } from '@/data/players';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  player: Player;
  onEdit: (player: Player) => void;
  onDelete: (id: string) => void;
  onView: (player: Player) => void;
}

export const PlayerCard = ({ player, onEdit, onDelete, onView }: PlayerCardProps) => {
  const roleColor = getRoleColor(player.role);

  return (
    <div className="neon-card group hover:scale-[1.02] transition-all duration-300 animate-fade-in">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'w-14 h-14 rounded-lg flex items-center justify-center font-display font-bold text-lg',
            'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30'
          )}
          style={{
            boxShadow: `0 0 20px hsl(var(--${roleColor}) / 0.3)`,
          }}
        >
          {player.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground truncate">
            {player.name}
          </h3>
          <span
            className={cn(
              'inline-block px-2 py-0.5 rounded text-xs font-medium mt-1',
              roleColor === 'neon-blue' && 'bg-primary/20 text-primary',
              roleColor === 'neon-purple' && 'bg-secondary/20 text-secondary',
              roleColor === 'neon-pink' && 'bg-accent/20 text-accent',
              roleColor === 'neon-cyan' && 'bg-neon-cyan/20 text-neon-cyan'
            )}
          >
            {player.role}
          </span>
        </div>

        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onView(player)}
            className="p-2 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
            title="View Stats"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEdit(player)}
            className="p-2 rounded-lg hover:bg-secondary/20 text-muted-foreground hover:text-secondary transition-colors"
            title="Edit"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(player.id)}
            className="p-2 rounded-lg hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-primary/10">
        <div className="text-center">
          <div className="text-lg font-display font-bold text-primary">{player.battingAverage.toFixed(1)}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Avg</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-display font-bold text-secondary">{player.totalRuns}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Runs</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-display font-bold text-accent">{player.wickets}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Wkts</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-display font-bold text-neon-cyan">{player.fitnessScore}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Fit</div>
        </div>
      </div>
    </div>
  );
};
