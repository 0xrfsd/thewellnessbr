import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsNavigator = (props) => {
    return(
        <Tab.Navigator tabBarOptions={{ 
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
         }}>
            <Tab.Screen
            name={"List"}
            component={SearchResults}/>
                        <Tab.Screen
            name={"Map"}
            component={SearchResultsMap}/>
        </Tab.Navigator>
    );
};

export default SearchResultsNavigator;