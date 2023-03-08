import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ShotTracker from './ShotTracker';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false, gestureEnabled: false  }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ShotTracker" component={ShotTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
