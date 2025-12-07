import { CheckCircle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Activity } from "@/types/course";

const recentActivity: Activity[] = [
  {
    id: "1",
    type: "completed",
    title: "Lesson Completed: What is UX?",
    timestamp: "Today, 11:30 AM",
  },
  {
    id: "2",
    type: "certificate",
    title: "Certificate Unlocked: Python Basics",
    timestamp: "Yesterday, 4:15 PM",
  },
];

export function RecentActivity() {
  return (
    <section>
      <h3 className="font-semibold text-foreground text-lg mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.map((activity) => (
          <Card key={activity.id} className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              {activity.type === "completed" ? (
                <CheckCircle className="w-5 h-5 text-primary" />
              ) : (
                <Award className="w-5 h-5 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
