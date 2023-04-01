import React from 'react';
import { styles } from './styles';
import { View, Image } from 'react-native';
import { MotiView } from 'moti';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation()

    const startApp = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <MotiView
                onDidAnimate={(opacity, finished, value) => { !value && startApp() }}
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