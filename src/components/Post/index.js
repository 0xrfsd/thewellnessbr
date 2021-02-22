import React from 'react';
import {View, Text, Image} from 'react-native';

import {} from './styles';

const Post = (props) => {

    const data = props.post;

    return(
        <View style={{ margin: 20 }}>

        {/* Image */}
        <Image 
        style={{ width: '100%', height: 'auto', aspectRatio: 3/2, borderRadius: 10 }}
        source={{uri: data.image}} />
        
        <Text style={{ fontSize: 18, color: 'grey', marginVertical: 10 }}>{data.bed} bed {data.bedroom} bedroom</Text>
            
        {/* Type & Description */}
        <Text style={{ fontSize: 18, color: '#333', lineHeight: 25 }}>{data.type}. {data.title}</Text>
        
        {/* Old Price & New Price */}
        <Text style={{ marginVertical: 10, flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, color: '#333', textDecorationLine: 'line-through' }}>${data.oldPrice} </Text>
        <Text style={{ fontSize: 18, color: '#333', fontWeight: 'bold' }}>${data.price} / night</Text>
        </Text>
        
        {/* Total Price */}
        <Text style={{ fontSize: 18, color: '#333', textDecorationLine: 'underline' }}>${data.totalPrice} total</Text>
        
                </View>
    );
};

export default Post;