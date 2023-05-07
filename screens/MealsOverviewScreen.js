import React, { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route?.params?.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });



  useLayoutEffect(() => {
    const categoryDetails = CATEGORIES.find((category) => category?.id === catId);
    navigation.setOptions({ title: categoryDetails?.title });

  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData?.item?.title}
        imageUrl={itemData?.item?.imageUrl}
        item={itemData?.item}
      />
    );
  };

  return (
    <View style={styles?.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item?.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
