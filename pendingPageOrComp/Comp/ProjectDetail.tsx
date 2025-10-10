import React from 'react';
import { ArrowLeft, ExternalLink, User, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';

interface ProjectDetailPageProps {
  projectId: string;
}

const ProjectDetailPage = ({ projectId }: ProjectDetailPageProps) => {
  // Find the project by id from the 'all' array
  const project = projects.all.find((p: Project) => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
          <Link href="/projects" className="text-blue-400 hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const hasLiveLink = project.liveLink && project.liveLink.trim() !== '';

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Info Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-${hasLiveLink ? '3' : '2'} gap-6 mb-8`}>
          {/* Purpose Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Purpose</h3>
            </div>
            <p className="text-gray-300">{project.purpose}</p>
          </div>

          {/* Role Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Role</h3>
            </div>
            <p className="text-gray-300">{project.role}</p>
          </div>

          {/* Live Link Card - Only show if link exists */}
          {hasLiveLink && (
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Live Project</h3>
              </div>
              <Link 
                href={project.liveLink!} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </Link>
            </div>
          )}
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Overview */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </div>

          {/* Challenges */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Challenges</h3>
            <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Solutions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Solutions</h3>
            <p className="text-gray-300 leading-relaxed">{project.solutions}</p>
          </div>

          {/* Results */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
            <p className="text-gray-300 leading-relaxed">{project.results}</p>
          </div>
        </div>

        {/* Features and Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
            <div className="space-y-2">
              {project.features?.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              )) || <p className="text-gray-400">No features listed</p>}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools?.map((tool: string, index: number) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full px-3 py-1 text-sm"
                >
                  {tool}
                </span>
              )) || <p className="text-gray-400">No tools listed</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;