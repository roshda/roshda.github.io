export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter flex items-center">
        {'>'} top -u rd
        <a
          href="resume.pdf"
          target="_blank"
          className="ml-4 bg-gray-200 dark:bg-neutral-800 text-sm px-3 py-1 rounded"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </h1>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter flex items-center">
        Roshni Davé
      </h1>


      {/* Contact Links */}
      <div className="mb-6">
        <p>
          Email: <a href="mailto:roshnidave@ucla.edu" className="text-blue-600 dark:text-blue-400">roshnidave@ucla.edu</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/roshnidave" target="_blank" className="text-blue-600 dark:text-blue-400" rel="noopener noreferrer">linkedin.com/in/roshnidave</a>
        </p>
      </div>

      {/* Education Section */}
      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Education</h2>
      <hr className="my-2 border-neutral-100 dark:border-neutral-800" />
      <h3 className="text-lg">University of California, Los Angeles</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base font-semibold">
        B.S., Mathematics of Computation
      </p>
      <p className="italic text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Graduating 2026
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Coursework:</strong> Data Structures, Differential Calculus, Algorithms, Machine Learning, Computer Security, Real Analysis, Statistics, Cybersecurity
        </li>
        <li>
          <strong>Awards:</strong> OrigamiUSA International Scholarship, Pedersen Musisc Scholarship, SonomaHacks Hackathon
        </li>
        <li>
          <strong>Organizations:</strong> ACM Cyber CTF Team, UCLA Orchestra, Bruin Origami
        </li>
      </ul>

      {/* Skills Section */}
      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Skills</h2>
      <hr className="my-2 border-neutral-100 dark:border-neutral-800" />
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Languages:</strong> Python, Bash, C++, SQL, JavaScript, TypeScript, HTML, CSS, Java
        </li>
        <li>
          <strong>Technologies:</strong> Git, React, Next.js, Docker, AWS, Azure, SSH, Linux
        </li>
      </ul>

            {/* Experience Section */}
            <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Experience</h2>
      <hr className="my-2 border-neutral-100 dark:border-neutral-800" />
      
      {/* Experience 1 */}
      <p className="font-semibold text-lg inline-block">
        Automation Software Engineer Intern,
      </p>
      <span className="text-lg inline-block ml-2">Access Ingenuity</span>
      <p className="italic text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Nov 2023 — July 2024, SF Bay Area CA
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Automated project management at a local business. Azure Functions, Graph API. Reduced weekly workload by 80 hours.</li>
      </ul>

      {/* Experience 2 */}
      <p className="font-semibold text-lg inline-block">
        Data Science Intern,
      </p>
      <span className="text-lg inline-block ml-2">NASA Ames Research Center</span>
      <p className="italic text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        May 2022 — May 2023, Mountain View CA
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Aviation sustainability team. Modeling fuel efficiency, contrail formation, and aircraft performance.</li>
        <li>Jupyter Notebook and various Python libraries.</li>
      </ul>

      {/* Experience 3 */}
      <p className="font-semibold text-lg inline-block">
        Web Developer,
      </p>
      <span className="text-lg inline-block ml-2">North Bay Indo-American Association</span>
      <p className="italic text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        March 2023, SF Bay Area CA
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Launched website for a local nonprofit using WordPress, DreamHost, and Google Workspace.</li>
      </ul>

      {/* Experience 4 */}
      <p className="font-semibold text-lg inline-block">
        Mathematics Tutor
      </p>
      <span className="text-lg inline-block ml-2"></span>
      <p className="italic text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        March 2023 - Present
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Tutored math to ~20 high school and college students.</li>
      </ul>

      {/* Projects Section */}
      <h2 className="font-medium text-xl mb-4 mt-8 tracking-tighter">Projects</h2>
      <hr className="my-2 border-neutral-100 dark:border-neutral-800" />

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/goodnight" target="_blank" className="text-blue-600 dark:text-blue-400">
            GoodNight
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Nightly journaling and reflection tool, enhanced with AI, to supercharge self-improvement and avoid the nightly doomscroll.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Python, Google Gemini API, Google Apps Script
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/lymphoma-tracker" target="_blank" className="text-blue-600 dark:text-blue-400">
            Lymphoma Tracker
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
        Tool to track and identify lesions for my weekly lymphoma treatments. Database to log weekly progress and visualize
        trends over time. Supervised ML model to detect lesions.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Machine Learning, Computer Vision, Data Analysis, Python, OpenCV
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/nasa-dashboards" target="_blank" className="text-blue-600 dark:text-blue-400">
            NASA Dashboards
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Jupyter notebook dashboards created during research internship at NASA Ames.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Python, Jupyter Notebook, Machine Learning, Data Analysis, Pandas, Scikit-Learn
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/linux-security-dashboard" target="_blank" className="text-blue-600 dark:text-blue-400">
            Linux Security Dashboard
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          CLI dashboard providing real-time insights into system and network health of a Linux system.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Python, Cybersecurity, Linux
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/origami-portfolio" target="_blank" className="text-blue-600 dark:text-blue-400">
            Origami Portfolio
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Collection of geometric origami folded since 2019.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Paper, Math
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/secure-pwnd" target="_blank" className="text-blue-600 dark:text-blue-400">
            Secure pwnd
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Check if a password has been compromised by submitting part of the password’s hash to Have I Been Pwnd?, avoiding sending the site a plaintext password.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Bash Script, Cybersecurity, Linux
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/phishing-text-classifier" target="_blank" className="text-blue-600 dark:text-blue-400">
            Is it a phishing text?
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          ML classifier to distinguish phishing texts from real texts.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Python, Machine Learning
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/galaxy-o-meter" target="_blank" className="text-blue-600 dark:text-blue-400">
            Galaxy-O-Meter
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Sentiment analysis of tweets referencing recent Star Wars shows.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Java, Maven, Microsoft Azure Cognitive Services: Text Analysis API, JSON
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/wardrobe-tracker" target="_blank" className="text-blue-600 dark:text-blue-400">
            Wardrobe Tracker
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Ongoing data project tracking everything I wore to gain insights on cost, usability, etc.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Streamlit, Data Visualization, iOS Shortcuts, Python, Google Cloud
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          <a href="https://your-project-link.com/xkcd-password-generator" target="_blank" className="text-blue-600 dark:text-blue-400">
            XKCD Password Generator
          </a>
        </h3>
        <p className="italic text-sm text-neutral-500 dark:text-neutral-300">
          Generate a secure password using the method specified in an XKCD comic.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          <strong></strong> Python
        </p>
      </div>

      </section>
  );
}