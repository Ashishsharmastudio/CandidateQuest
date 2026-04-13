/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { ProfileView } from './components/ProfileView';
import { AdminConsoleView } from './components/AdminConsoleView';
import { CareerPortalView } from './components/CareerPortalView';
import { LandingPageView } from './components/LandingPageView';
import { View, Role } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [userRole, setUserRole] = useState<Role>('client');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleEnterApp = (view: View, role: Role) => {
    setUserRole(role);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPageView onEnterApp={handleEnterApp} />;
      case 'dashboard':
        return <DashboardView />;
      case 'profile':
        return <ProfileView />;
      case 'admin':
        return <AdminConsoleView />;
      case 'portal':
        return <CareerPortalView />;
      default:
        return <DashboardView />;
    }
  };

  const getHeaderProps = () => {
    const baseProps = { onMenuClick: () => setIsSidebarOpen(true) };
    
    // Role-based header info
    const roleTitles = {
      admin: { name: 'Marcus Thorne', role: 'Chief Talent Officer' },
      client: { name: 'Elena Moretti', role: 'Hiring Manager' },
      candidate: { name: 'Alex Johnson', role: 'Candidate' }
    };

    const user = roleTitles[userRole];

    switch (currentView) {
      case 'profile':
        return { ...baseProps, title: 'Sarah Chen', subtitle: 'Lead Product Architect', showSearch: false, user };
      case 'admin':
        return { ...baseProps, title: 'Global Admin Console', subtitle: 'System Performance Architecture', showSearch: true, user };
      case 'portal':
        return { ...baseProps, title: 'Career Portal', subtitle: 'Welcome Back, Alex', showSearch: false, user };
      default:
        return { ...baseProps, showSearch: true, user };
    }
  };

  if (currentView === 'landing') {
    return renderView();
  }

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        role={userRole}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen w-full">
        <Header {...getHeaderProps()} />
        
        <div className="flex-1 overflow-y-auto">
          {renderView()}
        </div>

        {/* Global Footer */}
        <footer className="p-8 border-t border-surface-high mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <p>© 2024 CandidateQuest AI Intelligence. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-navy-900 transition-colors" href="#">Privacy Framework</a>
              <a className="hover:text-navy-900 transition-colors" href="#">Compliance Log</a>
              <a className="hover:text-navy-900 transition-colors" href="#">System Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
