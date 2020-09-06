import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './screens/Main';
import Cart from './screens/Cart';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        style: {
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen name="Movies" component={Main} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
