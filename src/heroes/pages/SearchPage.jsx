import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';
import styles from './SearchPage.module.css';

export function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <h1 className={styles.title}>Search</h1>
        <form onSubmit={onSearchSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Search..."
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
            className={styles.input}
          />
          <button type="button" className={styles.button}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.results}>
        <h2 className={styles.subtitle}>Results</h2>
        {q === '' ? (
          <p
            className={`${styles.paragraph} animate__animated animate__fadeIn`}
          >
            Search for a hero
          </p>
        ) : (
          heroes.length === 0 && (
            <p
              className={`${styles.paragraph} animate__animated animate__fadeIn`}
            >
              Sorry, not found: <span className={styles.highlight}>{q}</span>
            </p>
          )
        )}
        <div className={styles.grid}>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
}
