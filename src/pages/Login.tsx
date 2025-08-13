import React, { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically call your C# API
    console.log('Login attempt:', { email, password });
    
    setIsLoading(false);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full -translate-x-24 -translate-y-24 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full translate-x-32 translate-y-32 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-primary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        <LoginForm onLogin={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
};