import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  PlusCircle, 
  HelpCircle,
  LogOut,
  ShieldCheck,
  FileText,
  Search
} from 'lucide-react';
import { View, Role } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  role: Role;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, role, isOpen, onClose }) => {
  const getNavItems = () => {
    switch (role) {
      case 'admin':
        return [
          { id: 'dashboard', label: 'Global Dashboard', icon: LayoutDashboard },
          { id: 'admin', label: 'Admin Console', icon: ShieldCheck },
          { id: 'profile', label: 'Candidate Oversight', icon: Users },
        ];
      case 'client':
        return [
          { id: 'dashboard', label: 'Client Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Candidate Insights', icon: Users },
          { id: 'jobs', label: 'Job Management', icon: Briefcase },
        ];
      case 'candidate':
        return [
          { id: 'portal', label: 'Career Portal', icon: LayoutDashboard },
          { id: 'applications', label: 'Applications', icon: FileText },
          { id: 'vault', label: 'Document Vault', icon: Briefcase },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const handleNavClick = (view: View) => {
    onViewChange(view);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-navy-900/40 backdrop-blur-sm z-[60] md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-surface flex flex-col border-r border-surface-high py-8 z-[70] transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="px-8 mb-12 flex justify-between items-center">
          <div>
            <div className="font-headline font-black text-xl text-navy-900 tracking-tighter uppercase">CandidateQuest</div>
            <div className="text-[8px] uppercase tracking-[0.3em] text-slate-400 font-bold mt-1">Intelligence Suite</div>
          </div>
          {onClose && (
            <button onClick={onClose} className="md:hidden p-2 text-slate-400 hover:text-navy-900">
              <PlusCircle className="w-6 h-6 rotate-45" />
            </button>
          )}
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as View)}
              className={`w-full flex items-center px-8 py-3 transition-all duration-200 group ${
                currentView === item.id 
                  ? 'text-navy-900 border-r-4 border-navy-900 bg-surface-low' 
                  : 'text-slate-500 hover:text-navy-900 hover:bg-surface-low/50'
              }`}
            >
              <item.icon className={`mr-4 w-5 h-5 ${currentView === item.id ? 'text-navy-900' : 'text-slate-400 group-hover:text-navy-900'}`} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
          <button className="w-full flex items-center px-8 py-3 text-slate-500 hover:text-navy-900 hover:bg-surface-low/50 transition-all duration-200 group">
            <Settings className="mr-4 w-5 h-5 text-slate-400 group-hover:text-navy-900" />
            <span className="font-medium text-sm">Settings</span>
          </button>
        </nav>

        <div className="px-6 mt-auto">
          <button className="w-full py-3 bg-navy-900 text-white rounded-xl font-bold text-sm tracking-tight hover:scale-[0.98] active:scale-95 transition-all duration-150 shadow-lg shadow-navy-900/10 flex items-center justify-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Create New Role
          </button>
          
          <div className="mt-8 pt-6 border-t border-surface-high space-y-4">
            <button className="flex items-center text-slate-500 hover:text-navy-900 transition-colors text-sm font-medium px-2">
              <HelpCircle className="mr-3 w-4 h-4" />
              Help Center
            </button>
            <button 
              onClick={() => onViewChange('landing')}
              className="flex items-center text-slate-500 hover:text-navy-900 transition-colors text-sm font-medium px-2"
            >
              <LogOut className="mr-3 w-4 h-4" />
              Switch Role
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
