import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/login';

const Stack = createStackNavigator();

const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }: any) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

const verticalAnimation = {
    cardStyleInterpolator: ({ current, layouts }: any) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateY: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.height, 0],
                        }),
                    },
                ],
            },
        };
    },
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MainMenu'
                screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
                detachInactiveScreens
            >
                <Stack.Screen name={"Login"} component={LoginScreen} options={{ ...horizontalAnimation }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;