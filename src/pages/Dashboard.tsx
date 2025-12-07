import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WeeklyActivity } from "@/components/dashboard/WeeklyActivity";
import { ContinueLearning } from "@/components/dashboard/ContinueLearning";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

const DashboardPage = () => {
  const userStats = {
    inProgress: 3,
    completed: 5,
    hoursLearned: 42,
  };

  return (
    <main className="min-h-screen pt-16 pb-20 md:pb-8 bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>AX</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold text-foreground">Welcome back, Alex!</h1>
            </div>
          </div>
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>

        {/* Stats */}
        <StatsCards stats={userStats} />

        {/* Weekly Activity */}
        <WeeklyActivity />

        {/* Continue Learning */}
        <ContinueLearning />

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </main>
  );
};

export default DashboardPage;
