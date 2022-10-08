import Card from '../components/UI/Card';
import MeetingList from '../components/meetings/MeetingList';
import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';

const FavoriteMeetingsPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yet!</p>;
  } else {
    content = (
      <Card>
        <MeetingList meetings={favorites} />
      </Card>
    );
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoriteMeetingsPage;
