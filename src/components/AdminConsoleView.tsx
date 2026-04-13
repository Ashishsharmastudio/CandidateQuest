import React from 'react';
import { 
  FileDown, 
  TrendingUp, 
  Building2, 
  Users2, 
  Zap, 
  AlertTriangle, 
  Activity, 
  Globe,
  Cloud,
  RefreshCw,
  ShieldCheck,
  FileText,
  Settings,
  Plus,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export const AdminConsoleView: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('system');

  const tabs = [
    { id: 'system', label: 'System Pulse', icon: Activity },
    { id: 'clients', label: 'Client Management', icon: Building2 },
    { id: 'candidates', label: 'Candidate Oversight', icon: Users2 },
    { id: 'verification', label: 'Verification Control', icon: ShieldCheck },
    { id: 'billing', label: 'Subscription & Billing', icon: Zap },
    { id: 'logs', label: 'Audit Logs', icon: FileText },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 md:p-10 space-y-8 md:space-y-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Executive Oversight</span>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-navy-900 tracking-tight">System Performance Architecture</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-surface-high text-navy-900 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-surface-low transition-all">
            <RefreshCw className="w-4 h-4" />
            Sync Nodes
          </button>
          <button className="px-6 py-3 bg-navy-900 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-navy-900/20 hover:scale-[0.98] transition-all">
            <FileDown className="w-4 h-4" />
            Intelligence Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-surface-high pb-px">
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

      {activeTab === 'system' && (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Total Enterprise Clients', value: '412', trend: '5% YoY', icon: Building2, color: 'bg-teal-400/10 text-teal-500' },
              { label: 'Managed Identities', value: '84.2k', trend: '12% MoM', icon: Users2, color: 'bg-navy-900/10 text-navy-900' },
              { label: 'Deployment Velocity', value: '1,240', badge: 'Q4 ACTIVE', icon: Zap, color: 'bg-amber-100 text-amber-600' },
            ].map((m, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl intelligence-rail shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">{m.label}</span>
                  <div className={`p-2 rounded-lg ${m.color}`}>
                    <m.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-headline font-extrabold text-navy-900 tracking-tighter">{m.value}</span>
                  {m.trend ? (
                    <span className="text-sm font-bold text-teal-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {m.trend}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-500 bg-surface-low px-2 py-1 rounded uppercase">{m.badge}</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-medium">System-wide active commercial licenses across EMEA and AMER regions.</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Integrity Feed */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-headline font-bold text-navy-900 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  Integrity Monitoring Feed
                </h3>
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">3 CRITICAL ALERTS</span>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-surface-high">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-low/50">
                      <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Risk Identity</th>
                      <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Detected Anomaly</th>
                      <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Level</th>
                      <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-high">
                    {[
                      { name: 'Marcus Aurelius', id: 'CQ-9921-X', anomaly: 'Deepfake Audio Match', confidence: '98%', level: 'CRITICAL' },
                      { name: 'Sarah Lundberg', id: 'CQ-8842-P', anomaly: 'Duplicate Biometric Data', confidence: 'Candidate Conflict', level: 'HIGH RISK' },
                      { name: 'Julian Kovic', id: 'CQ-7710-M', anomaly: 'Credential Mismatch', confidence: 'Automated Flag', level: 'HIGH RISK' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-low/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded bg-surface-high flex items-center justify-center font-bold text-[10px] text-navy-900">
                              {row.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-bold text-sm text-navy-900">{row.name}</div>
                              <div className="text-[10px] text-slate-400 font-bold">ID: {row.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="text-sm font-bold text-navy-800">{row.anomaly}</div>
                          <div className={`text-[10px] font-bold uppercase tracking-tighter ${row.level === 'CRITICAL' ? 'text-red-500' : 'text-slate-400'}`}>
                            {row.confidence}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                            row.level === 'CRITICAL' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-600'
                          }`}>
                            {row.level}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="px-4 py-1.5 bg-surface-high text-navy-900 font-bold text-[10px] rounded-lg hover:bg-navy-900 hover:text-white transition-all uppercase tracking-widest">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Infrastructure Pulse */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-headline font-bold text-navy-900 flex items-center gap-3">
                <Activity className="w-6 h-6 text-teal-500" />
                Infrastructure Pulse
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">AI Decision Engine</span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-teal-500">
                      <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                      OPERATIONAL
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1 bg-surface-low h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 w-[99.8%] h-full"></div>
                    </div>
                    <span className="text-xs font-bold text-navy-900">99.8%</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold">Latency: 142ms | Throughput: 4.2k req/s</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Verification Node</span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-teal-500">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      OPTIMAL
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1 bg-surface-low h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 w-[94%] h-full"></div>
                    </div>
                    <span className="text-xs font-bold text-navy-900">0.8s</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold">Mean Identity Validation Time (Global Avg)</p>
                </div>

                <div className="relative h-56 rounded-2xl overflow-hidden bg-navy-900 group">
                  <img 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                    src="https://picsum.photos/seed/map/800/600"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Active Regions</div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                  <Globe className="absolute top-6 right-6 w-8 h-8 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'clients' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Client & Agency Management</h3>
              <p className="text-slate-500 text-sm mt-1">Manage enterprise accounts, permissions, and activity monitoring.</p>
            </div>
            <button className="bg-navy-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[0.98] transition-all">
              <Plus className="w-4 h-4" />
              Add New Client
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Stripe', industry: 'Fintech', status: 'Active', users: 142, roles: 24 },
              { name: 'Airbnb', industry: 'Hospitality', status: 'Active', users: 88, roles: 12 },
              { name: 'ByteDance', industry: 'Technology', status: 'Suspended', users: 312, roles: 56 },
            ].map((client, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-surface-high shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-low rounded-xl flex items-center justify-center font-bold text-navy-900">
                    {client.name[0]}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                    client.status === 'Active' ? 'bg-teal-50 text-teal-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {client.status.toUpperCase()}
                  </span>
                </div>
                <h4 className="font-bold text-navy-900 text-lg">{client.name}</h4>
                <p className="text-sm text-slate-500">{client.industry}</p>
                <div className="mt-6 pt-6 border-t border-surface-low grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Users</p>
                    <p className="text-sm font-bold text-navy-900">{client.users}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Open Roles</p>
                    <p className="text-sm font-bold text-navy-900">{client.roles}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'candidates' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Candidate Oversight</h3>
              <p className="text-slate-500 text-sm mt-1">Global view of all candidates, match scores, and risk distribution across the platform.</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search candidates..." className="pl-10 pr-4 py-2 bg-white border border-surface-high rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/10" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-surface-high overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-low/50">
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Candidate</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Avg Match</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Risk Profile</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Verification</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-high">
                {[
                  { name: 'Marcus Aurelius', score: 98, risk: 'Negligible', status: 'Verified' },
                  { name: 'Sarah Lundberg', score: 92, risk: 'Minimal', status: 'Pending' },
                  { name: 'Julian Kovic', score: 85, risk: 'Standard', status: 'Verified' },
                  { name: 'Elena Moretti', score: 94, risk: 'Negligible', status: 'Verified' },
                ].map((c, i) => (
                  <tr key={i} className="hover:bg-surface-low/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-navy-900">{c.name}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-teal-500">{c.score}%</span>
                        <div className="w-12 h-1 bg-surface-low rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500" style={{ width: `${c.score}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        c.risk === 'Negligible' ? 'bg-teal-50 text-teal-600' : 'bg-surface-low text-slate-500'
                      }`}>
                        {c.risk}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                        <ShieldCheck className={`w-4 h-4 ${c.status === 'Verified' ? 'text-teal-500' : 'text-slate-300'}`} />
                        {c.status.toUpperCase()}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-[10px] font-bold uppercase tracking-widest text-navy-900 hover:underline">
                        View Full Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-headline font-bold text-navy-900">Verification Control Panel</h3>
              <p className="text-slate-500 text-sm mt-1">Manage ID, employment, and education verification workflows.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white border border-surface-high text-navy-900 rounded-xl font-bold text-xs uppercase tracking-widest">
                Workflow Settings
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-surface-high overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-low/50">
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Candidate</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Type</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Submission Date</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Status</th>
                  <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-high">
                {[
                  { name: 'Alex Johnson', type: 'Identity (Passport)', date: '2 hours ago', status: 'Pending Review' },
                  { name: 'Sarah Chen', type: 'Employment (Stripe)', date: '5 hours ago', status: 'Verified' },
                  { name: 'Julian Knight', type: 'Education (Stanford)', date: '1 day ago', status: 'Flagged' },
                ].map((v, i) => (
                  <tr key={i} className="hover:bg-surface-low/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-navy-900">{v.name}</td>
                    <td className="px-8 py-6 text-sm text-slate-500">{v.type}</td>
                    <td className="px-8 py-6 text-sm text-slate-400">{v.date}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                        v.status === 'Verified' ? 'bg-teal-50 text-teal-600' : 
                        v.status === 'Flagged' ? 'bg-red-50 text-red-600' : 
                        'bg-amber-50 text-amber-600'
                      }`}>
                        {v.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-[10px] font-bold uppercase tracking-widest text-navy-900 hover:underline">
                        Review Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(activeTab === 'billing' || activeTab === 'logs') && (
        <div className="bg-white p-20 rounded-3xl border border-dashed border-surface-high flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 bg-surface-low rounded-full flex items-center justify-center text-slate-300">
            <Settings className="w-10 h-10 animate-spin-slow" />
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold text-navy-900">Module Under Construction</h3>
            <p className="text-slate-500 mt-2">The {tabs.find(t => t.id === activeTab)?.label} module is currently being optimized for the MVP release.</p>
          </div>
          <button onClick={() => setActiveTab('system')} className="text-sm font-bold text-navy-900 underline underline-offset-8">Return to System Pulse</button>
        </div>
      )}

      {/* Footer Status */}
      <div className="pt-8 border-t border-surface-high flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-teal-500" />
            All systems operational
          </span>
          <span className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Last sync: 2 minutes ago
          </span>
        </div>
        <div>CandidateQuest v4.2.0-Alpha</div>
      </div>
    </motion.div>
  );
};
