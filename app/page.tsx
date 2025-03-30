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
        {`At `}
        <a href="https://www.acmcyber.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
          ACM Cyber
        </a>
        {`, UCLA’s cybersecurity club`}
        {`, I help with  `}
        <a href="https://github.com/pbrucla/wiki" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
          Cyber Academy
        </a>
         {`, a weekly workshop series on security. I also compete in CTFs with our competitive cybersecurity team, `}
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
        {` to read writeups, or my `}
        <a href="https://www.linkedin.com/in/roshnidave/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 dark:text-neutral-300 underline">
          LinkedIn
        </a>
        {` to see what I'm up to now.`}
      </p>     
    </section>
  );
}
