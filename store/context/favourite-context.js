import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((currFavIds) => [...currFavIds, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((currFavs) =>
      currFavs.filter((mealId) => mealId !== id)
    );
  };

  const values = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={values}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
