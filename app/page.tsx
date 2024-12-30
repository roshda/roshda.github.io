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
        {`Hi, I'm Roshni! I study mathematics at UCLA. I love to `}
        <Link href="/projects" className="text-neutral-300 dark:text-neutral-300 underline">
          {`build projects`}  
        </Link>  
        {` and learn new technologies.`}   
      </p>
      <p className="mb-4">
        {`At UCLA, I play Capture the Flag challenges with Psi Beta Rho, the competitive cybersecurity team. I also enjoy `}
        <a href="/origami" className="text-neutral-300 dark:text-neutral-300 underline">{`origami`}</a>, hiking,
        {` `}
        linux, playing flute,
        {` and `}
        <a href="blog/book-reviews" className="text-neutral-300 dark:text-neutral-300 underline">{`reading`}</a>. {`Check out my `} <a href="/resume" className="text-neutral-300 dark:text-neutral-300 underline">{`resume`}</a> {` for my experience, and my `} <a href="/blog" className="text-neutral-300 dark:text-neutral-300 underline">{`blog`}</a> or <a href="https://www.linkedin.com/in/roshnidave/" className="text-neutral-300 dark:text-neutral-300 underline">{`LinkedIn`}</a> to see what I'm up to now. 
      </p>     
    </section>
  );
}
