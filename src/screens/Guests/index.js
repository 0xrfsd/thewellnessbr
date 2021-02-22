import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import styles from './styles';

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)  
    const [infants, setInfants] = useState(0)  

    const navigation = useNavigation();

    return (
        <View style={{ height: '100%' }}>
            <View style={styles.row}>

                <View> 
                    <Text style={{fontWeight: "bold"}}>Adults</Text>
                    <Text style={{color: "#8d8d8d"}}>Ages 13 or above</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setAdults(Math.max(0, adults -1))}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>
                        {adults}
                    </Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setAdults(adults +1)}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
            </View>


            <View style={styles.row}>

                <View> 
                    <Text style={{fontWeight: "bold"}}>Children</Text>
                    <Text style={{color: "#8d8d8d"}}>Ages 2 - 12</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setChildren(Math.max(0, children -1))}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>
                        {children}
                    </Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setChildren(children +1)}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>

                <View> 
                    <Text style={{fontWeight: "bold"}}>Infants</Text>
                    <Text style={{color: "#8d8d8d"}}>Under 2</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setInfants(Math.max(0, infants -1))}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>
                        {infants}
                    </Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setInfants(infants +1)}
                    >
                        <Text style={{color: "#474747", fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
            </View>
<View style={{ margin: 20, marginTop: 'auto' }}>
<Pressable 
        style={{ marginTop: 'auto', borderRadius: 5, height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cd5c5c' }}
        onPress={() => navigation.navigate('SearchResults')}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', fontFamily: 'BebasNeue' }}>Search</Text>
        </Pressable>
</View>
        </View>
    )
}

export default GuestsScreen