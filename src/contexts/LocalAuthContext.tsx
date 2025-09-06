import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'teacher' | 'parent';
  character: 'robot' | 'cat' | 'dragon';
  avatar: string;
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  musicEnabled: boolean;
  createdAt: string;
}

interface LocalAuthContextType {
  user: User | null;
  profile: User | null;
  session: any;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, role: 'student' | 'teacher' | 'parent', character?: 'robot' | 'cat' | 'dragon') => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

const LocalAuthContext = createContext<LocalAuthContextType | undefined>(undefined);

export const useLocalAuth = () => {
  const context = useContext(LocalAuthContext);
  if (context === undefined) {
    throw new Error('useLocalAuth must be used within a LocalAuthProvider');
  }
  return context;
};

interface LocalAuthProviderProps {
  children: React.ReactNode;
}

export const LocalAuthProvider: React.FC<LocalAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<User | null>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('codequest-user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setProfile(userData);
      setSession({ user: userData });
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, _password: string, fullName: string, role: 'student' | 'teacher' | 'parent', character: 'robot' | 'cat' | 'dragon' = 'robot') => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('codequest-users') || '[]');
    if (existingUsers.find((u: User) => u.email === email)) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      full_name: fullName,
      role,
      character,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      theme: 'light',
      soundEnabled: true,
      musicEnabled: true,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    existingUsers.push(newUser);
    localStorage.setItem('codequest-users', JSON.stringify(existingUsers));
    localStorage.setItem('codequest-user', JSON.stringify(newUser));

    setUser(newUser);
    setProfile(newUser);
    setSession({ user: newUser });
  };

  const signIn = async (email: string, _password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingUsers = JSON.parse(localStorage.getItem('codequest-users') || '[]');
    const user = existingUsers.find((u: User) => u.email === email);
    
    if (!user) {
      throw new Error('No user found with this email');
    }

    // Save session
    localStorage.setItem('codequest-user', JSON.stringify(user));
    setUser(user);
    setProfile(user);
    setSession({ user });
  };

  const signOut = async () => {
    localStorage.removeItem('codequest-user');
    setUser(null);
    setProfile(null);
    setSession(null);
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) throw new Error('No user logged in');

    const updatedUser = { ...user, ...updates };
    localStorage.setItem('codequest-user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setProfile(updatedUser);
  };

  const value: LocalAuthContextType = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return (
    <LocalAuthContext.Provider value={value}>
      {children}
    </LocalAuthContext.Provider>
  );
};
