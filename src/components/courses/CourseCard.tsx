import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
}

export function CourseCard({ course, showProgress = false }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
        <div className="aspect-video overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-star text-star" />
            <span className="text-sm font-medium text-foreground">{course.rating}</span>
            {course.reviewCount && (
              <span className="text-sm text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
            )}
          </div>
          {showProgress && course.progress !== undefined && course.progress > 0 && (
            <div className="mt-3">
              <Progress value={course.progress} className="h-1.5" />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
