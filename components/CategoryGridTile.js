import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles?.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles?.button,
          pressed ? styles?.buttonPressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles?.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // IOS elevation / box shadow
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
