import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';

import DestinationSearch from '../screens/DesinationSearch';
import GuestScreen from '../screens/Guests';
import SearchResult from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search Destination"
                    component={DestinationSearch}
                    options={{ title: 'Destination Search' }}
                />
                <Stack.Screen
                    name="Guests"
                    component={GuestScreen}
                    options={{ title: 'How many people?' }}
                />
                                <Stack.Screen
                    name="Search Result"
                    component={SearchResult}
                    options={{ title: 'Trancoso' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;