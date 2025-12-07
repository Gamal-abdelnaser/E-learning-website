import { Card } from "@/components/ui/card";
import { UserStats } from "@/types/course";

interface StatsCardsProps {
  stats: UserStats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <Card className="p-4">
        <p className="text-sm text-muted-foreground mb-1">In Progress</p>
        <p className="text-3xl font-bold text-foreground">{stats.inProgress}</p>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-muted-foreground mb-1">Completed</p>
        <p className="text-3xl font-bold text-foreground">{stats.completed}</p>
      </Card>
      <Card className="p-4 col-span-2">
        <p className="text-sm text-muted-foreground mb-1">Hours Learned</p>
        <p className="text-3xl font-bold text-foreground">{stats.hoursLearned}</p>
      </Card>
    </div>
  );
}
