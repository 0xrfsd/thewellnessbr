import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import Router from './src/navigation/Router';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
Auth.configure(config);

function App() {
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

export default withAuthenticator(App);