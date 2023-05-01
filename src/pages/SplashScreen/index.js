import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { Image, View } from 'react-native';
import { styles } from './styles';

const SplashScreen = () => {

    const navigation = useNavigation()

    const startApp = () => {
        // true = hook de autenticacao
        const nextScreen = false ? 'Home' : 'Onboarding';
        navigation.navigate(nextScreen);
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