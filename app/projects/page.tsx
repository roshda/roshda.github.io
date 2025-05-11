import { getProjects } from './getProjects';
import ProjectsClient from './ProjectsClient'; 

export default async function ProjectsPage() {
  const projects = getProjects(); 
  return (
    <section>
      <ProjectsClient projects={projects} />
    </section>
  );
}
