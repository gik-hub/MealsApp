import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);
  console.log('mealDetails', mealDetails);

  const headerButtonPress = () => {
    console.log('pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonPress} icon='star' color='white' />;
      },
    });
  }, [mealId, navigation, headerButtonPress]);

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
