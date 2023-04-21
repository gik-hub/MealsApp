import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = () => {
  const renderCatItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData?.item?.title}
        color={itemData?.item?.color}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        key={(item) => item?.id}
        renderItem={renderCatItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
