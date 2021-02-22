import React from 'react';
import {View,Text,FlatList,ScrollView} from 'react-native';
import Feed from '../../../assets/data/Feed';

import Post from '../../components/Post';

const SearchResult = (props) => {
    return(
            <FlatList
            data={Feed}
            renderItem={({item}) => <Post post={item} />}
             />
    );
};

export default SearchResult;