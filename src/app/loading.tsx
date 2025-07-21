// src/app/loading.tsx
export default function Loading() {
    return (
      <main className="p-8 grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border rounded-xl p-4 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-full" />
          </div>
        ))}
      </main>
    );
  }