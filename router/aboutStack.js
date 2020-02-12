import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
                    headerTitleContainerStyle: { width: '100%', position: 'relative' },
                }}
            />
        </Stack.Navigator>
    );
}
