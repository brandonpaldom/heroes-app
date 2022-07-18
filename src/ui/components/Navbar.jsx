import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import styles from './Navbar.module.css';

export function Navbar() {
  const { logged, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const onLogin = () => {
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
          {logged ? (
            <>
              <p>
                Hi, <span className={styles.name}>{user?.fullName}</span>
              </p>
              <button onClick={onLogout} className={styles.button}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={onLogin} className={styles.button}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
