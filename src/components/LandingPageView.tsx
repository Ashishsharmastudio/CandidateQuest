import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Globe,
  Lock,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { View, Role } from '../types';

interface LandingPageProps {
  onEnterApp: (view: View, role: Role) => void;
}

export const LandingPageView: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-400 selection:text-navy-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16 h-20 md:h-24 border-b border-surface-high sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-6 lg:gap-12">
          <div className="flex flex-col">
            <span className="font-headline font-black text-lg md:text-xl text-navy-900 tracking-tighter uppercase leading-none">CandidateQuest</span>
            <span className="text-[7px] md:text-[8px] tracking-[0.3em] text-slate-400 font-bold uppercase mt-1">Intelligence Suite</span>
          </div>
          <div className="hidden md:flex gap-4 lg:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#features" className="hover:text-navy-900 transition-colors">Features</a>
            <a href="#intelligence" className="hover:text-navy-900 transition-colors">Intelligence</a>
            <a href="#security" className="hover:text-navy-900 transition-colors">Security</a>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onEnterApp('dashboard', 'admin')}
            className="hidden sm:block text-navy-900 px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-surface-low transition-all"
          >
            Admin
          </button>
          <button 
            onClick={() => onEnterApp('dashboard', 'client')}
            className="bg-navy-900 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:scale-[0.98] transition-all shadow-xl shadow-navy-900/10"
          >
            Launch Console
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-24 lg:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                <Sparkles className="w-3 h-3" />
                AI-Driven Executive Search
              </span>
              <h1 className="font-headline text-4xl sm:text-6xl lg:text-8xl font-extrabold text-navy-900 tracking-tighter leading-[0.85]">
                The Future of <br />
                <span className="text-teal-500">Talent Synthesis.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed"
            >
              CandidateQuest leverages predictive risk assessment and deep talent synthesis to identify elite executive leadership for institutional growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => onEnterApp('dashboard', 'client')}
                className="bg-navy-900 text-white px-10 py-5 rounded-2xl font-headline font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-2xl shadow-navy-900/20 hover:scale-[0.98] transition-all"
              >
                Employer Portal
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onEnterApp('portal', 'candidate')}
                className="bg-white text-navy-900 px-10 py-5 rounded-2xl font-headline font-bold text-sm tracking-[0.2em] uppercase border border-surface-high hover:bg-surface-low transition-all"
              >
                Candidate Portal
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square bg-surface-low rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/architecture/800/800" 
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 left-8 glass-card p-6 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Match Score</p>
                    <p className="text-2xl font-headline font-black text-navy-900">98.4%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 glass-card p-6 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Risk Level</p>
                    <p className="text-2xl font-headline font-black text-navy-900">Negligible</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-surface-low py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-teal-500 uppercase">Core Capabilities</span>
            <h2 className="text-5xl font-headline font-extrabold text-navy-900 tracking-tight">Institutional-Grade Intelligence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Predictive Risk Scoring', 
                desc: 'Assess attrition, compliance, and fraud risks before they impact your organization.',
                icon: ShieldCheck
              },
              { 
                title: 'Talent Synthesis', 
                desc: 'AI-driven mapping of skills to strategic roles with high-fidelity match precision.',
                icon: Zap
              },
              { 
                title: 'Identity Verification', 
                desc: 'Global passport and biometric matching integrated into every candidate profile.',
                icon: Lock
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-surface-low rounded-2xl flex items-center justify-center text-navy-900 mb-8 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-navy-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-headline font-extrabold text-navy-900 tracking-tight leading-none">
              Trusted by Global <br /><span className="text-teal-500">Market Leaders.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              CandidateQuest powers the executive recruitment pipelines for Fortune 500 companies and high-growth technology firms worldwide.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-headline font-black text-navy-900">412+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-black text-navy-900">84k</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Managed Identities</p>
              </div>
            </div>
          </div>
          <div className="bg-navy-900 rounded-3xl p-12 text-white space-y-8 relative overflow-hidden">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <CheckCircle2 key={i} className="w-5 h-5 text-teal-400" />
              ))}
            </div>
            <p className="text-2xl font-headline font-medium leading-relaxed italic relative z-10">
              "CandidateQuest has fundamentally transformed how we identify and verify executive leadership. The risk assessment alone is worth the investment."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">MT</div>
              <div>
                <p className="font-bold">Marcus Thorne</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Chief Talent Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-high py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex flex-col">
              <span className="font-headline font-black text-2xl text-navy-900 tracking-tighter uppercase leading-none">CandidateQuest</span>
              <span className="text-[10px] tracking-[0.3em] text-slate-400 font-bold uppercase mt-1">Intelligence Suite</span>
            </div>
            <p className="text-slate-500 max-w-sm font-medium">
              The premium platform for AI-driven talent synthesis and predictive risk assessment in executive recruitment.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-navy-900 transition-colors">Intelligence Suite</a></li>
              <li><a href="#" className="hover:text-navy-900 transition-colors">Admin Console</a></li>
              <li><a href="#" className="hover:text-navy-900 transition-colors">Career Portal</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-navy-900 transition-colors">Privacy Framework</a></li>
              <li><a href="#" className="hover:text-navy-900 transition-colors">Compliance Log</a></li>
              <li><a href="#" className="hover:text-navy-900 transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-surface-high flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          <p>© 2024 CandidateQuest AI Intelligence. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-navy-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-navy-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
