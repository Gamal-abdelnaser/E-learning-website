import { Star, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Review } from "@/types/course";
import { useState } from "react";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(helpfulCount + 1);
      setHasVoted(true);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="border border-border rounded-xl p-4 bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={review.userAvatar} alt={review.userName} />
            <AvatarFallback>{review.userName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{review.userName}</p>
            <p className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? "fill-star text-star" : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{review.comment}</p>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleHelpful}
          className={`text-xs gap-1.5 ${hasVoted ? "text-primary" : "text-muted-foreground"}`}
        >
          <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? "fill-primary" : ""}`} />
          Helpful ({helpfulCount})
        </Button>
      </div>
    </div>
  );
};
