import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className={styles.background}>
      <nav className={styles.container}>
        <div className={styles.nav}>
          <Link to="/" className={styles.title}>
            Associations
          </Link>
          <NavLink
            to="marvel"
            className={({ isActive }) =>
              isActive ? styles['link-active'] : styles.link
            }
          >
            Marvel
          </NavLink>
          <NavLink
            to="dc"
            className={({ isActive }) =>
              isActive ? styles['link-active'] : styles.link
            }
          >
            Dc
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) =>
              isActive ? styles['link-active'] : styles.link
            }
          >
            Search
          </NavLink>
        </div>
        <div className={styles.account}>
          <div className={styles['user-container']}>
            <div className={styles.avatar}></div>
            <span className={styles.name}>Brandon</span>
          </div>
          <button onClick={onLogout} className={styles.button}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
