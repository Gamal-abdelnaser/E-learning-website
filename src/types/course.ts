export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount?: number;
  image: string;
  category: string;
  progress?: number;
  description?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  current?: boolean;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface UserStats {
  inProgress: number;
  completed: number;
  hoursLearned: number;
}

export interface Activity {
  id: string;
  type: 'completed' | 'certificate' | 'started';
  title: string;
  timestamp: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}
