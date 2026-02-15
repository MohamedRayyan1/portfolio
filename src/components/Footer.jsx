import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {personalInfo.name.split(' ')[0]}
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Backend Developer passionate about building scalable and efficient server-side applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 text-gray-400 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 text-gray-400 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all text-sm font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;