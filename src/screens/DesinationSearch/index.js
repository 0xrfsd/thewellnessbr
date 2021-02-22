import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import search from '../../../assets/data/search';
import styles from './styles';
import {Entypo} from "@expo/vector-icons"
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState("")

    const navigation = useNavigation()

    return (
        <View style={{ }}>
            {/* Google Autocomplete... */}
            {/* <TextInput style={{ height: 40, width: '100%', backgroundColor: 'transparent'}} placeholder="Where are you going?" value={inputText} onChangeText={setInputText}/> */}

            <FlatList 
                data={search}
                renderItem={({item}) => (
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate("Guests")}>
                        <View style={{ backgroundColor: 'transparent', borderRadius: 5, width: 50, justifyContent: 'center', alignItems: 'center', height: 50, margin: 10 }}>
                            <Entypo name="location-pin" size={33}/>
                        </View>

                        <Text style={{ fontSize: 20 }}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen