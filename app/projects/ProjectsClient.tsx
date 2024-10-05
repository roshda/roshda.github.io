'use client'; 
import { useEffect, useState } from 'react';

export default function ProjectsClient({ projects }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'git log --graph --all';
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

  useEffect(() => {
    document.title = 'Projects | Roshni Davé'; 
  }, []);

  return (
    <div>
      <div className="mb-8">
        <p className="text-xl font-mono text-neutral-400 dark:text-neutral-400">
          <span>{'rd@ubuntu:~$ '}</span>
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span> 
        </p>
      </div>

      <div className="mt-8">
        {projects.map((project) => (
          <div key={project.slug} className="mb-8">
            <a
              href={project.metadata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-400 dark:text-blue-400"
            >
              {project.metadata.title}
            </a>
            <p className="text-neutral-400 dark:text-neutral-400">
              {project.metadata.summary}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              {project.metadata.languages
                ? project.metadata.languages.split(',').map((lang) => lang.trim()).join(', ')
                : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
