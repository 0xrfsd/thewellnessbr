import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsNavigator from './SearchResultsNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Inicio"}
                component={HomeScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name={"SearchResults"}
                component={SearchResultsNavigator}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
};

export default Router;