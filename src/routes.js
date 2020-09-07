import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Movies from './screens/Movies';
import Cart from './screens/Cart';
import Search from './screens/Search';

import Details from './screens/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MoviesStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Movies" component={Movies} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: {
          paddingBottom: Platform.OS === 'android' ? 5 : 20,
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#999',
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommIcon
              name={focused ? 'movie-open' : 'movie-open-outline'}
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommIcon
              name={focused ? 'movie-search' : 'movie-search-outline'}
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommIcon
              name={focused ? 'cart' : 'cart-outline'}
              size={18}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
