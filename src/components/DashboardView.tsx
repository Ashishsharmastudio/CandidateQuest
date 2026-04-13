import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  Users, 
  ShieldCheck,
  ArrowRight,
  Info,
  PlusCircle,
  BarChart3,
  Scale,
  DollarSign,
  Zap,
  ChevronRight,
  Search,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';

const talentData = [
  { name: 'Jan', value: 32 },
  { name: 'Feb', value: 48 },
  { name: 'Mar', value: 56 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 52 },
  { name: 'Jul', value: 24 },
];

const riskData = [
  { name: 'Attrition', value: 12, color: '#006b5f' },
  { name: 'Compliance', value: 3, color: '#0d1c32' },
  { name: 'Fraud', value: 0.4, color: '#6df5e1' },
  { name: 'Safe', value: 84.6, color: '#e6e8ea' },
];

const roiData = [
  { month: 'Jan', savings: 45000, efficiency: 65 },
  { month: 'Feb', savings: 52000, efficiency: 72 },
  { month: 'Mar', savings: 61000, efficiency: 78 },
  { month: 'Apr', savings: 58000, efficiency: 82 },
  { month: 'May', savings: 72000, efficiency: 88 },
  { month: 'Jun', savings: 85000, efficiency: 94 },
];

const candidates = [
  { id: 'SC', name: 'Sarah Chen', location: 'Palo Alto, CA', role: 'Lead Product Architect', score: 98, risk: 'Negligible', experience: '12y', skills: ['React', 'Node', 'AWS'] },
  { id: 'JK', name: 'Julian Knight', location: 'London, UK', role: 'VP of Engineering', score: 94, risk: 'Minimal', experience: '15y', skills: ['Go', 'Kubernetes', 'Python'] },
  { id: 'EM', name: 'Elena Moretti', location: 'Milan, IT', role: 'Principal ML Engineer', score: 89, risk: 'Standard', experience: '8y', skills: ['PyTorch', 'TensorFlow', 'SQL'] },
];

