import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  name: string;
  classGrade: string;
  school: string;
  tried: string;
  achieved: string;
  color: string;
  avatar: string;
}

export interface Step {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: string;
  buttonColor: string;
}

export interface LibraryCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export interface InsightArticle {
  title: string;
  readTime: string;
  image: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}