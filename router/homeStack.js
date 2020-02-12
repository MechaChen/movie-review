import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import ReviewDetailsScreen from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ 
                    headerTitle: () => <Header navigation={navigation} title="GameZone" />,
                    headerTitleContainerStyle: { width: '100%', position: 'relative' },
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetailsScreen}
                options={{ title : 'Review Details' }}
            />
        </Stack.Navigator>
    );
}
