import React from "react";

const Posts: React.FC = () => {
  // TODO: Implement actual posts fetching logic
  const dummyPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "React is a powerful library for building user interfaces...",
      author: "John Doe",
      date: "2024-02-07",
    },
    {
      id: 2,
      title: "Understanding TypeScript",
      content: "TypeScript adds static typing to JavaScript...",
      author: "Jane Smith",
      date: "2024-02-06",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Latest Posts
          </h1>
          <div className="space-y-6">
            {dummyPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700">{post.content}</p>
                  <div className="mt-4">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
