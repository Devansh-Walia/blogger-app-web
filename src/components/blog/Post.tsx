import React from "react";

const Post: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-6">
            <article className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  "post.title"
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>Lorem</span>
                  <span className="mx-2">•</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores mollitia asperiores dolor laboriosam labore,
                  repellendus voluptatum voluptas, repellat perspiciatis, ea
                  quasi cupiditate delectus obcaecati blanditiis vel eius eos!
                  Expedita, iusto.
                </p>
                <div className="mt-4">
                  <button className="text-indigo-600 hover:text-indigo-800">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
