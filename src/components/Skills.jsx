import React from 'react';
import { Server, Database, Wrench, Code } from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  const renderSkillBar = (skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern backend technologies with strong foundation in API development and database management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend Skills */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Server className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend</h3>
            </div>
            {skills.backend.map(renderSkillBar)}
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <Wrench className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Tools</h3>
            </div>
            {skills.tools.map(renderSkillBar)}
          </div>

          {/* Other Skills */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Code className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Other</h3>
            </div>
            {skills.other.map(renderSkillBar)}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'JWT', 'Git', 'GitHub', 'Postman', 'MVC', 'Clean Code', 'HTTP', 'Agile', 'SQL', 'Java', 'HTML', 'CSS'].map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;