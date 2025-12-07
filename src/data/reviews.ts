import { Review } from "@/types/course";

export const courseReviews: Review[] = [
  {
    id: "r1",
    courseId: "8",
    userId: "u1",
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Absolutely fantastic course! Dr. Angela Yu explains complex concepts in such an easy-to-understand way. The hands-on projects really helped solidify my understanding of SwiftUI.",
    createdAt: "2024-01-15",
    helpful: 24,
  },
  {
    id: "r2",
    courseId: "8",
    userId: "u2",
    userName: "Michael Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Great content and well-structured lessons. Would love to see more advanced animation tutorials. The instructor is knowledgeable and responsive to questions.",
    createdAt: "2024-01-10",
    helpful: 18,
  },
  {
    id: "r3",
    courseId: "8",
    userId: "u3",
    userName: "Emily Davis",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "This course helped me land my first iOS developer job! The curriculum is comprehensive and covers everything you need to know to build production-ready apps.",
    createdAt: "2024-01-05",
    helpful: 31,
  },
  {
    id: "r4",
    courseId: "1",
    userId: "u4",
    userName: "David Wilson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Best JavaScript course I've ever taken. The advanced topics are explained clearly and the code examples are practical and relevant.",
    createdAt: "2024-01-12",
    helpful: 15,
  },
  {
    id: "r5",
    courseId: "2",
    userId: "u5",
    userName: "Lisa Thompson",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Very thorough introduction to UX design. I especially enjoyed the case studies and practical exercises. Highly recommended for beginners!",
    createdAt: "2024-01-08",
    helpful: 22,
  },
];

export const getReviewsByCourseId = (courseId: string): Review[] => {
  return courseReviews.filter((review) => review.courseId === courseId);
};

export const getAverageRating = (courseId: string): number => {
  const reviews = getReviewsByCourseId(courseId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
};