export const DashboardView: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('pipeline');

  const tabs = [
    { id: 'pipeline', label: 'Hiring Pipeline', icon: TrendingUp },
    { id: 'jobs', label: 'Job Management', icon: Briefcase },
    { id: 'compare', label: 'Candidate Comparison', icon: Scale },
    { id: 'analytics', label: 'ROI Analytics', icon: BarChart3 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 md:p-8 lg:p-12 space-y-8 md:space-y-12"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tighter text-navy-900">Client Intelligence Console</h1>
          <p className="text-sm text-slate-500 mt-2 max-w-lg">AI-driven talent synthesis and predictive risk assessment for your active recruitment pipeline.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-surface-high text-navy-900 rounded-xl font-bold text-sm transition-all hover:bg-surface-low">
            Export ROI Report
          </button>
          <button className="px-6 py-3 bg-navy-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-navy-900/20 hover:scale-[0.98] transition-all flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Create New Job
          </button>
        </div>
      </div>

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

      {activeTab === 'pipeline' && (
        <>
          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Active Roles', value: '24', trend: '+3 this week', icon: Briefcase, color: 'text-teal-500' },
              { label: 'Total Candidates', value: '1,482', trend: 'Last updated 12m ago', icon: Users, border: true },
              { label: 'Avg Match Score', value: '86%', trend: 'Optimized', icon: CheckCircle2, badge: true },
            ].map((stat, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden group ${stat.border ? 'border-l-4 border-navy-900' : ''}`}>
                <stat.icon className="absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity" />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">{stat.label}</p>
                <h2 className="text-5xl font-extrabold text-navy-900">{stat.value}</h2>
                <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${stat.color || 'text-slate-500'}`}>
                  {stat.trend === 'Optimized' ? (
                    <span className="bg-teal-400/20 text-teal-500 px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {stat.trend}
                    </span>
                  ) : (
                    <>
                      {stat.trend.includes('+') ? <TrendingUp className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      {stat.trend}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Risk Scoring */}
            <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-surface-high">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold tracking-tight">Pre-Hire Risk Scoring</h3>
                <Info className="w-5 h-5 text-slate-300" />
              </div>
              
              <div className="h-64 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-navy-900">15.4%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Risk</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {riskData.filter(d => d.name !== 'Safe').map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-medium text-slate-500">{item.name} Risk</span>
                    </div>
                    <span className="text-sm font-bold text-navy-900">{item.value}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-surface-low rounded-xl border border-white">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-teal-500">AI Insight:</span> Risk factors are currently within acceptable institutional thresholds. Compliant with SOC2 and GDPR frameworks.
                </p>
              </div>
            </div>

            {/* Talent Velocity */}
            <div className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-sm border border-surface-high flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight">Talent Velocity</h3>
                <p className="text-sm text-slate-500">Quarterly distribution of high-match candidate sourcing.</p>
              </div>
              
              <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={talentData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                      {talentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'Mar' ? '#0d1c32' : entry.name === 'Jun' ? '#006b5f' : '#e2e8f0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Candidate Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-surface-high overflow-hidden">
            <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-surface-high">
              <div>
                <h3 className="text-xl font-bold tracking-tight">AI Candidate Ranking</h3>
                <p className="text-sm text-slate-500">Priority queue based on skill-role synthesis.</p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <div className="flex -space-x-2">
                  {[1, 2].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-400">+2 active reviewers</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-low/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Candidate Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Job Role</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">AI Match Score</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Risk Level</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-high">
                  {candidates.map((c, i) => (
                    <tr key={i} className="hover:bg-surface-low/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-high flex items-center justify-center font-bold text-navy-900 text-xs">{c.id}</div>
                          <div>
                            <p className="font-bold text-navy-900">{c.name}</p>
                            <p className="text-xs text-slate-400">{c.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm font-medium text-navy-800">{c.role}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-teal-400/10 text-teal-500 text-[10px] font-black rounded">{c.score}%</span>
                          <div className="h-1.5 w-16 bg-surface-high rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500" style={{ width: `${c.score}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          c.risk === 'Negligible' ? 'bg-teal-400/20 text-teal-500' : 'bg-surface-high text-slate-500'
                        }`}>
                          {c.risk}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="px-4 py-2 bg-navy-900 text-white rounded-xl text-[10px] font-bold hover:scale-105 transition-transform uppercase tracking-widest">
                          Auto-shortlist
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-8 py-6 bg-surface-low/30 border-t border-surface-high">
              <button className="text-sm font-bold text-navy-900 hover:underline flex items-center gap-2">
                View all 1,482 candidates 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === 'jobs' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Job Management</h3>
              <p className="text-slate-500 text-sm mt-1">Define qualifications, experience, and AI scoring criteria for your roles.</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search roles..." className="pl-10 pr-4 py-2 bg-white border border-surface-high rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/10" />
              </div>
              <button className="p-2 bg-white border border-surface-high rounded-xl text-navy-900">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Senior Product Designer', dept: 'Design', applicants: 42, status: 'Active', match: 88 },
              { title: 'Lead Frontend Engineer', dept: 'Engineering', applicants: 128, status: 'Active', match: 92 },
              { title: 'ML Research Scientist', dept: 'AI Labs', applicants: 15, status: 'Paused', match: 74 },
              { title: 'VP of Engineering', dept: 'Leadership', applicants: 8, status: 'Active', match: 96 },
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-surface-high shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-navy-900/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-low rounded-xl flex items-center justify-center text-navy-900">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">{job.title}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{job.dept} • {job.applicants} Applicants</p>
                  </div>
                </div>
                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avg Match</p>
                    <p className="text-sm font-black text-teal-500">{job.match}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                      job.status === 'Active' ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {job.status.toUpperCase()}
                    </span>
                  </div>
                  <button className="p-2 hover:bg-surface-low rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'compare' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Candidate Comparison Tool</h3>
              <p className="text-slate-500 text-sm mt-1">Side-by-side synthesis of top-ranked applicants across key performance vectors.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white rounded-3xl border border-surface-high shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 divide-x divide-surface-high border-b border-surface-high">
                <div className="p-8 bg-surface-low/30">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Comparison Matrix</p>
                  <h4 className="text-xl font-headline font-black text-navy-900">Performance Vectors</h4>
                </div>
                {candidates.map((c, i) => (
                  <div key={i} className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xl mx-auto">
                      {c.id}
                    </div>
                    <div>
                      <h5 className="font-bold text-navy-900">{c.name}</h5>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {[
                { label: 'AI Match Score', values: candidates.map(c => `${c.score}%`), highlight: true },
                { label: 'Technical Depth', values: ['Expert', 'Advanced', 'Advanced'] },
                { label: 'Experience', values: candidates.map(c => c.experience) },
                { label: 'Risk Profile', values: candidates.map(c => c.risk) },
                { label: 'Key Skills', values: candidates.map(c => c.skills.join(', ')) },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 divide-x divide-surface-high border-b border-surface-high last:border-0 group">
                  <div className="p-6 bg-surface-low/10 group-hover:bg-surface-low/30 transition-colors">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-widest">{row.label}</p>
                  </div>
                  {row.values.map((val, j) => (
                    <div key={j} className="p-6 text-center">
                      <span className={`text-sm font-medium ${row.highlight ? 'text-teal-600 font-black' : 'text-slate-600'}`}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Total Cost Savings', value: '$242,500', trend: '+12% vs Q3', icon: DollarSign, color: 'text-teal-500' },
              { label: 'Efficiency Gain', value: '3.4x', trend: 'AI-Driven', icon: Zap, color: 'text-amber-500' },
              { label: 'Retention Forecast', value: '94%', trend: 'High Confidence', icon: ShieldCheck, color: 'text-navy-900' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h2 className="text-4xl font-extrabold text-navy-900">{stat.value}</h2>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-8">ROI Growth Trajectory</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={roiData}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#006b5f" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#006b5f" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} />
                    <YAxis hide />
                    <Tooltip />
                    <Area type="monotone" dataKey="savings" stroke="#006b5f" fillOpacity={1} fill="url(#colorSavings)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-8">Hiring Efficiency Index</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={roiData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="stepAfter" dataKey="efficiency" stroke="#0d1c32" strokeWidth={3} dot={{ r: 6, fill: '#0d1c32' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
