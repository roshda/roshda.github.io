import { getBlogPosts } from './utils'; // Import server-side function
import BlogClient from './BlogClient';   // Import client component for UI

export default async function BlogPage() {
  const blogPosts = getBlogPosts(); // Fetch blog posts on the server side

  return (
    <section>
      {/* Pass blog posts to the client component */}
      <BlogClient blogPosts={blogPosts} />
    </section>
  );
}
