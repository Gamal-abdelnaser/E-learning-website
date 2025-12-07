import { Bookmark } from "lucide-react";
import { CourseCard } from "@/components/courses/CourseCard";
import { featuredCourses } from "@/data/courses";

const SavedPage = () => {
  const savedCourses = featuredCourses.slice(0, 2); // Mock saved courses

  return (
    <main className="min-h-screen pt-16 pb-20 md:pb-8 bg-background">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Saved Courses</h1>

        {savedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCourses.map((course, index) => (
              <div
                key={course.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">No saved courses yet</h2>
            <p className="text-muted-foreground max-w-sm">
              Browse our courses and save the ones you're interested in to access them later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SavedPage;
