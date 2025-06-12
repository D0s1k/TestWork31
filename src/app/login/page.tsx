'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/authStore';
import cls from '@/app/login/style.module.scss'

export default function LoginPage() {
  const router = useRouter();
  const login = useAuth((state) => state.login);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = (): boolean => {
    if (username.trim().length < 3 || password.trim().length < 3) {
      setError('Username и Password должны содержать минимум 3 символа.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validate()) return;

    const success = await login(username, password);
    if (success) {
      router.push('/products');
    } else {
      setError('Неверный логин или пароль.');
    }
  };

  return (
    <div className={cls.loginCont}>
      <form onSubmit={handleSubmit}>
        <h2>Авторизация</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
