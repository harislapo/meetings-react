import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetings</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetings</Link>
          </li>
          <li>
            <Link to="/new-meeting">New Meeting</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
