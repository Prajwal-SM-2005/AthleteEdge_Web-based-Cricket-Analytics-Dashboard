import { NavLink } from '@/components/NavLink';
import { Users, BarChart3, User, Zap } from 'lucide-react';

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary animate-pulse-neon" />
              <div className="absolute inset-0 blur-md bg-primary/30 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground neon-text">
                ATHLETEEDGE
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Peak Performance
              </span>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/coach"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              activeClassName="text-primary bg-primary/10 neon-border"
            >
              <Users className="h-4 w-4" />
              <span className="font-medium text-sm tracking-wide">Coach</span>
            </NavLink>
            <NavLink
              to="/player"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/10 transition-all duration-300"
              activeClassName="text-secondary bg-secondary/10 neon-border-purple"
            >
              <User className="h-4 w-4" />
              <span className="font-medium text-sm tracking-wide">Player</span>
            </NavLink>
            <NavLink
              to="/analytics"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-300"
              activeClassName="text-accent bg-accent/10 neon-border-pink"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="font-medium text-sm tracking-wide">Analytics</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
