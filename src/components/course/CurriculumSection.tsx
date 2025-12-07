import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, CheckCircle, Play, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/types/course";

interface CurriculumSectionProps {
  sections: Section[];
}

export function CurriculumSection({ sections }: CurriculumSectionProps) {
  const { id: courseId } = useParams();
  const [expandedSections, setExpandedSections] = useState<string[]>([sections[0]?.id]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const isExpanded = expandedSections.includes(section.id);
        
        return (
          <div key={section.id} className="border-b border-border pb-4 last:border-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between py-3 text-left"
            >
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            
            {isExpanded && (
              <div className="space-y-2 mt-2">
                {section.lessons.map((lesson) => {
                  const containerClasses = cn(
                    "flex items-center gap-3 p-4 rounded-lg transition-all",
                    lesson.current && "bg-primary/10 border border-primary/30",
                    !lesson.current && !lesson.locked && "bg-card hover:bg-accent cursor-pointer",
                    lesson.locked && "bg-card/50 opacity-60 cursor-not-allowed"
                  );

                  const content = (
                    <>
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        lesson.completed && "bg-primary",
                        lesson.current && !lesson.completed && "bg-primary",
                        !lesson.completed && !lesson.current && "bg-muted"
                      )}>
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-primary-foreground" />
                        ) : lesson.locked ? (
                          <Lock className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={cn(
                          "font-medium text-sm",
                          lesson.locked ? "text-muted-foreground" : "text-foreground"
                        )}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                    </>
                  );
                  
                  if (lesson.locked) {
                    return (
                      <div key={lesson.id} className={containerClasses}>
                        {content}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${courseId}/${lesson.id}`}
                      className={containerClasses}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
