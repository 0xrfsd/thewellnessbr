import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import ExploreNavigator from './ExploreNavigator';
import SearchNavigator from './SearchResultsNavigator';

import DestinationSearch from '../screens/DesinationSearch';
import GuestScreen from '../screens/Guests';
import SearchResult from '../screens/SearchResults';

import PostScreen from '../components/Post';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SearchDestination"
                    component={DestinationSearch}
                    options={{ title: 'Qual será o seu destino?' }}
                />
                <Stack.Screen
                    name="Guests"
                    component={GuestScreen}
                    options={{ title: 'Quantas pessoas?' }}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SearchResults"
                    component={SearchNavigator}
                    options={{ title: 'Propríedades Disponíveis' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;