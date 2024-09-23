// app/blog/page.tsx

import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{'>'} find . -type l -ls</h1>
      <BlogPosts /> {/* Show all posts */}
    </section>
  );
}
