import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ListFilter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/lesson/VideoPlayer";
import { LessonContent } from "@/components/lesson/LessonContent";
import { toast } from "@/hooks/use-toast";

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkComplete = () => {
    setIsCompleted(true);
    toast({
      title: "Lesson completed!",
      description: "Great job! Keep up the good work.",
    });
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to={`/course/${courseId}`} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="font-semibold text-foreground text-sm truncate max-w-[200px]">
            Introduction to React Hooks
          </h1>
          <button className="p-2 -mr-2">
            <ListFilter className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <div className="pt-14 flex-1 flex flex-col">
        {/* Video Player */}
        <VideoPlayer />

        {/* Lesson Content */}
        <LessonContent
          title="Introduction to React Hooks"
          description="A concise, one-paragraph summary of the lesson's key takeaways, explaining what will be covered in the video. This lesson introduces the fundamental concepts of React Hooks, such as useState and useEffect."
          instructor={{
            name: "John Doe",
            role: "Lead Frontend Engineer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          }}
        />
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
        <Button
          className="w-full"
          size="lg"
          variant={isCompleted ? "secondary" : "default"}
          onClick={handleMarkComplete}
          disabled={isCompleted}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          {isCompleted ? "Completed" : "Mark as completed"}
        </Button>
      </div>
    </main>
  );
};

export default LessonPage;
