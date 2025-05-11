'use client'; 

import { useEffect, useState } from 'react';

export default function BlogClient({ blogPosts }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'ls *.mdx';
  const typingSpeed = 150; 

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setTypedText(currentText);
        index++;
      } else {
        clearInterval(typeInterval); // stop typing when done
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  // sort blog posts by date in descending order (newest first)
  const sortedPosts = blogPosts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <div>
      <div className="mb-8">
        <p className="text-xl font-mono text-neutral-400 dark:text-neutral-400">
          <span>{'~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span> 
        </p>
      </div>

      <div className="mt-8">
        {sortedPosts.map((post) => (
          <div key={post.slug} className="mb-2">
            <div className="flex justify-start items-center"> 
              <p className="text-neutral-400 text-base w-24"> 
                {post.metadata.publishedAt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="text-neutral-100 dark:text-neutral-100 text-base font-normal hover:text-neutral-400"
              >
                {post.metadata.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
