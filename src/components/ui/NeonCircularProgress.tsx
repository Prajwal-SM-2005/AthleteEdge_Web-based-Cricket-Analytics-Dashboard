import { cn } from '@/lib/utils';

interface NeonCircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'lime';
  label?: string;
  showValue?: boolean;
  className?: string;
}

const colorMap = {
  blue: 'hsl(190, 100%, 50%)',
  purple: 'hsl(270, 91%, 65%)',
  pink: 'hsl(330, 90%, 60%)',
  cyan: 'hsl(185, 94%, 48%)',
  lime: 'hsl(150, 100%, 50%)',
};

const glowMap = {
  blue: 'drop-shadow(0 0 10px hsl(190 100% 50% / 0.8)) drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))',
  purple: 'drop-shadow(0 0 10px hsl(270 91% 65% / 0.8)) drop-shadow(0 0 20px hsl(270 91% 65% / 0.5))',
  pink: 'drop-shadow(0 0 10px hsl(330 90% 60% / 0.8)) drop-shadow(0 0 20px hsl(330 90% 60% / 0.5))',
  cyan: 'drop-shadow(0 0 10px hsl(185 94% 48% / 0.8)) drop-shadow(0 0 20px hsl(185 94% 48% / 0.5))',
  lime: 'drop-shadow(0 0 10px hsl(150 100% 50% / 0.8)) drop-shadow(0 0 20px hsl(150 100% 50% / 0.5))',
};

export const NeonCircularProgress = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = 'blue',
  label,
  showValue = true,
  className,
}: NeonCircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min(value / max, 1);
  const offset = circumference - percentage * circumference;

  return (
    <div className={cn('circular-progress flex flex-col items-center gap-2', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ filter: glowMap[color] }}>
          <circle
            className="track"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            stroke="hsl(230 30% 15%)"
          />
          <circle
            className="progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={colorMap[color]}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 0.8s ease-in-out',
            }}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display font-bold"
              style={{
                fontSize: size / 4,
                color: colorMap[color],
                textShadow: `0 0 10px ${colorMap[color]}`,
              }}
            >
              {Math.round(value)}
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
      )}
    </div>
  );
};
