import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import { useFonts } from 'expo-font';
import {useNavigation} from '@react-navigation/native';

import {Container,Wrapper} from './styles';

const HomeScreen = (props) => {

    const navigation = useNavigation();

    const [loaded] = useFonts({
        BebasNeue: require('../../../assets/fonts/BebasNeue.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

    return(
        <Container>

        {/* Search Button */}   
        <Pressable 
        onPress={() => navigation.navigate('Search Destination')}
        style={{ marginTop: 40, widht: '100%', height: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
    <Text style={{ color: '#333', fontFamily: 'BebasNeue', fontSize: 22 }}>Inicie uma experiência agora!</Text>
        </Pressable>

        <ImageBackground resizeMode="cover"
source={require('../../../assets/images/wallpaper.jpg')}
        style={{ justifyContent: 'center', width: '100%', height: 300 }}>

        <View style={{ justifyContent: 'center', padding: 20, paddingTop: 100 }}>
        <Text style={{ fontFamily: 'BebasNeue', fontSize: 40, color: '#fff' }}>GO Bahía!</Text>

<Pressable 
style={{ height: 40, width: 200, backgroundColor: '#cd5c5c', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
onPress={() => navigation.navigate('Search Destination')}>
    <Text style={{ color: '#fff', fontFamily: 'BebasNeue', fontSize: 22 }}>Explore a new universe.</Text>
</Pressable>
        </View>

        </ImageBackground>

        </Container>
    );
};

export default HomeScreen;