'use client';

import cls from '@/components/Header/Header.module.scss';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export const Header = () => {
    const { token, firstName, lastName, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

  return (
    <header className={cls.header}>
      <div className={cls.topBar}>
        <div className={cls.contactInfo}>
          <span><FaPhoneAlt /> +021-95-51-84</span>
          <span><FaEnvelope /> shop@abelohost.com</span>
          <span><FaMapMarkerAlt /> 1734 Stonecoal Road</span>
        </div>
        <div className={cls.login}>
          <FaUser /> {token ? `${firstName} ${lastName}` : <Link href="/login">Login</Link>}
          {token && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>

      <div className={cls.middleBar}>
        <div className={cls.logo}>Abelohost <span>Shop.</span></div>
        <div className={cls.banner}>600 x 70</div>
      </div>

      <nav className={cls.navBar}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Hot Deals</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Laptops</a></li>
          <li><a href="#">Smartphones</a></li>
          <li><a href="#">Cameras</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </nav>
    </header>
  );
};
