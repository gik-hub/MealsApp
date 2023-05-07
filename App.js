import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import IconButton from './components/IconButton';
import FavouritesContextProvider from './store/context/favourite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351501' },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351501',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351501',
        drawerActiveBackgroundColor: '#856856',
      }}
    >
      <Drawer.Screen
        name='MealsCategories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',

          drawerIcon: ({ color, size }) => (
            <IconButton icon='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favourite'
        component={FavouriteScreen}
        options={{
          title: 'Favourite Categories',
          drawerIcon: ({ color, size }) => (
            <IconButton icon='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: { backgroundColor: '#351501' },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}
          >
            {/* <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'Meal Categories',
            }}
          /> */}
            <Stack.Screen
              name='drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='mealsOverview'
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId
              //   return {title: catId};
              // }}
            />
            <Stack.Screen
              name='mealDetails'
              component={MealDetailsScreen}
              options={{
                title: 'About the meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
