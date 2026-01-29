import React from 'react';
import { 
  Brain, 
  MessageCircle, 
  Map as MapIcon, 
  TrendingUp, 
  BookOpen, 
  Award, 
  FileText, 
  GraduationCap,
  MonitorPlay,
  PenTool,
  LucideProps
} from 'lucide-react';
import { Testimonial, Step, PricingPlan, LibraryCategory, InsightArticle, FAQItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aarav Gupta",
    classGrade: "Class 6",
    school: "Delhi Public School",
    tried: "AIM Test & Coding Basics",
    achieved: "Discovered a passion for Logical Reasoning",
    color: "bg-blue-50",
    avatar: "https://picsum.photos/id/1005/150/150"
  },
  {
    name: "Diya Menon",
    classGrade: "Class 7",
    school: "Ryan International",
    tried: "Creative Writing Quizzes",
    achieved: "Published her first short story in school magazine",
    color: "bg-pink-50",
    avatar: "https://picsum.photos/id/1011/150/150"
  },
  {
    name: "Krish Patel",
    classGrade: "Class 6",
    school: "St. Xavier's",
    tried: "Science Experiments",
    achieved: "Won Junior Science Fair regional round",
    color: "bg-green-50",
    avatar: "https://picsum.photos/id/1025/150/150"
  }
];

export const JOURNEY_STEPS: Step[] = [
  { id: 1, title: "Assess", desc: "Discover your hidden talents.", icon: Brain, color: "text-purple-600 bg-purple-100" },
  { id: 2, title: "Interact", desc: "Talk to real experts.", icon: MessageCircle, color: "text-blue-600 bg-blue-100" },
  { id: 3, title: "Map", desc: "Plan your unique path.", icon: MapIcon, color: "text-amber-600 bg-amber-100" },
  { id: 4, title: "Track", desc: "Watch yourself grow.", icon: TrendingUp, color: "text-green-600 bg-green-100" }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹499",
    features: ["Basic AIM Test", "Access to Career Library", "Monthly Newsletter"],
    color: "border-gray-200",
    buttonColor: "bg-gray-800"
  },
  {
    name: "Growth",
    price: "₹999",
    features: ["Advanced AIM Report", "2 Masterclasses/mo", "Skill Building Tasks"],
    color: "border-blue-200",
    buttonColor: "bg-blue-600"
  },
  {
    name: "Achiever",
    price: "₹1,999",
    features: ["Everything in Growth", "1:1 Expert Session", "Personalized Roadmap"],
    isPopular: true,
    color: "border-purple-300 ring-2 ring-purple-400 ring-offset-2",
    buttonColor: "bg-purple-600"
  },
  {
    name: "Mentored",
    price: "₹3,499",
    features: ["Dedicated Mentor", "Weekly Progress Calls", "Unlimited Workshops"],
    color: "border-amber-200",
    buttonColor: "bg-amber-600"
  }
];

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    id: 'careers',
    label: 'Careers',
    icon: BriefcaseIcon,
    description: "Explore over 500+ modern career paths from Space Science to Ethical Hacking.",
    items: ["Data Scientist", "Marine Biologist", "Game Designer", "Architect"]
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: PenTool,
    description: "Develop 21st-century skills that go beyond textbooks.",
    items: ["Critical Thinking", "Public Speaking", "Python Coding", "Financial Literacy"]
  },
  {
    id: 'courses',
    label: 'Courses',
    icon: MonitorPlay,
    description: "Curated micro-courses designed for young minds.",
    items: ["Robotics 101", "Creative Writing", "Vedic Maths", "App Development"]
  },
  {
    id: 'exams',
    label: 'Exams',
    icon: FileText,
    description: "Prepare for competitive exams tailored for your grade.",
    items: ["Olympiads", "NSTSE", "Scholarship Tests", "School Entrances"]
  },
  {
    id: 'scholarships',
    label: 'Scholarships',
    icon: Award,
    description: "Find financial aid and recognition opportunities early on.",
    items: ["Young Achiever Grant", "STEM Scholarship", "Arts Fellowship"]
  },
  {
    id: 'certs',
    label: 'Certifications',
    icon: GraduationCap,
    description: "Earn badges and certificates to build your junior portfolio.",
    items: ["Junior Coder", "Young Orator", "Science Whiz"]
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    title: "Why Class 6 Is the Perfect Time…",
    readTime: "4 min read",
    image: "https://picsum.photos/id/20/400/300",
    category: "Parenting"
  },
  {
    title: "How to Choose Subjects…",
    readTime: "5 min read",
    image: "https://picsum.photos/id/26/400/300",
    category: "Academics"
  },
  {
    title: "The Power of Skills Over Marks",
    readTime: "3 min read",
    image: "https://picsum.photos/id/36/400/300",
    category: "Development"
  },
  {
    title: "How Aimshala Turns Confusion…",
    readTime: "6 min read",
    image: "https://picsum.photos/id/60/400/300",
    category: "Success Stories"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is Aimshala suitable for Class 6?",
    answer: "Absolutely! Class 6 is the foundational year where curiosity peaks. Our content is specifically designed to be playful yet educational for 11-12 year olds."
  },
  {
    question: "How long is the AIM Test?",
    answer: "The AIM Test is a fun, gamified assessment that takes about 20-30 minutes. It's designed to be low-stress and engaging."
  },
  {
    question: "Do students get personal guidance?",
    answer: "Yes, especially in our Achiever and Mentored plans. We believe in human connection to guide young minds through their discovery phase."
  },
  {
    question: "Can parents be involved?",
    answer: "We encourage it! Parents get a separate dashboard to view reports, track progress, and receive tips on how to support their child's interests."
  },
  {
    question: "How do we start?",
    answer: "Simply click 'Take AIM Test' to begin your free assessment. It's the first step to unlocking your personalized dashboard."
  }
];

// Helper component for icon
function BriefcaseIcon(props: any) {
  return <LucideIconWrapper icon={BookOpen} {...props} />; // Fallback/Placeholder
}

// Wrapper to allow swapping lucide icons easily in data structures if needed
const LucideIconWrapper = ({ icon: Icon, ...props }: { icon: React.FC<LucideProps> } & LucideProps) => <Icon {...props} />;