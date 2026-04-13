import React from 'react';
import { 
  ArrowLeft, 
  Bell, 
  Mail, 
  Verified, 
  Sparkles, 
  Brain, 
  Network, 
  Mic, 
  CheckCircle2, 
  Shield, 
  Badge, 
  ScrollText, 
  School,
  Info,
  LineChart
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProfileView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 md:px-8 py-6 md:py-10 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
        <div className="lg:col-span-8">
          <div className="mb-4">
            <span className="bg-teal-400/20 text-teal-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Active Pursuit</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tighter mb-6 leading-[0.9]">
            The Architect of <br/><span className="text-teal-500">Scaleable Growth.</span>
          </h1>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white text-xs border-2 border-white font-bold">SC</div>
            <p className="text-sm text-slate-500 max-w-md font-medium">Currently driving architectural initiatives at ByteDance. 12+ years experience in distributed systems.</p>
          </div>
        </div>

        {/* Decision Engine Card */}
        <div className="lg:col-span-4">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden shadow-sm intelligence-rail">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-wider text-slate-400">Decision Engine</h3>
              <span className="bg-teal-400 text-navy-900 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                <Verified className="w-3 h-3 fill-navy-900" />
                Recommended: Hire
              </span>
            </div>
            <div className="bg-surface-low p-4 rounded-xl border-b-2 border-teal-500">
              <p className="text-sm text-navy-900 leading-relaxed italic font-medium">
                "Exceptional technical depth and perfect cultural alignment based on interview synthesis."
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Confidence Score: 98%</span>
              <LineChart className="w-5 h-5 text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Narrative Summary */}
      <section className="mb-12">
        <div className="bg-navy-900 text-white p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="flex gap-6 items-start relative z-10">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-white text-2xl tracking-tight">AI Executive Insight</h4>
              <p className="text-white/80 text-xl leading-relaxed font-medium max-w-4xl">
                Sarah Chen demonstrates a rare convergence of elite technical craftsmanship and strategic business acumen. Her tenure at scale-up environments has refined her ability to lead complex transitions without sacrificing velocity. Analysis of her recent technical assessments suggests a proficiency in distributed architecture that places her in the top 1% of the candidate pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Performance Breakdown */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-surface-high">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-headline font-extrabold text-2xl tracking-tight">Performance Breakdown</h3>
              <Info className="w-5 h-5 text-slate-200" />
            </div>
            
            <div className="space-y-10">
              {/* Strengths */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-500 mb-6 block">Core Strengths</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Strategic Thinking', icon: Brain },
                    { label: 'System Design', icon: Network },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-surface-low rounded-xl transition-all hover:bg-surface-high group cursor-default">
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                        <s.icon className="w-6 h-6" />
                      </div>
                      <span className="font-headline font-bold text-navy-900">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-6 block">Areas for Growth</label>
                <div className="flex items-center gap-4 p-5 bg-surface-low rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <span className="font-headline font-bold text-navy-900">Public Speaking</span>
                    <p className="text-xs text-slate-500 font-medium">Preferring deep work over high-visibility keynote settings.</p>
                  </div>
                </div>
              </div>

              {/* Red Flags */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-6 block">Critical Anomalies</label>
                <div className="flex items-center gap-4 p-5 border border-red-500/10 bg-red-500/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-headline font-bold text-navy-900">None detected</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-800 p-8 rounded-2xl text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Avg. Tenure</span>
              <div className="text-4xl font-headline font-black mt-2">4.2 Yrs</div>
            </div>
            <div className="bg-teal-500 p-8 rounded-2xl text-navy-900">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Cultural Match</span>
              <div className="text-4xl font-headline font-black mt-2">High</div>
            </div>
          </div>
        </div>

        {/* Credibility Report */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-low p-10 rounded-2xl border border-surface-high">
            <h3 className="font-headline font-extrabold text-xl tracking-tight mb-10">Credibility Report</h3>
            <ul className="space-y-8">
              {[
                { label: 'ID Verification', desc: 'Global passport & biometrics matched.', icon: Badge },
                { label: 'Employment History', desc: 'Confirmed roles at ByteDance, Stripe, and Uber.', icon: ScrollText },
                { label: 'Educational Credentials', desc: 'Masters in CS, Stanford University.', icon: School },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-teal-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className={`flex-grow ${i !== 2 ? 'pb-8 border-b border-surface-high' : ''}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-headline font-bold text-sm text-navy-900">{item.label}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-teal-500 flex items-center gap-1">
                        Verified <Verified className="w-3 h-3" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-white/40 p-5 rounded-2xl border border-dashed border-surface-high">
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-slate-400" />
                <span className="text-xs font-medium text-slate-500 leading-relaxed">Data encrypted and verified via CandidateQuest Ledger.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-navy-900 text-white py-5 rounded-2xl font-headline font-bold text-sm tracking-[0.2em] uppercase hover:scale-[0.98] active:scale-95 transition-all shadow-xl shadow-navy-900/10">
              Schedule Final Interview
            </button>
            <button className="w-full bg-white text-navy-900 py-5 rounded-2xl font-headline font-bold text-sm tracking-[0.2em] uppercase border border-surface-high hover:bg-surface-low transition-all">
              Download Dossier
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
