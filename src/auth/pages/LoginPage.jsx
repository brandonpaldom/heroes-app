import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Brandon');

    navigate(lastPath, { replace: true });
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login page</h1>
        <button onClick={onLogin} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}
