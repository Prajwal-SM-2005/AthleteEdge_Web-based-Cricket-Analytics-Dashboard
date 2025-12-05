import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PlayerCard } from '@/components/coach/PlayerCard';
import { PlayerForm } from '@/components/coach/PlayerForm';
import { usePlayers } from '@/context/PlayerContext';
import { Player } from '@/data/players';
import { Plus, Search, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const CoachPanel = () => {
  const { players, addPlayer, updatePlayer, deletePlayer, setSelectedPlayer } = usePlayers();
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPlayer = (data: Omit<Player, 'id'>) => {
    addPlayer(data);
    setShowForm(false);
    toast.success('Player added successfully!');
  };

  const handleEditPlayer = (data: Omit<Player, 'id'>) => {
    if (editingPlayer) {
      updatePlayer(editingPlayer.id, data);
      setEditingPlayer(null);
      toast.success('Player updated successfully!');
    }
  };

  const handleDeletePlayer = () => {
    if (deleteId) {
      deletePlayer(deleteId);
      setDeleteId(null);
      toast.success('Player removed from squad');
    }
  };

  const handleViewPlayer = (player: Player) => {
    setSelectedPlayer(player);
    navigate('/player');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary neon-text">
                Coach Panel
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage your squad • {players.length} players
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="neon-button rounded-lg flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Player
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search players by name or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="neon-input pl-10"
          />
        </div>

        {/* Player Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlayers.map((player, index) => (
            <div key={player.id} style={{ animationDelay: `${index * 0.05}s` }}>
              <PlayerCard
                player={player}
                onEdit={setEditingPlayer}
                onDelete={setDeleteId}
                onView={handleViewPlayer}
              />
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="neon-card text-center py-12">
            <p className="text-muted-foreground">No players found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      {(showForm || editingPlayer) && (
        <PlayerForm
          player={editingPlayer}
          onSubmit={editingPlayer ? handleEditPlayer : handleAddPlayer}
          onCancel={() => {
            setShowForm(false);
            setEditingPlayer(null);
          }}
        />
      )}

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="bg-card border-destructive/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display text-destructive">
              Remove Player?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove the player from your squad.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-muted-foreground/30">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeletePlayer}
              className="bg-destructive hover:bg-destructive/90"
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default CoachPanel;
