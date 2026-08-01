import { LucideIcon, TrendingUp } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = 'text-primary',
}: Props) {
  return (
    <Card className="rounded-3xl p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:scale-110 md:h-14 md:w-14',
            iconColor
          )}
        >
          <Icon className="h-6 w-6 md:h-7 md:w-7" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600">
        <TrendingUp className="h-4 w-4" />

        <span>Updated recently</span>
      </div>
    </Card>
  );
}
