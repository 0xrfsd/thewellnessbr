import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {} from './styles';

const Post = (props) => {

    const navigation = useNavigation();

    const post = props.post;

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id})
    }

    return(
        <Pressable onPress={goToPostPage} style={{ margin: 20 }}>

        {/* Image */}
        <Image 
        style={{ width: '100%', height: 'auto', aspectRatio: 3/2, borderRadius: 10 }}
        source={{uri: post.image}} />
        
        <Text style={{ fontSize: 18, color: 'grey', marginVertical: 10 }}>{post.bed} bed {post.bedroom} bedroom</Text>
            
        {/* Type & Description */}
        <Text style={{ fontSize: 18, color: '#333', lineHeight: 25 }}>{post.type}. {post.title}</Text>
        
        {/* Old Price & New Price */}
        <Text style={{ marginVertical: 10, flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, color: '#333', textDecorationLine: 'line-through' }}>${post.oldPrice} </Text>
        <Text style={{ fontSize: 18, color: '#333', fontWeight: 'bold' }}> ${post.newPrice} / night</Text>
        </Text>
        
        {/* Total Price */}
        <Text style={{ fontSize: 18, color: '#333', textDecorationLine: 'underline' }}>${post.totalPrice} total</Text>
        
                </Pressable>
    );
};

export default Post;