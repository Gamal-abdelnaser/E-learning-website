import { Course, Section, Testimonial } from "@/types/course";

export const featuredCourses: Course[] = [
  {
    id: "1",
    title: "Advanced JavaScript",
    instructor: "John Doe",
    rating: 4.8,
    reviewCount: 2500,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    category: "Development",
    progress: 0,
  },
  {
    id: "2",
    title: "UX Design Fundamentals",
    instructor: "Jane Smith",
    rating: 4.9,
    reviewCount: 1800,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    category: "Design",
    progress: 0,
  },
  {
    id: "3",
    title: "Data Science with Python",
    instructor: "Alex Johnson",
    rating: 4.7,
    reviewCount: 3200,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    category: "Development",
    progress: 0,
  },
  {
    id: "4",
    title: "Digital Marketing Masterclass",
    instructor: "Emily White",
    rating: 4.9,
    reviewCount: 2100,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "Marketing",
    progress: 0,
  },
];

export const allCourses: Course[] = [
  ...featuredCourses,
  {
    id: "5",
    title: "Advanced UI/UX Design",
    instructor: "Jane Doe",
    rating: 4.8,
    reviewCount: 1500,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
    category: "Design",
    progress: 65,
  },
  {
    id: "6",
    title: "Intro to Python",
    instructor: "John Smith",
    rating: 4.5,
    reviewCount: 2800,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
    category: "Development",
    progress: 45,
  },
  {
    id: "7",
    title: "Project Management Essentials",
    instructor: "Mike Brown",
    rating: 4.7,
    reviewCount: 1200,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    category: "Business",
    progress: 30,
  },
  {
    id: "8",
    title: "Advanced SwiftUI Development",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviewCount: 2500,
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=250&fit=crop",
    category: "Development",
    progress: 65,
    description: "Master SwiftUI and build beautiful iOS applications",
  },
];

export const courseSections: Section[] = [
  {
    id: "section-1",
    title: "Section 1: Introduction",
    lessons: [
      { id: "1-1", title: "Welcome to the Course", duration: "12m 30s", completed: true, locked: false },
      { id: "1-2", title: "Setting Up Your Environment", duration: "25m 00s", completed: false, locked: false, current: true },
      { id: "1-3", title: "Swift Basics Refresher", duration: "45m 15s", completed: false, locked: true },
    ],
  },
  {
    id: "section-2",
    title: "Section 2: Core Concepts",
    lessons: [
      { id: "2-1", title: "Understanding State", duration: "30m 00s", completed: false, locked: true },
      { id: "2-2", title: "Binding and Observable", duration: "35m 00s", completed: false, locked: true },
    ],
  },
  {
    id: "section-3",
    title: "Section 3: Advanced Views",
    lessons: [
      { id: "3-1", title: "Custom View Modifiers", duration: "28m 00s", completed: false, locked: true },
      { id: "3-2", title: "Animation Fundamentals", duration: "40m 00s", completed: false, locked: true },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "This platform transformed my career. The courses are practical, up-to-date, and the instructors are top-notch.",
    author: "Sarah L.",
    role: "Software Engineer, Tech Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "2",
    quote: "The flexibility to learn at my own pace while getting industry-relevant skills helped me land my dream job.",
    author: "Michael R.",
    role: "Product Designer, StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

export const continueLearnig: Course[] = [
  {
    id: "c1",
    title: "Introduction to UX",
    instructor: "Design Principles",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Design",
    progress: 45,
  },
  {
    id: "c2",
    title: "Python for Data Science",
    instructor: "Data Analysis with Pandas",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    category: "Development",
    progress: 78,
  },
];
