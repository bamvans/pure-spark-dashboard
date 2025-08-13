import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MoreVertical, Users } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number;
  teamMembers: number;
  dueDate: string;
  className?: string;
}

const statusColors = {
  active: 'bg-primary text-primary-foreground',
  completed: 'bg-success text-success-foreground',
  'on-hold': 'bg-warning text-warning-foreground',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  status,
  progress,
  teamMembers,
  dueDate,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-gradient-card border border-border p-6 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] animate-slide-up group',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{teamMembers}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{dueDate}</span>
            </div>
          </div>
          <Badge variant="secondary" className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
          </Badge>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-full -translate-y-4 translate-x-4" />
    </div>
  );
};