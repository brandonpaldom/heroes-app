import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/marvel');
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
