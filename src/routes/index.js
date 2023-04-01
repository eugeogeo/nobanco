import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Routes
import HomeRoutes from './home.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    // true = hook de autenticacao que sera criado
    return (
        <NavigationContainer>
            {true ? <HomeRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );

}

export default Routes;

