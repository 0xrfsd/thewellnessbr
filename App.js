import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/Home';
import PostComponent from './src/components/Post';
import DestinationSearchScreen from './src/screens/DesinationSearch';

import 'react-native-gesture-handler';

import feed from './assets/data/Feed';
import SearchResult from './src/screens/SearchResults';
import GuestScreen from './src/screens/Guests';

import Router from './src/navigation/Router';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
