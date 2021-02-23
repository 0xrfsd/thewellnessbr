import React, { useState } from 'react';
import { View, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';

import PostCarouselItem from '../../components/PostCarouselItem';

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

{places.map(place => (
                    <CustomMarker
                        key={place.id}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceID(place.id)}
                    />)
                )}

            </MapView>

            <View style={{ position: 'absolute', bottom: 10 }}>
                    <PostCarouselItem post={places[0]} />
            </View>

        </View>
    );
};

export default SearchResultsMaps;