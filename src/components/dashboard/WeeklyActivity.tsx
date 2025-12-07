import { Card } from "@/components/ui/card";

const weeklyData = [
  { day: "Mon", value: 80 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 70 },
];

export function WeeklyActivity() {
  const maxValue = Math.max(...weeklyData.map(d => d.value));
  
  return (
    <Card className="p-5 mb-6">
      <h3 className="font-semibold text-foreground mb-1">Weekly Activity</h3>
      <p className="text-sm text-muted-foreground mb-6">Last 7 Days</p>
      
      <div className="flex items-end justify-between gap-2 h-24">
        {weeklyData.map((data) => {
          const height = (data.value / maxValue) * 100;
          return (
            <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full max-w-[40px] bg-primary rounded-full transition-all duration-500"
                style={{ height: `${height}%`, minHeight: "8px" }}
              />
              <span className="text-xs text-muted-foreground">{data.day}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
