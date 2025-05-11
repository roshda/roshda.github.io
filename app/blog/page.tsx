import { getBlogPosts } from './utils';
import BlogClient from './BlogClient';   

export default async function BlogPage() {
  const blogPosts = getBlogPosts(); // Fetch blog posts on the server side

  return (
    <section>
      <BlogClient blogPosts={blogPosts} />
    </section>
  );
}
