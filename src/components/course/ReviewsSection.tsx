import { useState, useMemo } from "react";
import { Star } from "lucide-react";
import { Review } from "@/types/course";
import { ReviewCard } from "./ReviewCard";
import { ReviewForm } from "./ReviewForm";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ReviewsSectionProps {
  courseId: string;
  reviews: Review[];
  averageRating: number;
}

export const ReviewsSection = ({ courseId, reviews: initialReviews, averageRating }: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState("recent");

  const ratingDistribution = useMemo(() => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach((review) => {
      distribution[review.rating - 1]++;
    });
    return distribution.reverse();
  }, [reviews]);

  const sortedReviews = useMemo(() => {
    const sorted = [...reviews];
    switch (sortBy) {
      case "recent":
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case "highest":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return sorted.sort((a, b) => a.rating - b.rating);
      case "helpful":
        return sorted.sort((a, b) => b.helpful - a.helpful);
      default:
        return sorted;
    }
  }, [reviews, sortBy]);

  const handleNewReview = (rating: number, comment: string) => {
    const newReview: Review = {
      id: `r-new-${Date.now()}`,
      courseId,
      userId: "current-user",
      userName: "You",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating,
      comment,
      createdAt: new Date().toISOString().split("T")[0],
      helpful: 0,
    };
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="border border-border rounded-xl p-4 bg-card">
        <div className="flex items-start gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">{averageRating || reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : "0.0"}</div>
            <div className="flex items-center gap-0.5 justify-center my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.round(averageRating || 0) ? "fill-star text-star" : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{reviews.length} reviews</p>
          </div>
          
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-3">{stars}</span>
                <Star className="w-3.5 h-3.5 fill-star text-star" />
                <Progress
                  value={reviews.length > 0 ? (ratingDistribution[index] / reviews.length) * 100 : 0}
                  className="h-2 flex-1"
                />
                <span className="text-xs text-muted-foreground w-6">{ratingDistribution[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      <ReviewForm courseId={courseId} onSubmit={handleNewReview} />

      {/* Reviews List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Student Reviews</h3>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
              <SelectItem value="helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          {sortedReviews.length > 0 ? (
            sortedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No reviews yet. Be the first to review this course!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
