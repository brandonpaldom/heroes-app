import { HeroList } from '../components';
import styles from './MarvelPage.module.css';

export function MarvelPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Marvel page</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
}
