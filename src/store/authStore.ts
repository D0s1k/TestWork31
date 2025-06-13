import { create } from 'zustand';
import api from '@/lib/axios';

interface AuthState {
  token: string | null;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  async login(username, password) {
    try {
      const res = await api.post('/auth/login', { username, password, expiresInMins: 30, });
      set({
        token: res.data.accessToken, 
        username: res.data.username,
        firstName: res.data.firstName, 
        lastName: res.data.lastName, 
        email: res.data.email });
      return true;
    } catch {
      return false;
    }
  },
  logout() {
    set({ token: null, username: '' , firstName: '', lastName: '', email: ''});
  },
}));