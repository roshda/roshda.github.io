

'use client'; 
import { useEffect, useState } from "react";

export default function Page() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'top -u rd';
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

  useEffect(() => {
    document.title = "Resume | Roshni Davé"; 
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

      <div className="mb-8">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-neutral-800 dark:bg-neutral-800 text-sm px-4 py-2 rounded font-medium shadow text-center hover:bg-neutral-700 dark:hover:bg-neutral-700"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>

      <hr className="my-6 border-neutral-800 dark:border-neutral-800"></hr>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter flex items-center">
        Roshni Davé
      </h1>

      <div className="mb-6">
        <p>
          Email: <a href="mailto:roshnidave@ucla.edu" className="text-blue-400 dark:text-blue-400">roshnidave@ucla.edu</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/roshnidave" target="_blank" className="text-blue-400 dark:text-blue-400" rel="noopener noreferrer">linkedin.com/in/roshnidave</a>
        </p>
      </div>

      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Education</h2>
      <hr className="my-2 border-neutral-800 dark:border-neutral-800" />
      <h3 className="text-lg">University of California, Los Angeles</h3>
      <p className="text-neutral-400 dark:text-neutral-400 text-base font-semibold">
        B.S., Mathematics of Computation
      </p>
      <p className="italic text-sm text-neutral-400 dark:text-neutral-400 mb-4">
        September 2024 - May 2026
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Coursework:</strong> Computer Networking, Linear Algebra, Object-Oriented Programming, Real Analysis,
        Mathematical Statistics, Discrete Structures, Software Construction, Mathematical Cryptology</li>
        <li><strong>Awards:</strong> OrigamiUSA International Scholarship, Pedersen Music Scholarship, F&C Lahm Transfer Scholarship</li>
      </ul>

      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Activities</h2>
      <hr className="my-2 border-neutral-800 dark:border-neutral-800" />
      <ul className="list-disc list-inside mb-6">
        <li><strong>LA Capture-the-Flag 2025:</strong> Leading marketing and outreach for UCLA’s student-run cybersecurity competition with 1,700+ participants. Designing social media, print, merchandise, and sponsorship materials.</li>
        <li><strong>Psi Beta Rho:</strong> Solving capture-the-flag cybersecurity competitions with UCLA’s team (top 10 in the United States).</li>
        <li><strong>Bruin Chamber Musicians:</strong> Performing flute at on-campus events with a rotating group of musicians. Compiling and arranging appropriate music libraries.</li>
        <li><strong>Bruin Origami:</strong> Teaching and folding origami for UCLA students and the LA community.</li>
      </ul>

      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Experience</h2>
      <hr className="my-2 border-neutral-800 dark:border-neutral-800" />

      {/* Access Ingenuity */}
      <p className="font-semibold text-lg inline-block">Software Engineer Intern,</p>
      <span className="text-lg inline-block ml-2">Access Ingenuity</span>
      <p className="italic text-sm text-neutral-400 dark:text-neutral-400 mb-4">November 2023 — July 2024, San Francisco, CA</p>
      <ul className="list-disc list-inside mb-6">
        <li>Developed project management software that reduced company workload by 80 hours per week. Automated remote file transfers to process and assign over 1,000 HIPAA-secured client files daily using OneDrive API.</li>
        <li>Architected and deployed scalable automation on AWS Fargate, implementing scheduling, access control, and logging mechanisms.</li>
      </ul>

      {/* NASA Ames Research Center */}
      <p className="font-semibold text-lg inline-block">Aviation Systems Intern,</p>
      <span className="text-lg inline-block ml-2">NASA Ames Research Center</span>
      <p className="italic text-sm text-neutral-400 dark:text-neutral-400 mb-4">May 2022 — March 2023, Mountain View, CA</p>
      <ul className="list-disc list-inside mb-6">
        <li>Built data dashboards to assess sustainability of selected experimental NASA Ames aircraft models and biofuels.</li>
        <li>Processed and interpreted over 250 datasets to generate over 20 visualizations on fuel efficiency and aircraft performance. Presented research to Ames leadership.</li>
        <li>Overhauled Airspace Concepts Evaluation System (ACES) software website.</li>
      </ul>

      {/* North Bay Indo-American Association */}
      <p className="font-semibold text-lg inline-block">Web Developer & Administrator,</p>
      <span className="text-lg inline-block ml-2">North Bay Indo-American Association</span>
      <p className="italic text-sm text-neutral-400 dark:text-neutral-400 mb-4">January 2023, San Francisco, CA</p>
      <ul className="list-disc list-inside mb-6">
        <li>Solely managed website redesign for a local nonprofit. Achieved a 90% reduction in monthly cost by migrating CMS to WordPress and Google Workspace for nonprofits.</li>
        <li>Optimized backend with database cleanup and server-side caching to reduce page load times by 30%.</li>
      </ul>

      {/* Mathematics Tutor */}
      <p className="font-semibold text-lg inline-block">Mathematics Tutor</p>
      <p className="italic text-sm text-neutral-400 dark:text-neutral-400 mb-4">December 2022 - Present</p>
      <ul className="list-disc list-inside mb-6">
        <li>Calculus and Statistics tutor for 20 high school and college students.</li>
      </ul>


      </section>
  );
}
