import { Post } from '@/types';
import { getCourses } from '@/lib/fetch'; // 

export default async function Home() {
  const data = await getCourses();

  return (
    <main className="p-8 grid gap-6 md:grid-cols-3">
      {data.posts.nodes.map((post: Post) => (
        <article key={post.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </article>
      ))}
    </main>
  );
}
// added this to dev branch for development
