import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/login';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SemesterGradeScreen from '../screens/SemesterGrades';
import SubjectGradeScreen from '../screens/SubjectGrades';
import TranscriptScreen from '../screens/Transcripts';
import ChangePasswordScreen from '../screens/ChangePassword';

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
                <Stack.Screen name={"Home"} component={HomeScreen}></Stack.Screen>
                <Stack.Screen name={"Profile"} component={ProfileScreen} options={{ ...horizontalAnimation }}></Stack.Screen>
                <Stack.Screen name={"SemesterGrades"} component={SemesterGradeScreen} options={{ ...horizontalAnimation }}></Stack.Screen>
                <Stack.Screen name={"SubjectGrades"} component={SubjectGradeScreen} options={{ ...horizontalAnimation }}></Stack.Screen>
                <Stack.Screen name={"Transcripts"} component={TranscriptScreen} options={{ ...horizontalAnimation }}></Stack.Screen>
                <Stack.Screen name={"ChangePassword"} component={ChangePasswordScreen} options={{ ...verticalAnimation }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;