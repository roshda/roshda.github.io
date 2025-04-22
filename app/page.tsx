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
          <span>{'roshni@m3:~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span>
        </p>
      </div>

      {/* Content */}
      <p className="mb-4">
        {`Hi, I'm Roshni! I study mathematics & computer science at UCLA. I'm interested in cryptography, data science, and software development.`}
      </p>
      <p className="mb-4">
        {`As an officer at `}
        <a href="https://www.acmcyber.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
          ACM Cyber
        </a>
        {`, I’m helping cybersecurity education grow at UCLA. I also compete in CTFs with our cybersecurity team, `}
        <a href="http://github.com/pbrucla" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
          Psi Beta Rho
        </a>
        {`.`}
      </p>

      <p className="mb-4">
      {`Check out my `}
      <Link href="/blog" className="text-neutral-300 dark:text-neutral-300 underline">
        blog
      </Link>
      {` for writeups on CTF challenges I've solved, and  `}
      <a href="https://www.linkedin.com/in/roshnidave/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
        LinkedIn
      </a>
      {`  for updates and to reach me.`}
    </p>

    </section>
  );
}
