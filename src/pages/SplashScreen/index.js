import React from 'react';
import { styles } from './styles';
import { View, Image } from 'react-native';
import { MotiView } from 'moti';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'timing', duration: 2000, repeat: 2, repeatReverse: true
                }}>
                <Image
                    source={require('@images/SplashScreen/nobanco-brand3x.png')}
                    style={styles.image}
                />
            </MotiView>
        </View>

    );
}

export default SplashScreen;