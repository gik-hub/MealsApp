import React, { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealList from '../components/MealsList/MealList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route?.params?.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });



  useLayoutEffect(() => {
    const categoryDetails = CATEGORIES.find((category) => category?.id === catId);
    navigation.setOptions({ title: categoryDetails?.title });

  }, [catId, navigation])

  return <MealList mealData={displayedMeals} />
  
};

export default MealsOverviewScreen;


