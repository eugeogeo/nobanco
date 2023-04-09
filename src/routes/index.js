import { NavigationContainer } from '@react-navigation/native';

// Routes
import AuthRoutes from './auth.routes';
import HomeRoutes from './home.routes';

const Routes = () => {
    // true = hook de autenticacao que sera criado
    return (
        <NavigationContainer>
            {true ? <HomeRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );

}

export default Routes;

