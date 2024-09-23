import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';

const projectsDirectory = path.join(process.cwd(), 'app/projects/posts');

// Function to parse the frontmatter from the MDX content
function parseFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([^]*?)\s*---/;
  const match = content.match(frontmatterRegex);
  
  if (match && match[1]) {
    const frontmatter = match[1];
    const metadata = frontmatter.split('\n').reduce((acc, line) => {
      const [key, value] = line.split(':').map(str => str.trim());
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
    
    // Remove the frontmatter from the content
    const contentWithoutFrontmatter = content.replace(frontmatterRegex, '').trim();
    
    return {
      metadata,
      content: contentWithoutFrontmatter,
    };
  }
  
  return { metadata: {}, content };
}

// Function to get all projects
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

// Generate static paths for each project
export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO purposes
export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    return {};
  }

  const { title, languages, summary, url } = project.metadata;

  const languagesArray = Array.isArray(languages) ? languages : languages.split(',').map(lang => lang.trim());

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: languagesArray.join(', '), // Join languages with commas
      url: `${process.env.BASE_URL}/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
    },
  };
}

// Main component to display the project page
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const languagesArray = Array.isArray(project.metadata.languages)
    ? project.metadata.languages
    : project.metadata.languages.split(',').map(lang => lang.trim());

  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">{project.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {languagesArray.join(', ')} {/* Join languages with commas */}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
      <p className="mt-4">
        <a href={project.metadata.url} target="_blank" className="text-blue-600 dark:text-blue-400">
          Visit Project
        </a>
      </p>
    </section>
  );
}
