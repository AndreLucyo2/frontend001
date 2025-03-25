import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState } from '../types/auth';
import { authService } from '../services/authService';

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null
  });

  useEffect(() => {
    const token = authService.getToken();
    const user = authService.getUser();
    
    if (token && user) {
      setAuth({
        isAuthenticated: true,
        user,
        token
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      setAuth({
        isAuthenticated: true,
        user: response.user,
        token: response.token
      });
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await authService.logout();
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
