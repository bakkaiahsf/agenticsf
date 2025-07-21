// This file provides the data functions your page.tsx needs
import { Course, Certification } from './types';

// Mock data that matches your existing Post structure
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug?: string;
}

// API Response structure to match your existing code
export interface APIResponse {
  posts: {
    nodes: Post[];
  };
}

// Mock courses data as posts (matching your existing structure)
const mockPostsData: Post[] = [
  {
    id: '1',
    title: 'Introduction to Salesforce Administration',
    excerpt: 'Learn the fundamentals of Salesforce administration including user management, security, and basic configuration.',
  },
  {
    id: '2', 
    title: 'Salesforce Developer Fundamentals',
    excerpt: 'Master the basics of Salesforce development with Apex, Visualforce, and Lightning components.',
  },
  {
    id: '3',
    title: 'Advanced Salesforce Architecture',
    excerpt: 'Deep dive into enterprise Salesforce architecture patterns and best practices for scalable solutions.',
  },
  {
    id: '4',
    title: 'Salesforce Integration Patterns',
    excerpt: 'Learn various integration approaches including REST APIs, SOAP, and middleware solutions.',
  },
  {
    id: '5',
    title: 'AI and Machine Learning in Salesforce',
    excerpt: 'Explore Einstein AI capabilities and how to implement machine learning in your Salesforce org.',
  },
  {
    id: '6',
    title: 'Salesforce Security and Compliance',
    excerpt: 'Understand security best practices, compliance requirements, and data protection in Salesforce.',
  },
];

// Function that matches your existing getCourses import
export async function getCourses(): Promise<APIResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    posts: {
      nodes: mockPostsData
    }
  };
}

// Additional functions for future use
export async function getCourse(slug: string): Promise<Post | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockPostsData.find(post => post.id === slug) || null;
}

export async function getCertifications(): Promise<APIResponse> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const certificationPosts: Post[] = [
    {
      id: 'cert-1',
      title: 'Salesforce Administrator Certification',
      excerpt: 'Prepare for the Salesforce Administrator certification with comprehensive study materials and practice exams.',
    },
    {
      id: 'cert-2',
      title: 'Platform Developer I Certification', 
      excerpt: 'Master Salesforce development concepts required for the Platform Developer I certification.',
    },
    {
      id: 'cert-3',
      title: 'Sales Cloud Consultant Certification',
      excerpt: 'Learn Sales Cloud implementation strategies for the Sales Cloud Consultant certification.',
    },
  ];

  return {
    posts: {
      nodes: certificationPosts
    }
  };
}