'use client';

import { useAuth } from '@/store/authStore';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { token, email } = useAuth();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {year}
        {token && email && ` — Logged as ${email}`}
      </p>
    </footer>
  );
};
