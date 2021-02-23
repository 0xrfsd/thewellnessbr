import React, { useState } from 'react';
import { View, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';

import places from '../../../assets/data/Feed';


const SearchResultsMaps = (props) => {

    const [selectedPlaceId, setSelectedPlaceID] = useState(null);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                style={{ width: '100%', height: '100%' }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.33279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {/* 
            <Marker coordinate={{ latitude: 28.3279822, longitude: -16.5124847 }}>
                <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10, borderColor: 'grey', borderWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>$300</Text>
                </View>
            </Marker> */}

                {places.map(place => (
                <CustomMarker 
                coordinate={place.coordinate} 
                price={place.newPrice}
                isSelected={place.id === selectedPlaceId}
                onPress={() => setSelectedPlaceID(place.id)}
                />)
                )}

                {/* {places.map(place => {
                    <CustomMarker
                    coordinate={place.coordinate}
                    price={place.newPrice}
                    isSelected={place.id === selectedPlaceId}
                    onPress={() => setSelectedPlaceID(place.id)} />
                })} */}
            </MapView>
        </View>
    );
};

export default SearchResultsMaps;