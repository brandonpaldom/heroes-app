import { Link } from 'react-router-dom';
import styles from './HeroCard.module.css';

export function HeroCard({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <Link to={`/hero/${id}`} className={styles.card}>
      <img
        src={heroImageUrl}
        alt={superhero}
        width={60}
        className={styles.image}
      />
      <div className={styles['info-container']}>
        <h2 className={styles.title}>{superhero}</h2>
        <p>{alter_ego}</p>
        <p className={styles.small}>{first_appearance}</p>
      </div>
    </Link>
  );
}
