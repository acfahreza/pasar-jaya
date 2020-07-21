import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import { FormPengisianScreen, HomeScreen, AboutScreen, PengisianDetailScreen, SewaDetailScreen, SplashScreen } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Navigator initialRouteName="Sewa Detail"> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                headerTransparent: true,
                headerShown: false,
                headerTitleAlign: 'center',
            }} />
            <Stack.Screen name="Dashboard" component={HomeScreen} options={{
                headerTransparent: true,
                headerShown: false,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#00a24d', }
            }} />
            <Stack.Screen name="Sewa Detail" component={SewaDetailScreen} options={{
                headerTransparent: false,
                headerShown: true,
                headerTintColor: '#0D0F65',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'white' },
                // headerTitleStyle: {fontWeight: 'bold',}
            }} />
            <Stack.Screen name="Form Sewa" component={FormPengisianScreen} options={{
                headerTransparent: false,
                headerShown: true,
                headerTintColor: '#0D0F65',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'white', }
            }} />
            <Stack.Screen name="Form Detail" component={PengisianDetailScreen} options={{
                headerTransparent: false,
                headerShown: true,
                headerTintColor: '#0D0F65',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'white', }
            }} />
            <Stack.Screen name="About" component={AboutScreen} options={{
                headerTransparent: false,
                headerShown: false,
                headerTintColor: '#0D0F65',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'white', }
            }} />

        </Stack.Navigator>


    )
}

export default Router;