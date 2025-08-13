import React, { useState } from 'react';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage your projects and track progress.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">View detailed analytics and reports.</p>
          </div>
        );
      case 'team':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Team</h1>
            <p className="text-muted-foreground">Manage team members and permissions.</p>
          </div>
        );
      case 'calendar':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
            <p className="text-muted-foreground">View and manage your schedule.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Configure your application settings.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout
      activeItem={activeItem}
      onItemClick={setActiveItem}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
