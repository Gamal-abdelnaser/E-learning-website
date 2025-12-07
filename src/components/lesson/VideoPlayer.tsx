import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  currentTime?: string;
  duration?: string;
}

export function VideoPlayer({ currentTime = "1:12", duration = "3:45" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([33]);

  return (
    <div className="relative bg-muted aspect-video flex items-center justify-center">
      {/* Placeholder video background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-background/50" />
      
      {/* Play button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="relative z-10 w-16 h-16 rounded-full bg-muted-foreground/30 flex items-center justify-center hover:bg-muted-foreground/40 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 text-foreground" />
        ) : (
          <Play className="w-8 h-8 text-foreground ml-1" />
        )}
      </button>

      {/* Progress bar overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
