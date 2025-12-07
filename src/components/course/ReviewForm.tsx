import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface ReviewFormProps {
  courseId: string;
  onSubmit: (rating: number, comment: string) => void;
}

export const ReviewForm = ({ courseId, onSubmit }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting your review.",
        variant: "destructive",
      });
      return;
    }

    if (comment.trim().length < 10) {
      toast({
        title: "Comment too short",
        description: "Please write at least 10 characters in your review.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
    setIsSubmitting(false);
    
    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your feedback.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border border-border rounded-xl p-4 bg-card">
      <h3 className="font-semibold text-foreground mb-4">Write a Review</h3>
      
      <div className="mb-4">
        <label className="text-sm text-muted-foreground mb-2 block">Your Rating</label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`w-7 h-7 transition-colors ${
                  star <= (hoverRating || rating)
                    ? "fill-star text-star"
                    : "text-muted-foreground/30"
                }`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-2 text-sm text-muted-foreground">
              {rating === 1 && "Poor"}
              {rating === 2 && "Fair"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </span>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="comment" className="text-sm text-muted-foreground mb-2 block">
          Your Review
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this course..."
          className="min-h-[100px] resize-none"
          maxLength={500}
        />
        <p className="text-xs text-muted-foreground mt-1 text-right">
          {comment.length}/500
        </p>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};
