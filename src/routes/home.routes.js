import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from "@pages/Home";
import SplashScreen from "@pages/SplashScreen";


const HomeRoutes = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} options={{ animation: 'fade' }} />
        </Stack.Navigator>
    );
}

export default HomeRoutes;
