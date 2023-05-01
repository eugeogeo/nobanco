import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Onboarding from '@pages/Onboarding';
import Register from '@pages/Register';
import SplashScreen from '@pages/SplashScreen';

const AuthRoutes = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{gestureEnabled: false}}/>
            <Stack.Screen name="Register" component={Register} options={{presentation: 'modal'}}/>
        </Stack.Navigator>
    );
}

export default AuthRoutes;
