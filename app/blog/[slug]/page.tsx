// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils"; // Make sure to have the correct imports
import { baseUrl } from "app/sitemap";
import Link from "next/link"; // Import Link for navigation

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  // Fetch all posts and sort them by date (newest first)
  let sortedPosts = getBlogPosts().sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Find the current post based on the slug
  let postIndex = sortedPosts.findIndex((post) => post.slug === params.slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = sortedPosts[postIndex];

  // Corrected navigation: previousSlug moves back in time, nextSlug moves forward in time
  const previousSlug = postIndex > 0 ? sortedPosts[postIndex - 1].slug : null; // Older post
  const nextSlug = postIndex < sortedPosts.length - 1 ? sortedPosts[postIndex + 1].slug : null; // Newer post

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>

      {/* Navigation buttons for previous and next posts */}
      <footer className="flex justify-end mt-8 space-x-4">
        {previousSlug && (
          <Link href={`/blog/${previousSlug}`} className="hover:underline flex items-center text-3xl">
            &lt; {/* Right-facing chevron for going back in time (older post) */}
          </Link>
        )}
        {nextSlug && (
          <Link href={`/blog/${nextSlug}`} className="hover:underline flex items-center text-3xl">
            &gt; {/* Left-facing chevron for going forward in time (newer post) */}
          </Link>
        )}
      </footer>
    </section>
  );
}