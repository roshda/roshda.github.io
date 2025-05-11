"use client";

import { useState, useEffect } from "react";

export default function SearchClient({ blogPosts }) {
  const [query, setQuery] = useState("");
  const [typedText, setTypedText] = useState("");
  const fullText = "fzf";
  const typingSpeed = 150;

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setTypedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const filtered = blogPosts.filter((post) => {
    const title = post.metadata.title || "";
    const content = post.content || "";
    const lowerQuery = query.toLowerCase();
    return (
      title.toLowerCase().includes(lowerQuery) ||
      content.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <section className="font-mono text-neutral-400 dark:text-neutral-400">
      <div className="mb-4">
        <p className="text-xl">
          <span className="text-xl font-mono text-neutral-400 dark:text-neutral-400">{'~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span>
        </p>
      </div>

      <div className="mb-6 text-xl">
        <span className="text-green-500">{">"}</span>{" "}
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none border-none focus:ring-0 focus:outline-none text-white w-full max-w-md placeholder-neutral-500"
        placeholder="Type to search..."
        />


      </div>

      {query && (
        <div className="mt-4">
          {filtered.length > 0 ? (
            <ul>
              {filtered.map((post) => (
                <li key={post.slug} className="mb-2">
                  <span className="text-green-500">{">"}</span>{" "}
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-neutral-100 hover:underline"
                  >
                    {post.metadata.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <span className="text-green-500">{">"}</span> No results found
            </p>
          )}
        </div>
      )}
    </section>
  );
}
