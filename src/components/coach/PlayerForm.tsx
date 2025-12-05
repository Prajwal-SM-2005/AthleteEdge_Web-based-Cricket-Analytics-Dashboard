import { useState, useEffect } from 'react';
import { Player } from '@/data/players';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface PlayerFormProps {
  player?: Player | null;
  onSubmit: (data: Omit<Player, 'id'>) => void;
  onCancel: () => void;
}

export const PlayerForm = ({ player, onSubmit, onCancel }: PlayerFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Batsman' as Player['role'],
    avatar: '',
    battingAverage: 0,
    strikeRate: 0,
    totalRuns: 0,
    fours: 0,
    sixes: 0,
    bowlingEconomy: 0,
    wickets: 0,
    catches: 0,
    fitnessScore: 0,
    fieldingRating: 0,
    matchesPlayed: 0,
    runsPerMatch: [] as number[],
    wicketsPerMatch: [] as number[],
  });

  useEffect(() => {
    if (player) {
      setFormData({
        name: player.name,
        role: player.role,
        avatar: player.avatar,
        battingAverage: player.battingAverage,
        strikeRate: player.strikeRate,
        totalRuns: player.totalRuns,
        fours: player.fours,
        sixes: player.sixes,
        bowlingEconomy: player.bowlingEconomy,
        wickets: player.wickets,
        catches: player.catches,
        fitnessScore: player.fitnessScore,
        fieldingRating: player.fieldingRating,
        matchesPlayed: player.matchesPlayed,
        runsPerMatch: player.runsPerMatch,
        wicketsPerMatch: player.wicketsPerMatch,
      });
    }
  }, [player]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = formData.name.split(' ').map(n => n[0]).join('').toUpperCase();
    onSubmit({
      ...formData,
      avatar,
      runsPerMatch: formData.runsPerMatch.length ? formData.runsPerMatch : Array(10).fill(0).map(() => Math.floor(Math.random() * 100)),
      wicketsPerMatch: formData.wicketsPerMatch.length ? formData.wicketsPerMatch : Array(10).fill(0).map(() => Math.floor(Math.random() * 4)),
    });
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="neon-card max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-primary neon-text">
            {player ? 'Edit Player' : 'Add Player'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Label className="text-foreground font-medium">Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="neon-input mt-1"
                placeholder="Player Name"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label className="text-foreground font-medium">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleChange('role', value)}
              >
                <SelectTrigger className="neon-input mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/30">
                  <SelectItem value="Batsman">Batsman</SelectItem>
                  <SelectItem value="Bowler">Bowler</SelectItem>
                  <SelectItem value="All-Rounder">All-Rounder</SelectItem>
                  <SelectItem value="Wicket-Keeper">Wicket-Keeper</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-4">
            <h3 className="font-display text-lg text-secondary mb-4">Batting Stats</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <Label className="text-foreground font-medium text-sm">Batting Avg</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.battingAverage}
                  onChange={(e) => handleChange('battingAverage', parseFloat(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Strike Rate</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.strikeRate}
                  onChange={(e) => handleChange('strikeRate', parseFloat(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Total Runs</Label>
                <Input
                  type="number"
                  value={formData.totalRuns}
                  onChange={(e) => handleChange('totalRuns', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Fours</Label>
                <Input
                  type="number"
                  value={formData.fours}
                  onChange={(e) => handleChange('fours', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Sixes</Label>
                <Input
                  type="number"
                  value={formData.sixes}
                  onChange={(e) => handleChange('sixes', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Matches</Label>
                <Input
                  type="number"
                  value={formData.matchesPlayed}
                  onChange={(e) => handleChange('matchesPlayed', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-4">
            <h3 className="font-display text-lg text-accent mb-4">Bowling Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground font-medium text-sm">Economy</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.bowlingEconomy}
                  onChange={(e) => handleChange('bowlingEconomy', parseFloat(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Wickets</Label>
                <Input
                  type="number"
                  value={formData.wickets}
                  onChange={(e) => handleChange('wickets', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-4">
            <h3 className="font-display text-lg text-neon-cyan mb-4">Fitness & Fielding</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-foreground font-medium text-sm">Fitness (0-100)</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.fitnessScore}
                  onChange={(e) => handleChange('fitnessScore', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Fielding (0-100)</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.fieldingRating}
                  onChange={(e) => handleChange('fieldingRating', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
              <div>
                <Label className="text-foreground font-medium text-sm">Catches</Label>
                <Input
                  type="number"
                  value={formData.catches}
                  onChange={(e) => handleChange('catches', parseInt(e.target.value) || 0)}
                  className="neon-input mt-1"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 border-muted-foreground/30 hover:bg-muted"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 neon-button rounded-lg"
            >
              {player ? 'Update Player' : 'Add Player'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
