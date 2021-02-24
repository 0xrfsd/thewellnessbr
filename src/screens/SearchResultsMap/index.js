import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';

import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/Feed';

const SearchResultsMaps = (props) => {

    const width = useWindowDimensions().width;

    const [selectedPlaceId, setSelectedPlaceID] = useState(null);

    const flatlist = useRef();

    const map = useRef();

    const viewConfig = useRef({itemVisiblePercentThreshold: 70});

    const onViewChanged = useRef( ({viewableItems}) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceID(selectedPlace.id)
        }
    } )

    useEffect( () => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index: index })
        
        const selectedPlace = places[index];

        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }

        map.current.animateToRegion(region);

    }, [selectedPlaceId] )

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
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
                    <FlatList 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    ref={flatlist}
                    data={places}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    />
                    {/* <PostCarouselItem post={places[0]} /> */}
            </View>

        </View>
    );
};

export default SearchResultsMaps;