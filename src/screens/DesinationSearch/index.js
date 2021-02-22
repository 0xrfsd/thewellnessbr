import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import { } from './styles';

import searchResults from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = (props) => {

    const navigation = useNavigation();

    const [inputText, setInputText] = useState('');

    return (
        <View style={{ padding: 20, height: '100%' }}>

        <TextInput
        value={inputText}
        onChangeText={setInputText}
        style={{ width: '100%', height: 50, backgroundColor: 'transparent', borderRadius: 5 }}
        placeholder="Where are you going?"
        />

        {/* FlatList not working, not fetching data and not displaying data fix it! */}

        {/* <FlatList 
        data={searchResults}
        renderItem={({item}) => {
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name="location-pin" size={24} color="black" />
                <Text style={{ }}>{item.description}</Text>
                </View>
        }}/> */}

<Pressable 
        style={{ marginTop: 'auto', borderRadius: 5, height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cd5c5c' }}
        onPress={() => navigation.navigate('Guests')}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', fontFamily: 'BebasNeue' }}>Search</Text>
        </Pressable>

        </View>
    );
};

export default DestinationSearch;