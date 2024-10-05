import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'app/projects/posts');

export function parseFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([^]*?)\s*---/;
  const match = content.match(frontmatterRegex);
  
  if (match && match[1]) {
    const frontmatter = match[1];
    const metadata = frontmatter.split('\n').reduce((acc, line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
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

export function getProjects() {
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
