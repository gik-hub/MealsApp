import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import MealList from '../components/MealsList/MealList';
import { FavouritesContext } from '../store/context/favourite-context';
import { MEALS } from '../data/dummy-data';

const FavouriteScreen = () => {
  const favCtx = useContext(FavouritesContext);

  const favMeals = MEALS.filter((meal) => favCtx.ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootcontainer}>
        <Text style={styles.text}>You do not have any favourites yet</Text>
      </View>
    );
  }
  return <MealList mealData={favMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
