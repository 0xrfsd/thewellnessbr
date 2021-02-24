import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Fontisto, FontAwesome5 } from "@expo/vector-icons";
import ExploreNavigator from './ExploreNavigator';
import PostPage from '../screens/PostScreen';

const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#f15454",
				safeAreaInsets: {
					bottom: 0,
					top: 0,
				},

				style: {
					height: 65,
					backgroundColor: "#333",
					paddingTop: 10,
					paddingBottom: 15,
				},
			}}
		>
			<Tab.Screen
				name="Explore"
				component={ExploreNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="search" size={25} color={color} />
					),
				}}
			/>
            			<Tab.Screen
				name="Explorea"
				component={PostPage}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="search" size={25} color={color} />
					),
				}}
			/>
            			<Tab.Screen
				name="Exploreb"
				component={PostPage}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="search" size={25} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;