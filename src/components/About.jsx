import React from 'react';
import { Code, Database, Server, GitBranch, Award, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, education, languages, softSkills } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Code className="text-cyan-400" size={28} />
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-300 leading-relaxed">
              Eager to apply technical skills in real-world projects and contribute to innovative solutions. Experienced in building scalable backend systems with focus on clean code, security, and performance optimization.
            </p>
          </div>

          {/* Education */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-emerald-400" size={28} />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  {education.degree}
                </h4>
                <p className="text-gray-300 font-medium mb-1">
                  {education.institution}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {education.location}
                  </span>
                  <span>{education.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Languages */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-purple-400" size={24} />
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-cyan-400 text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Server className="text-emerald-400" size={24} />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600/50 hover:border-cyan-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-xl p-6 border border-cyan-500/20 text-center">
            <Code size={40} className="text-cyan-400 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
            <p className="text-gray-400 text-sm">Major Projects</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/20 text-center">
            <Database size={40} className="text-emerald-400 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-white mb-1">Laravel</h4>
            <p className="text-gray-400 text-sm">Main Framework</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-6 border border-purple-500/20 text-center">
            <Server size={40} className="text-purple-400 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-white mb-1">REST</h4>
            <p className="text-gray-400 text-sm">API Architecture</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 rounded-xl p-6 border border-pink-500/20 text-center">
            <GitBranch size={40} className="text-pink-400 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-white mb-1">Git</h4>
            <p className="text-gray-400 text-sm">Version Control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;