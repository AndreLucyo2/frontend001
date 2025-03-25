import axios from 'axios';
import { LoginCredentials, LoginResponse, AuthError } from '../types/auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
const TOKEN_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY || 'token';
const USER_KEY = process.env.REACT_APP_USER_KEY || 'user';

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await axios.post<LoginResponse>(`${API_URL}/api/auth/login`, credentials);
      return response.data;
    } catch (error: any) {
      const authError: AuthError = {
        message: error.response?.data?.message || 'Erro ao fazer login',
        code: error.response?.data?.code
      };
      throw authError;
    }
  },

  async logout(): Promise<void> {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  setAuthData(token: string, user: any): void {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  clearAuthData(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
};
