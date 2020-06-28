import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DashboardClient from '../pages/DashboardClient';
import ProfileClient from '../pages/ProfileClient';

const App = createStackNavigator();

const AppRoutes = () => {
  return(
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="DashboardClient" component={DashboardClient} />
        <App.Screen name="ProfileClient" component={ProfileClient} />
      </App.Navigator>
    </NavigationContainer>
  )
  };

export default AppRoutes;
