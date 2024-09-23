import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'app/projects/posts');

function parseFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([^]*?)\s*---/;
  const match = content.match(frontmatterRegex);
  
  if (match && match[1]) {
    const frontmatter = match[1];
    const metadata = frontmatter.split('\n').reduce((acc, line) => {
      // Split only on the first colon to avoid splitting URLs or other values with colons
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim(); // Rest of the line is the value
        if (key && value) {
          acc[key] = value;
        }
      }
      return acc;
    }, {} as Record<string, string>);
    
    const contentWithoutFrontmatter = content.replace(frontmatterRegex, '').trim();
    
    return {
      metadata,
      content: contentWithoutFrontmatter,
    };
  }
  
  return { metadata: {}, content };
}


function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { metadata, content } = parseFrontmatter(fileContents);

    return {
      slug,
      metadata,
      content,
    };
  });

  return projects;
}

export const metadata = {
  title: 'Projects',
  description: 'A collection of my projects.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">{'> '} git log --graph --all</h1>
      <h2 className="mt-2 text-md text-gray-700 dark:text-gray-300">building stuff I actually use</h2>
      <div className="mt-8">
        {projects.map((project) => {
          console.log("Project URL:", project.metadata.url);
          
          return (
            <div key={project.slug} className="mb-8">
              <a 
                href={project.metadata.url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                {project.metadata.title}
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.metadata.summary}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {project.metadata.languages ? project.metadata.languages.split(',').map(lang => lang.trim()).join(', ') : ''}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}