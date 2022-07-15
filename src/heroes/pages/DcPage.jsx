import { HeroList } from '../components';
import styles from './DcPage.module.css';

export function DcPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personajes de DC Comics</h1>
      <HeroList publisher="DC Comics" />
    </div>
  );
}
