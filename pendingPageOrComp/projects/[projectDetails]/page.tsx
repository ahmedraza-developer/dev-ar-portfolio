import ProjectDetailPage from '../../Comp/ProjectDetail';

export default async function ProjectDetail({ params }: { params: { projectDetails: string } }) {
  const { projectDetails } = params;
  return <ProjectDetailPage projectId={projectDetails} />;
}