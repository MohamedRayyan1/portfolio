import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Terminal, Database, Code2, 
  ChevronRight, Lock, Unlock, FileJson, 
  FileCode, Info, X, ExternalLink, Image as ImageIcon,
  Files, Search, GitBranch, Settings
} from 'lucide-react';

// ==========================================
// شاشة التحميل: بروتوكول فك التشفير
// ==========================================
const DecryptionPreloader = ({ onComplete }) => {
  const targetString = "> SOFTWARE ENGINEER ";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]/?";
  
  const [displayText, setDisplayText] = useState("");
  const [lockedCount, setLockedCount] = useState(0);
  const [flash, setFlash] = useState(false);
  const [logs, setLogs] = useState([]);

  const systemLogs = [
    "Booting Laravel 11 Kernel...",
    "Connecting to MySQL Database [OK]",
    "Validating Row Level Security (RLS)...",
    "Initializing Redis Cache...",
    "Mounting RESTful API Endpoints...",
    "System Architecture: READY"
  ];

  useEffect(() => {
    const lockInterval = setInterval(() => {
      setLockedCount(prev => {
        if (prev >= targetString.length) {
          clearInterval(lockInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(lockInterval);
  }, [targetString.length]);

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      let currentString = "";
      for (let i = 0; i < targetString.length; i++) {
        if (i < lockedCount) {
          currentString += targetString[i];
        } else {
          if (targetString[i] === " ") {
            currentString += " ";
          } else {
            currentString += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      setDisplayText(currentString);
    }, 30);

    if (lockedCount === targetString.length) {
      clearInterval(scrambleInterval);
      setFlash(true);
      setTimeout(onComplete, 1200);
    }
    return () => clearInterval(scrambleInterval);
  }, [lockedCount, targetString, onComplete]);

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < systemLogs.length) {
        setLogs(prev => [...prev, systemLogs[logIndex]]);
        logIndex++;
      }
    }, 350);
    return () => clearInterval(logInterval);
  }, []);

  const percentage = Math.floor((lockedCount / targetString.length) * 100);

  return (
    <motion.div
      key="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      <motion.div animate={{ opacity: flash ? 1 : 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 bg-white z-50 pointer-events-none" />
      <div className="absolute top-10 left-10 text-xs text-[#00E5FF]/40 space-y-2 pointer-events-none w-full">
        {logs.map((log, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            {`[${new Date().toISOString().substring(11, 23)}] INFO: ${log}`}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 text-[#00E5FF]">
          {percentage === 100 ? <Unlock size={48} className="animate-pulse drop-shadow-[0_0_15px_#00E5FF]" /> : <Lock size={48} className="opacity-50" />}
        </div>
        <div className="text-3xl md:text-5xl font-black text-white tracking-widest text-center min-h-[60px]">
          {displayText.split('').map((char, index) => (
            <span key={index} className={index < lockedCount ? "text-white" : "text-[#7000FF]"}>{char}</span>
          ))}
        </div>
        <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00E5FF] to-[#7000FF]" style={{ width: `${percentage}%` }} />
        </div>
        <div className={`mt-4 text-xs font-bold tracking-[0.4em] ${percentage === 100 ? 'text-white' : 'text-[#00E5FF]'}`}>
          {percentage === 100 ? "ACCESS GRANTED" : `DECRYPTING... ${percentage}%`}
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// نافذة تفاصيل المشروع (Project Details Modal)
// ==========================================
const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // إغلاق النافذة عند الضغط على زر الهروب (Escape)
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: 50, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }}
          onClick={(e) => e.stopPropagation()} // منع الإغلاق عند النقر داخل النافذة
          className="bg-[#1E1E1E] border border-[#333] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        >
          {/* شريط عنوان النافذة يشبه شريط الـ IDE */}
          <div className="bg-[#252526] px-4 py-3 border-b border-[#333] flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-slate-300 font-mono">
              <Code2 size={16} className="text-[#00E5FF]" /> {project.title}_Details.tsx
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-8">
            {/* قسم معرض الصور */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#333] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                    src={project.gallery[activeImage]} 
                    alt="Project Screen" 
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                {project.gallery.map((img, i) => (
                  <button 
                    key={i} onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-16 rounded border-2 transition-all overflow-hidden ${activeImage === i ? 'border-[#00E5FF]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* قسم تفاصيل المشروع */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-[#00E5FF] font-mono text-sm uppercase tracking-widest">{project.subtitle}</p>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.fullDesc}
              </p>

              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2 border-b border-[#333] pb-2">
                  <Terminal size={16} /> Key Features & Implementations
                </h4>
                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-[#7000FF] mt-1">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2 border-b border-[#333] pb-2">
                  <Database size={16} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-[#2D2D30] border border-[#3E3E42] rounded text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-[#00E5FF] text-[#1E1E1E] font-bold rounded hover:bg-white transition-colors text-sm">
                  <Github size={16} /> View Repository
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ==========================================
// التطبيق الرئيسي: واجهة الـ IDE
// ==========================================
const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeFile, setActiveFile] = useState('about.md');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // حالة التحكم بفتح وإغلاق الـ Terminal السفلي المبتكر
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // السيرة الذاتية (CV Data) 
  const cvData = {
    personal: {
      name: "Mohammed Noor Rayyan",
      role: "Software Engineer & Backend Developer",
      email: "rayyanwork881@gmail.com",
      phone: "0932589085",
      github: "MohamedRayyan1",
      linkedin: "m-n-rayyan",
      summary: "Dedicated to designing clean database architectures and writing maintainable code using the Laravel framework. Experienced in optimizing application speed, integrating complex third-party services, and developing technical solutions that prioritize security and scalability.",
    },
    projects: [
      {
        id: "dablak",
        title: "Dablak",
        subtitle: "Multi-App Delivery Platform",
        date: "Feb 2026 – May 2026",
        fullDesc: "An enterprise-grade delivery ecosystem connecting users, restaurants, and drivers. Built from the ground up to handle high concurrency and complex financial splits.",
        points: [
          "Architected and developed a scalable multi-app ecosystem (Laravel 11 Backend).",
          "Engineered a complex financial matrix to dynamically calculate delivery fees.",
          "Built robust driver shift scheduling using pessimistic locking to eliminate race conditions."
        ],
        tech: ["Laravel 11", "Flutter", "SOLID", "Pessimistic Locking"],
        githubLink: "#",
        gallery: [
          "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        ]
      },
      {
        id: "law-firm",
        title: "Law Company Management",
        subtitle: "Enterprise Legal Workflow",
        date: "Apr 2025 – Aug 2025",
        fullDesc: "A dedicated SaaS for law firms to track cases, manage client sessions, and automate legal research via AI.",
        points: [
          "Automated workflow for case and session tracking.",
          "Engineered a multi-tier Role/Permission system.",
          "Integrated an AI-powered Legal Assistant to streamline legal research.",
          "Implemented automated payroll and PDF reporting."
        ],
        tech: ["Laravel", "MySQL", "AI Integration", "PDF Reporting"],
        githubLink: "#",
        gallery: [
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
        ]
      },
      {
        id: "smart-notes",
        title: "Smart Notes",
        subtitle: "Scalable Full-Stack Application",
        date: "Dec 2025",
        fullDesc: "A modern note-taking application focused on speed, security, and real-time collaboration.",
        points: [
          "Ensured strict data isolation through Row Level Security (RLS).",
          "Enhanced data retrieval performance by 40% using PostgreSQL indexed queries.",
          "Implemented Database Triggers for automated role management."
        ],
        tech: ["Next.js", "Supabase", "PostgreSQL", "RLS"],
        githubLink: "#",
        gallery: [
          "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
        ]
      }
    ],
    skills: {
      "frameworks": ["Laravel (10/11)", "PHP", "Blade", "Java", "Next.js"],
      "database": ["MySQL", "PostgreSQL", "Redis", "Supabase (BaaS)"],
      "architecture": ["RESTful APIs", "Queues/Jobs", "Repository Pattern", "SOLID"]
    }
  };

  // تم حذف ملف الـ .env من القائمة
  const files = [
    { name: 'about.md', icon: <Info size={16} className="text-blue-400" /> },
    { name: 'skills.json', icon: <FileJson size={16} className="text-yellow-400" /> },
    { name: 'projects.tsx', icon: <FileCode size={16} className="text-cyan-400" /> }
  ];

  // دالة تصيير محتوى الملف بناءً على التبويب المفتوح
  const renderContent = () => {
    switch (activeFile) {
      case 'about.md':
        return (
          <div className="font-mono text-slate-300 leading-relaxed max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold text-white mb-6 border-b border-[#333] pb-4"> {cvData.personal.name}</h1>
            <p className="text-blue-400 italic">"{cvData.personal.role}"</p>
            <p>{cvData.personal.summary}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-[#333] pb-2"> Education</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Bachelor’s Degree in Software Engineering - Damascus University (2021 – 2025)</li>
            </ul>

            {/* تم دمج معلومات الـ env هنا بطريقة برمجية أنيقة */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-[#333] pb-2"> Environment_Variables</h2>
            <div className="bg-[#191919] border border-[#333] p-4 rounded text-sm space-y-2">
              <div><span className="text-[#9CDCFE]">APP_ENV</span><span className="text-slate-400">=</span><span className="text-[#CE9178]">"production"</span></div>
              <div><span className="text-[#9CDCFE]">MAIL_TO</span><span className="text-slate-400">=</span><span className="text-[#CE9178]">"{cvData.personal.email}"</span></div>
              <div><span className="text-[#9CDCFE]">GITHUB_URL</span><span className="text-slate-400">=</span><span className="text-[#CE9178]">"https://github.com/{cvData.personal.github}"</span></div>
              <div><span className="text-[#9CDCFE]">LINKEDIN</span><span className="text-slate-400">=</span><span className="text-[#CE9178]">"https://linkedin.com/in/{cvData.personal.linkedin}"</span></div>
              <div><span className="text-[#9CDCFE]">PHONE_NUMBER</span><span className="text-slate-400">=</span><span className="text-[#CE9178]">"{cvData.personal.phone}"</span></div>
            </div>
          </div>
        );
      
      case 'skills.json':
        return (
          <div className="font-mono text-sm leading-8">
            <span className="text-slate-400">{"{"}</span>
            <div className="pl-8">
              {Object.entries(cvData.skills).map(([key, values], idx, arr) => (
                <div key={key}>
                  <span className="text-[#9CDCFE]">"{key}"</span><span className="text-slate-400">: [</span>
                  <div className="pl-8">
                    {values.map((v, i) => (
                      <div key={i}>
                        <span className="text-[#CE9178]">"{v}"</span>
                        {i < values.length - 1 && <span className="text-slate-400">,</span>}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-400">]</span>{idx < arr.length - 1 && <span className="text-slate-400">,</span>}
                </div>
              ))}
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
        );

      case 'projects.tsx':
        return (
          <div className="space-y-8 max-w-4xl">
            <div className="text-slate-500 font-mono text-sm mb-6 border-l-4 border-emerald-500 pl-4 bg-emerald-500/10 py-2">
              // Component Preview: ProjectCards<br/>
              // Click "View Details" to open the interactive Modal.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cvData.projects.map((proj) => (
                <div key={proj.id} className="bg-[#252526] border border-[#333] rounded-lg p-6 hover:border-[#00E5FF]/50 transition-colors flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                    <p className="text-xs font-mono text-[#00E5FF] mt-1">{proj.subtitle}</p>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">
                    {proj.fullDesc}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(proj)}
                    className="w-full py-2 bg-[#333333] hover:bg-[#00E5FF] hover:text-black text-slate-300 font-mono text-sm rounded transition-all flex justify-center items-center gap-2"
                  >
                    <ImageIcon size={14} /> View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <DecryptionPreloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {!loading && (
        <div className="h-screen w-screen bg-[#1E1E1E] text-slate-300 flex overflow-hidden font-sans">
          
          {/* شريط الأدوات الأيسر (Activity Bar) */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-[#252526] z-20">
            <button className="text-white relative group">
              <Files size={24} strokeWidth={1.5} />
              <div className="absolute left-10 bg-black text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">Explorer</div>
            </button>
            <button className="text-slate-500 hover:text-white transition-colors relative group">
              <Search size={24} strokeWidth={1.5} />
            </button>
            <button className="text-slate-500 hover:text-white transition-colors relative group">
              <GitBranch size={24} strokeWidth={1.5} />
            </button>
            <div className="mt-auto">
              <button className="text-slate-500 hover:text-white transition-colors relative group">
                <Settings size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* مستكشف الملفات (Sidebar Explorer) */}
          <div className="w-64 bg-[#252526] border-r border-[#1E1E1E] flex flex-col z-10">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 py-3">
              Explorer
            </div>
            <div className="px-2">
              <div className="flex items-center gap-1 text-sm font-bold text-slate-300 px-2 py-1 cursor-pointer">
                <ChevronRight size={16} className="rotate-90" /> PORTFOLIO_MNR
              </div>
              <div className="pl-4 mt-1 space-y-1">
                {files.map(file => (
                  <button 
                    key={file.name}
                    onClick={() => setActiveFile(file.name)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded cursor-pointer transition-colors
                      ${activeFile === file.name ? 'bg-[#37373D] text-white' : 'text-slate-400 hover:bg-[#2A2D2E] hover:text-slate-300'}`}
                  >
                    {file.icon}
                    {file.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* المحرر الرئيسي (Main Editor Area) */}
          <div className="flex-1 flex flex-col bg-[#1E1E1E] overflow-hidden">
            {/* التبويبات (Tabs) */}
            <div className="flex bg-[#2D2D2D] overflow-x-auto custom-scrollbar">
              {files.map(file => (
                <button
                  key={file.name}
                  onClick={() => setActiveFile(file.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm min-w-[120px] border-r border-[#1E1E1E] transition-colors
                    ${activeFile === file.name ? 'bg-[#1E1E1E] text-white border-t-2 border-t-[#00E5FF]' : 'bg-[#2D2D2D] text-slate-400 hover:bg-[#2B2B2B]'}`}
                >
                  {file.icon} {file.name}
                </button>
              ))}
            </div>

            {/* مسار الملف (Breadcrumbs) + أيقونة الـ Terminal للتواصل */}
            <div className="px-4 py-1.5 text-xs text-slate-500 font-mono flex items-center justify-between border-b border-[#2D2D2D]">
              <div className="flex items-center gap-2">
                PORTFOLIO_MNR <ChevronRight size={12}/> src <ChevronRight size={12}/> {activeFile}
              </div>
              
              {/* الزر الجديد الذي يفتح الكونسول السفلي للتواصل */}
              <button 
                onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black rounded transition-all font-bold tracking-widest"
              >
                <Terminal size={12} /> CONTACT
              </button>
            </div>

            {/* محتوى الملف (File Content) */}
            <div className="flex-1 overflow-auto flex">
              <div className="w-12 pt-6 flex flex-col items-end pr-4 text-slate-600 font-mono text-sm opacity-50 select-none">
                {[...Array(30)].map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </div>
            </div>

            {/* Terminal السفلي المبتكر (The Masterpiece) */}
            <AnimatePresence>
              {isTerminalOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 280, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-[#333] bg-[#1E1E1E] flex flex-col z-20"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-1 border-b border-[#333] bg-[#252526]">
                    <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-slate-400">
                      <span className="hover:text-white cursor-pointer pb-1">Output</span>
                      <span className="text-white border-b border-white pb-1">Terminal</span>
                      <span className="hover:text-white cursor-pointer pb-1">Debug Console</span>
                    </div>
                    <button onClick={() => setIsTerminalOpen(false)} className="text-slate-400 hover:text-white"><X size={16}/></button>
                  </div>
                  
                  {/* Terminal Body */}
                  <div className="p-4 font-mono text-sm overflow-y-auto custom-scrollbar text-slate-300 space-y-3">
                    <div className="text-emerald-400">mohammed@backend-core:~/portfolio$ ./contact.sh</div>
                    
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      [+] Authenticating identity... <span className="text-emerald-400">SUCCESS</span>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                      [+] Establishing secure communication channels:
                    </motion.div>
                    
                    {/* روابط التواصل داخل التيرمينال */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="pl-4 space-y-2 mt-4">
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-400 w-24">{'>'} EMAIL</span>
                        <a href={`mailto:${cvData.personal.email}`} className="text-[#9CDCFE] hover:text-white hover:underline transition-colors flex items-center gap-2">
                          {cvData.personal.email} <ExternalLink size={12}/>
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-400 w-24">{'>'} GITHUB</span>
                        <a href={`https://github.com/${cvData.personal.github}`} target="_blank" rel="noreferrer" className="text-[#9CDCFE] hover:text-white hover:underline transition-colors flex items-center gap-2">
                          github.com/{cvData.personal.github} <ExternalLink size={12}/>
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-400 w-24">{'>'} LINKEDIN</span>
                        <a href={`https://linkedin.com/in/${cvData.personal.linkedin}`} target="_blank" rel="noreferrer" className="text-[#9CDCFE] hover:text-white hover:underline transition-colors flex items-center gap-2">
                          linkedin.com/in/{cvData.personal.linkedin} <ExternalLink size={12}/>
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-400 w-24">{'>'} PHONE</span>
                        <a href={`tel:${cvData.personal.phone}`} className="text-[#9CDCFE] hover:text-white hover:underline transition-colors flex items-center gap-2">
                          {cvData.personal.phone} <ExternalLink size={12}/>
                        </a>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pt-4 flex items-center gap-2">
                      <span className="text-emerald-400">mohammed@backend-core:~/portfolio$</span> <span className="w-2 h-4 bg-white animate-pulse"></span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* شريط الحالة السفلي (Status Bar) */}
            <div className="h-6 bg-[#007ACC] text-white text-xs flex items-center justify-between px-4 font-mono z-30">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><GitBranch size={12}/> master*</span>
                <span className="flex items-center gap-1"><X size={12} className="text-red-300"/> 0 <span className="text-yellow-300 mx-1 font-bold">⚠</span> 0</span>
              </div>
              <div className="flex items-center gap-4 opacity-80">
                <span>UTF-8</span>
                <span>Laravel Framework</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default App;