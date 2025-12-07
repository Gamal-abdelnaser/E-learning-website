import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MoreVertical, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CurriculumSection } from "@/components/course/CurriculumSection";
import { allCourses, courseSections } from "@/data/courses";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = allCourses.find((c) => c.id === id) || allCourses[7]; // Default to SwiftUI course
  const progress = course.progress || 65;

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/courses" className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="font-semibold text-foreground">Course Details</h1>
          <button className="p-2 -mr-2">
            <MoreVertical className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <div className="pt-14 px-4">
        {/* Course Info */}
        <div className="py-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">{course.title}</h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>DY</AvatarFallback>
              </Avatar>
              <span className="text-foreground font-medium">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-star text-star" />
              <span className="font-medium text-foreground">{course.rating}</span>
              <span className="text-muted-foreground">({course.reviewCount?.toLocaleString() || "2.5k"})</span>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Course Progress</span>
              <span className="text-primary font-medium">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="curriculum">
          <TabsList>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum">
            <CurriculumSection sections={courseSections} />
          </TabsContent>
          
          <TabsContent value="about">
            <div className="space-y-4 text-muted-foreground">
              <p>
                This comprehensive course will take you from beginner to advanced in SwiftUI development. 
                You'll learn how to build beautiful, responsive iOS applications using Apple's modern declarative framework.
              </p>
              <h3 className="font-semibold text-foreground">What you'll learn:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>SwiftUI fundamentals and view composition</li>
                <li>State management with @State, @Binding, and @Observable</li>
                <li>Navigation and data flow patterns</li>
                <li>Advanced animations and transitions</li>
                <li>Building production-ready apps</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
        <Link to={`/lesson/${id}/1-2`}>
          <Button className="w-full" size="lg">
            Continue Learning
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default CourseDetailPage;
