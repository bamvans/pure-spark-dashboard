import React from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { BarChart3, DollarSign, TrendingUp, Users } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const statsData = [
    {
      title: 'Total Revenue',
      value: '$45,234',
      change: { value: 12.5, type: 'increase' as const },
      icon: DollarSign,
    },
    {
      title: 'Active Projects',
      value: 23,
      change: { value: 3.2, type: 'increase' as const },
      icon: BarChart3,
    },
    {
      title: 'Team Members',
      value: 47,
      change: { value: 8.1, type: 'increase' as const },
      icon: Users,
    },
    {
      title: 'Growth Rate',
      value: '23.8%',
      change: { value: 2.4, type: 'decrease' as const },
      icon: TrendingUp,
    },
  ];

  const projectsData = [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Modern React-based e-commerce solution with payment integration and inventory management.',
      status: 'active' as const,
      progress: 75,
      teamMembers: 8,
      dueDate: 'Mar 15',
    },
    {
      id: '2',
      name: 'Mobile App Redesign',
      description: 'Complete UI/UX overhaul of the existing mobile application with new user flows.',
      status: 'on-hold' as const,
      progress: 45,
      teamMembers: 5,
      dueDate: 'Apr 22',
    },
    {
      id: '3',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard for business intelligence and data visualization.',
      status: 'completed' as const,
      progress: 100,
      teamMembers: 6,
      dueDate: 'Feb 28',
    },
    {
      id: '4',
      name: 'API Integration',
      description: 'Integration with third-party APIs for enhanced functionality and data synchronization.',
      status: 'active' as const,
      progress: 30,
      teamMembers: 4,
      dueDate: 'May 10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            className={`animation-delay-${index * 100}`}
          />
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Recent Projects</h2>
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            View all
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              className={`animation-delay-${(index + 4) * 100}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};