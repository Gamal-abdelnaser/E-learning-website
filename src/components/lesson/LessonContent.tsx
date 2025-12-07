import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LessonContentProps {
  title: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
}

export function LessonContent({ title, description, instructor }: LessonContentProps) {
  return (
    <div className="flex-1 p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <h1 className="text-2xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={instructor.avatar} alt={instructor.name} />
              <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{instructor.name}</p>
              <p className="text-sm text-muted-foreground">{instructor.role}</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notes">
          <div className="bg-card rounded-lg p-4 border border-border">
            <h3 className="font-semibold text-foreground mb-2">Your Notes</h3>
            <textarea
              className="w-full h-40 bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
              placeholder="Take notes here..."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="resources">
          <div className="space-y-3">
            <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium text-foreground">Course Slides (PDF)</p>
              <p className="text-sm text-muted-foreground">Download the presentation slides</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium text-foreground">Code Repository</p>
              <p className="text-sm text-muted-foreground">Access the GitHub repository</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
