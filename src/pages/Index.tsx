import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Users, User, BarChart3, Zap, Trophy, Target, Activity } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <Zap className="h-20 w-20 text-primary animate-pulse-neon" />
            <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-4">
            <span className="neon-text">ATHLETE</span>
            <span className="text-secondary neon-text-purple">EDGE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Peak Performance, Powered by Insight
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <Link
            to="/coach"
            className="neon-card group cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-primary mb-2">Coach Panel</h2>
              <p className="text-sm text-muted-foreground">
                Manage players, update stats, and build your winning squad
              </p>
            </div>
          </Link>

          <Link
            to="/player"
            className="neon-card group cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-xl bg-secondary/10 mb-4 group-hover:scale-110 transition-transform">
                <User className="h-10 w-10 text-secondary" />
              </div>
              <h2 className="font-display text-xl font-bold text-secondary mb-2">Player Panel</h2>
              <p className="text-sm text-muted-foreground">
                View individual performance metrics and track your progress
              </p>
            </div>
          </Link>

          <Link
            to="/analytics"
            className="neon-card group cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-xl bg-accent/10 mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-10 w-10 text-accent" />
              </div>
              <h2 className="font-display text-xl font-bold text-accent mb-2">Team Analytics</h2>
              <p className="text-sm text-muted-foreground">
                Comprehensive team insights with top performer rankings
              </p>
            </div>
          </Link>
        </div>

        {/* Stats Preview */}
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-neon-gold" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">15+</div>
              <div className="text-xs text-muted-foreground">Elite Players</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">50K+</div>
              <div className="text-xs text-muted-foreground">Total Runs</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-accent" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">1500+</div>
              <div className="text-xs text-muted-foreground">Wickets Taken</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
