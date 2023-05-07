import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import MealItem from '../MealItem'

const MealList = ({ mealData }) => {
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
        data={mealData}
        keyExtractor={(item) => item?.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
