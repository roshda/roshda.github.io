"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'whoami';
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
        clearInterval(typeInterval); 
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section>
      <div className="mb-8">
        <p className="text-xl font-mono text-neutral-400 dark:text-neutral-400">
          <span>{'rd@ubuntu:~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span> 
        </p>
      </div>

      {/* Content */}
      <p className="mb-4">
        {`Hi, I'm Roshni! I study mathematics (specializing in computer science) at UCLA. I'm always learning something new and `}
        <Link href="/projects" className="text-neutral-300 dark:text-neutral-300 underline">
          {`building projects.`} 
        </Link>     
      </p>
      <p className="mb-4">
        {`I also enjoy `}
        <a href="/origami" className="text-neutral-300 dark:text-neutral-300 underline">{`origami`}</a>, hiking,
        {` `}
        linux, playing flute,
        {` and `}
        <a href="blog/bookshelf" className="text-neutral-300 dark:text-neutral-300 underline">{`reading`}</a>.
      </p>     
    </section>
  );
}
