// ADD THESE TYPES TO YOUR EXISTING lib/types.ts FILE
// (Keep your existing code and add these below)

// Content Types for Learning Platform
export interface Course {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: {
    url: string
    alt: string
  }
  courseDetails: {
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
    duration: number // in minutes
    certificationBadge?: {
      url: string
      alt: string
    }
    price?: number
    enrollmentCount?: number
    rating?: number
    instructor?: string
  }
  categories: string[]
  tags: string[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
}

export interface Certification {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: {
    url: string
    alt: string
  }
  certificationDetails: {
    examCode: string
    passScore: number
    validityMonths: number
    prerequisites?: string[]
    topics?: string[]
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  }
  categories: string[]
  relatedCourses?: string[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
}

export interface AIArchitectureSection {
  id: string
  title: string
  content: string
  diagrams: Array<{
    title: string
    image: {
      url: string
      alt: string
    }
    description: string
  }>
  order: number
}

// UI Component Types
export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

export interface HeroSection {
  title: string
  subtitle: string
  description: string
  ctaButtons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary'
  }>
  backgroundImage?: string
}

// API Response Types
export interface APIResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  message: string
  subject?: string
}

export interface NewsletterSubscription {
  email: string
  preferences?: string[]
}
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug?: string;
}