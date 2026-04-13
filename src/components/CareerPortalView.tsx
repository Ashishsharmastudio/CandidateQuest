import React from 'react';
import { 
  FileText, 
  ShieldCheck,
  Search,
  Zap,
  ArrowRight,
  Download,
  UploadCloud,
  CheckCircle2,
  Clock,
  TrendingUp,
  Mail,
  School,
  Badge,
  Plus,
  User,
  Briefcase,
  Award,
  Fingerprint,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const CareerPortalView: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('tracker');

  const tabs = [
    { id: 'tracker', label: 'Application Tracker', icon: FileText },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'verification', label: 'Identity & Verification', icon: Fingerprint },
    { id: 'matching', label: 'Job Matching', icon: Search },
    { id: 'vault', label: 'Document Vault', icon: ShieldCheck },
    { id: 'assessment', label: 'AI Assessment', icon: Zap },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-4 md:p-8 lg:p-12 space-y-8 md:space-y-12"
    >
      {/* Welcome Header */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-navy-900">Welcome Back, Alex.</h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl font-medium">
            You have <span className="font-bold text-navy-900">3 active interviews</span> this week. Your profile is performing 15% better than last month.
          </p>
        </div>
        <div className="bg-navy-900 p-6 rounded-2xl text-white flex justify-between items-center shadow-2xl shadow-navy-900/20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Credibility Score</p>
            <h3 className="text-3xl font-headline font-black">942</h3>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-teal-500 flex items-center justify-center text-[10px] font-bold">
            TOP 1%
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-surface-high pb-px scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id 
                ? 'border-navy-900 text-navy-900 bg-surface-low' 
                : 'border-transparent text-slate-400 hover:text-navy-900'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'tracker' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Active Applications */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-headline font-bold text-navy-900">Active Applications</h3>
            <div className="space-y-4">
              {[
                { company: 'Stripe', role: 'Staff Product Engineer', status: 'Interviewing', date: 'Applied 12 days ago', color: 'bg-indigo-500' },
                { company: 'Linear', role: 'Senior UX Architect', status: 'Reviewing', date: 'Applied 5 days ago', color: 'bg-slate-900' },
                { company: 'Vercel', role: 'Lead Frontend Engineer', status: 'Assessment', date: 'Applied 2 days ago', color: 'bg-black' },
              ].map((app, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-surface-high shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {app.company[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">{app.role}</h4>
                      <p className="text-xs text-slate-500">{app.company} • {app.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.status === 'Interviewing' ? 'bg-teal-50 text-teal-600' : 'bg-surface-low text-slate-500'
                    }`}>
                      {app.status}
                    </span>
                    <button className="p-2 hover:bg-surface-low rounded-lg transition-colors">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Vault Preview */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-headline font-bold text-navy-900">Vault Summary</h3>
            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm space-y-6">
              {[
                { name: 'Resume_2024_Final.pdf', size: '1.2 MB', icon: FileText },
                { name: 'Identity_Passport.jpg', size: '2.4 MB', icon: ShieldCheck },
                { name: 'Degree_Certification.pdf', size: '0.8 MB', icon: FileText },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <doc.icon className="w-5 h-5 text-slate-400 group-hover:text-navy-900 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-navy-900 truncate max-w-[150px]">{doc.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{doc.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-300 group-hover:text-navy-900 transition-colors" />
                </div>
              ))}
              <button onClick={() => setActiveTab('vault')} className="w-full py-3 bg-surface-low text-navy-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-surface-high transition-all">
                Manage All Documents
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline font-bold text-navy-900">Professional Experience</h3>
                <button className="p-2 bg-surface-low rounded-lg text-navy-900 hover:bg-surface-high transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {[
                  { role: 'Senior Product Designer', company: 'Stripe', period: '2021 - Present', desc: 'Leading design systems and checkout experience for global merchants.' },
                  { role: 'UX Designer', company: 'Airbnb', period: '2018 - 2021', desc: 'Redesigned the host onboarding flow, increasing conversion by 14%.' },
                ].map((exp, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-teal-500 z-10"></div>
                      {i === 0 && <div className="w-0.5 h-full bg-surface-high absolute top-4"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-navy-900">{exp.role}</h4>
                      <p className="text-sm text-slate-500 font-medium">{exp.company} • {exp.period}</p>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm space-y-8">
              <h3 className="text-xl font-headline font-bold text-navy-900">Education & Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'M.S. Human-Computer Interaction', school: 'Stanford University', year: '2018', icon: School },
                  { title: 'Google UX Design Professional', school: 'Coursera', year: '2020', icon: Award },
                ].map((edu, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-surface-low rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-navy-900 shadow-sm">
                      <edu.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-900">{edu.title}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{edu.school} • {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy-900 p-8 rounded-2xl text-white space-y-6">
              <h3 className="text-lg font-headline font-bold">Skills Synthesis</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'React', 'TypeScript', 'Figma', 'System Design', 'User Research', 'A/B Testing'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full py-3 bg-teal-500 text-navy-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-teal-400 transition-all">
                Update Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-10 rounded-3xl border border-surface-high shadow-sm text-center space-y-6">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 mx-auto">
              <Fingerprint className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold text-navy-900">Identity Verification</h3>
              <p className="text-slate-500 max-w-md mx-auto">Verify your identity to unlock "Fast-Track" status and increase your credibility score by 200 points.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                { label: 'Government ID', status: 'Verified', icon: Badge, color: 'text-teal-500' },
                { label: 'Employment', status: 'Pending', icon: Briefcase, color: 'text-amber-500' },
                { label: 'Education', status: 'Not Started', icon: School, color: 'text-slate-300' },
              ].map((v, i) => (
                <div key={i} className="p-6 bg-surface-low rounded-2xl border border-surface-high flex flex-col justify-between h-40">
                  <v.icon className={`w-8 h-8 ${v.color}`} />
                  <div>
                    <p className="text-sm font-bold text-navy-900">{v.label}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${v.color}`}>{v.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-navy-900 text-white rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:scale-[0.98] transition-all shadow-xl shadow-navy-900/20">
              Start Verification Process
            </button>
          </div>
        </div>
      )}

      {activeTab === 'assessment' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-navy-900">Behavioral & Predictive Assessment</h3>
                  <p className="text-sm text-slate-500">AI-driven evaluation of your professional reliability and communication style.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  { label: 'Reliability', score: 94, desc: 'Consistent delivery and time management.' },
                  { label: 'Work Ethic', score: 88, desc: 'High initiative and ownership in tasks.' },
                  { label: 'Communication', score: 92, desc: 'Clear, concise, and professional style.' },
                  { label: 'Stability', score: 85, desc: 'Long-term commitment and growth mindset.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-surface-low rounded-2xl space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-navy-900">{item.label}</span>
                      <span className="text-lg font-black text-teal-500">{item.score}%</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${item.score}%` }}></div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy-900 p-8 rounded-2xl text-white space-y-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-teal-400" />
                <h4 className="text-sm font-bold uppercase tracking-widest">Assessment Status</h4>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">Your behavioral profile is currently active. Employers use these insights to match you with high-alignment roles.</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Last Updated</p>
                <p className="text-sm font-bold">April 12, 2024</p>
              </div>
              <button className="w-full py-3 bg-white text-navy-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-surface-low transition-all">
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'matching' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Recommended for You</h3>
              <p className="text-slate-500 text-sm mt-1">Based on your skills, experience, and behavioral profile.</p>
            </div>
            <button className="text-sm font-bold text-navy-900 flex items-center gap-2 hover:underline">
              View All Matches <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { company: 'Notion', role: 'Senior Product Engineer', match: 98, location: 'Remote', salary: '$180k - $220k' },
              { company: 'Figma', role: 'Staff UX Architect', match: 95, location: 'San Francisco', salary: '$200k - $250k' },
              { company: 'Linear', role: 'Lead Frontend Developer', match: 92, location: 'Remote', salary: '$170k - $210k' },
            ].map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm hover:shadow-xl hover:shadow-navy-900/5 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-low rounded-xl flex items-center justify-center font-bold text-navy-900">
                    {job.company[0]}
                  </div>
                  <span className="px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-black rounded-full">
                    {job.match}% MATCH
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy-900 text-lg group-hover:text-teal-600 transition-colors">{job.role}</h4>
                  <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-surface-low flex justify-between items-center">
                  <span className="text-xs font-bold text-navy-900">{job.salary}</span>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-navy-900 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    View Job <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'vault' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Document Vault</h3>
              <p className="text-slate-500 text-sm mt-1">Securely store and manage your professional credentials.</p>
            </div>
            <button className="bg-navy-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[0.98] transition-all">
              <UploadCloud className="w-4 h-4" />
              Upload Document
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Resume_2024_Final.pdf', type: 'Resume', size: '1.2 MB', date: '2 days ago', icon: FileText },
              { name: 'Identity_Passport.jpg', type: 'ID Document', size: '2.4 MB', date: '1 month ago', icon: Badge },
              { name: 'Degree_Stanford.pdf', type: 'Education', size: '0.8 MB', date: '1 year ago', icon: School },
              { name: 'Reference_Letter.pdf', type: 'Reference', size: '0.5 MB', date: '2 weeks ago', icon: Mail },
            ].map((doc, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-surface-high shadow-sm hover:border-navy-900/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-surface-low rounded-lg flex items-center justify-center text-navy-900">
                    <doc.icon className="w-5 h-5" />
                  </div>
                  <button className="p-2 text-slate-300 hover:text-navy-900 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-navy-900 truncate">{doc.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{doc.type} • {doc.size}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-low">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Added {doc.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
