import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import styles from './HeroPage.module.css';

export function HeroPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onGoBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <img
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero}
        className={styles.image}
      />
      <div className={styles['info-container']}>
        <h2 className={styles.title}>{hero.superhero}</h2>
        <p>
          Alter ego: <span className={styles.paragraph}>{hero.alter_ego}</span>
        </p>
        <p>
          Publisher: <span className={styles.paragraph}>{hero.publisher}</span>
        </p>
        <p>
          First appearance:{' '}
          <span className={styles.paragraph}>{hero.first_appearance}</span>
        </p>
        <p>
          Characters:{' '}
          <span className={styles.paragraph}>{hero.characters}</span>
        </p>
        <button onClick={onGoBack} className={styles.button}>
          Go back
        </button>
      </div>
    </div>
  );
}
