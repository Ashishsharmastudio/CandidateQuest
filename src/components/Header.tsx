import React from 'react';
import { Search, Bell, Settings, Mail, Menu } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  onMenuClick?: () => void;
  user?: { name: string; role: string };
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showSearch = true, onMenuClick, user }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-4 md:px-8 h-20 sticky top-0 z-40 border-b border-surface-high">
      <div className="flex items-center gap-4 md:gap-6">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 text-slate-600 hover:bg-surface-low rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        
        {title ? (
          <div className="truncate">
            <h2 className="font-headline font-bold text-base md:text-lg tracking-tight text-navy-900 truncate">{title}</h2>
            {subtitle && <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-wider font-bold truncate">{subtitle}</p>}
          </div>
        ) : showSearch ? (
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="pl-10 pr-4 py-2 bg-surface-low border-none rounded-xl text-sm w-48 lg:w-64 focus:ring-2 focus:ring-navy-900/10 transition-all outline-none" 
              placeholder="Search..." 
              type="text"
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1 md:gap-2">
          <button className="p-2 rounded-full hover:bg-surface-low transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-surface-low transition-colors hidden xs:block">
            <Mail className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        
        <div className="h-8 w-px bg-surface-high mx-1 md:mx-2"></div>
        
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-bold text-navy-900">{user?.name || 'Marcus Thorne'}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{user?.role || 'CTO'}</p>
          </div>
          <img 
            alt={user?.name || 'User'} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-white shadow-sm" 
            src={`https://picsum.photos/seed/${user?.name || 'executive'}/200/200`}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
