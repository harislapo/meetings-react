import { useState, createContext } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeeting) => {},
  removeFavorite: (meetingId) => {},
  itemIsFavorite: (meetingId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeeting) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeeting);
    });
  };

  const removeFavoriteHandler = (meetingId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meeting) => meeting.id !== meetingId);
    });
  };

  const itemIsFavoriteHandler = (meetingId) => {
    return userFavorites.some((meeting) => meeting.id === meetingId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
