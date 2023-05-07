import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { FavouritesContext } from '../store/context/favourite-context';

const MealDetailsScreen = ({ route, navigation }) => {
const favMealCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavourite = favMealCtx.ids.includes(mealId)

  const changeFavStatus = () => {
    if(mealIsFavourite) {
      favMealCtx.removeFavourite(mealId)
    } else {
      favMealCtx.addFavourite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={changeFavStatus} icon={mealIsFavourite ? 'star' : 'star-outline'} color='white' />;
      },
    });
  }, [mealId, navigation, changeFavStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: mealDetails.imageUrl }} />
      <Text style={styles.title}>{mealDetails.title}</Text>
      <MealDetails {...mealDetails} textStyle={styles.detailStyle} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listCOntainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={mealDetails.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={mealDetails.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailStyle: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listCOntainer: {
    width: '80%',
  },
});
