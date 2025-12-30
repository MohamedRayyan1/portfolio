import React from 'react';
import { ArrowDown, Code2, Database, Server } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20">
                Backend Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Explore My Work
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/10 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Tech Icons */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Code2 size={24} className="text-cyan-400" />
                <span className="text-sm">Laravel</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Database size={24} className="text-emerald-400" />
                <span className="text-sm">MySQL</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Server size={24} className="text-purple-400" />
                <span className="text-sm">APIs</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-bounce">
                <Code2 size={32} className="text-cyan-400" />
              </div>
              <div className="absolute bottom-10 -left-10 w-20 h-20 bg-emerald-500/20 rounded-lg backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Database size={32} className="text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;