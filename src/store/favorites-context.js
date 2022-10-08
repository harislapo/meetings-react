import { useState, createContext, useEffect } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeeting) => {},
  removeFavorite: (meetingId) => {},
  itemIsFavorite: (meetingId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState(
    JSON.parse(localStorage.getItem('favoriteMeetings')) || []
  );

  const addFavoriteHandler = (favoriteMeeting) => {
    setUserFavorites([...userFavorites, favoriteMeeting]);
  };

  const removeFavoriteHandler = (meetingId) => {
    const filteredFavorites = userFavorites.filter(
      (meeting) => meeting.id !== meetingId
    );

    setUserFavorites(filteredFavorites);
  };

  const itemIsFavoriteHandler = (meetingId) => {
    return userFavorites.some((meeting) => meeting.id === meetingId);
  };

  useEffect(() => {
    localStorage.setItem('favoriteMeetings', JSON.stringify(userFavorites));
  }, [userFavorites]);

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
