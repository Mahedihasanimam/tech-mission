import React from 'react';

// Data for blog posts. This makes it easy to add, remove, or edit posts.
const blogPosts = [
  {
    postImage: './blog.png',
    title: 'The most Popular Business Of the Year',
    authorImage: './blog.png',
    authorName: 'Ranold Jeff.',
    date: 'May 4th, 2022',
  },
  {
    postImage: 'https://placehold.co/600x400/072D5B/FFFFFF?text=Growth',
    title: 'Top 5 Marketing Strategies for Startups',
    authorImage: './blog.png',
    authorName: 'Patricia Anderson',
    date: 'Apr 27th, 2022',
  },
  {
     postImage: './blog.png',
    title: 'How AI is Revolutionizing the Tech Industry',
    authorImage: './blog.png',
    authorName: 'Elaine Luna',
    date: 'Apr 20th, 2022',
  },
];

// Reusable component for a single blog post card
const BlogPostCard = ({ post }: { post: typeof blogPosts[number] }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={post.postImage} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-raleway font-bold text-xl text-indigo-600 h-20">
        {post.title}
      </h3>
      <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
        <img src={post.authorImage} alt={post.authorName} className="w-10 h-10 rounded-full" />
        <div className="ml-4 flex-grow">
          <p className="font-raleway font-semibold text-gray-800 text-sm">{post.authorName}</p>
        </div>
        <p className="font-raleway font-semibold text-gray-500 text-xs text-right opacity-70">
          {post.date}
        </p>
      </div>
    </div>
  </div>
);

function Blog() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-4xl text-[#072D5B]">
            Our Blog
          </h2>
          <p className="font-lato font-semibold text-2xl text-gray-700 mt-2">
            Latest Post
          </p>
        </div>

        {/* Responsive Grid for Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
