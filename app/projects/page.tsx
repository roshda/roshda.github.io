import { getProjects } from './getProjects';
import ProjectsClient from './ProjectsClient'; // Client Component for the UI part

export default async function ProjectsPage() {
  const projects = getProjects(); // Fetch projects on the server side

  return (
    <section>
      {/* Pass project data to the client component */}
      <ProjectsClient projects={projects} />
    </section>
  );
}
