import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';
import styles from './HeroList.module.css';

export function HeroList({ publisher }) {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className={styles.grid}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
}
