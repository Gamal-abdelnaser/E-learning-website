import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { continueLearnig } from "@/data/courses";

export function ContinueLearning() {
  return (
    <section className="mb-6">
      <h3 className="font-semibold text-foreground text-lg mb-4">Continue Learning</h3>
      <div className="space-y-4">
        {continueLearnig.map((course) => (
          <Card key={course.id} className="p-4 flex gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-0.5">{course.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
              <Progress value={course.progress} className="h-1.5 mb-3" />
              <Link to={`/lesson/${course.id}/1`}>
                <Button size="sm" variant="default">Continue</Button>
              </Link>
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
