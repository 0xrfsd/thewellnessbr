import Auth from '@aws-amplify/auth';
import React from 'react';
import {View, Text, Pressable} from 'react-native'

const ProfileScreen = () => {
    
    const logout = () => {
        Auth.signOut();
        // Auth.signIn();
        // Auth.signUp();
    }
    
    return(
        <View style={{ paddingTop: 500, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable 
        onPress={logout}
        style={{ width: '90%', height: 50, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 10 }}>
            <Text>
            Log Out
            </Text>
        </Pressable>
        </View>
    )
}

export default ProfileScreen;