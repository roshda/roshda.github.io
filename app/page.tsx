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
          <span>{'~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span>
        </p>
      </div>

      <p className="mb-4">
        {`Hi, I'm Roshni! I study mathematics & computer science at UCLA. I'm interested in cybersecurity and software development.`}
      </p>
      <p className="mb-4">
        {`As an officer at `}
        <a
          href="https://www.acmcyber.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 dark:text-neutral-300 underline"
        >
          ACM Cyber
        </a>
        {`, I’m helping cybersecurity education grow at UCLA. I also compete in CTFs with `}
        <a
          href="https://ctftime.org/team/186494"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 dark:text-neutral-300 underline"
        >
          Psi Beta Rho
        </a>
        {`. Check out my `}
        <a
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 dark:text-neutral-300 underline"
        >
          blog posts
        </a>
        {` to read my challenge writeups! `}
      </p>

    </section>
  );
}
