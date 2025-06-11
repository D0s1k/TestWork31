import { create } from 'zustand';
import api from '@/lib/axios';

interface AuthState {
  token: string | null;
  username: string;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  username: '',
  async login(username, password) {
    try {
      const res = await api.post('/auth/login', { username, password, expiresInMins: 30, });
      set({ token: res.data.accessToken, username: res.data.username });
      return true;
    } catch {
      return false;
    }
  },
  logout() {
    set({ token: null, username: '' });
  },
}));