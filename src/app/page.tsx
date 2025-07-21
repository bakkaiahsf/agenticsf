import { Post } from '@/lib/api';
import { getCourses } from '@/lib/api';

export default async function Home() {
  const data = await getCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AgenticSF Learning Platform
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Master Salesforce with AI-Powered Learning
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Courses
        </h2>
        
        <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.nodes.map((post: Post) => (
            <article 
              key={post.id} 
              className="card card-hover bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h2>
                <div className="ml-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Course
                  </span>
                </div>
              </div>
              
              <div
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="btn btn-primary w-full">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
