import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Calendar } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work in backend development, showcasing complex systems and innovative solutions
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-semibold rounded-full">
                      Project {index + 1}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="md:col-span-3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 text-gray-400 transition-all"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-md text-xs font-medium border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand/Collapse Features */}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    <span>{expandedProject === project.id ? 'Hide' : 'Show'} Features</span>
                    <ChevronRight
                      size={16}
                      className={`transform transition-transform ${expandedProject === project.id ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {/* Features List */}
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;