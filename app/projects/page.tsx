// app/projects/page.tsx
import { getProjects } from './helpers';
import ProjectsClient from './ProjectsClient';

export const dynamic = 'force-static'; 

export default function ProjectsPage() {
  const projects = getProjects(); 

  return <ProjectsClient projects={projects} />;
}