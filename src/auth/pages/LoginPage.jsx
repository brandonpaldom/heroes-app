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
      <div className={`${styles.container} animate__animated animate__fadeIn`}>
        <div className={styles.avatar} />
        <h1 className={styles.title}>Sign in yo your account</h1>
        <p className={styles.subtitle}>Log in with the test user</p>
        <div className={styles.form}>
          <label className={styles['input-container']}>
            <span className={styles.label}>Email address</span>
            <input
              type="text"
              name="username"
              id="username"
              className={styles.input}
              value="brandon"
              readOnly
            />
          </label>
          <label className={styles['input-container']}>
            <span className={styles.label}>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              value="brandon"
              readOnly
            />
          </label>
          <button onClick={onLogin} className={styles.button}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
