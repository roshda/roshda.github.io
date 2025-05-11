import { getProjects } from './helpers';
import ProjectsClient from './ProjectsClient';

export const revalidate = 0; 

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectsClient projects={projects} />;
}
