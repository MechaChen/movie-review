import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import RootDrawer from './router/rootDrawer';

export default function App() {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);

    const getFonts = () => Font.loadAsync({
        'Pridi': require('./assets/fonts/Pridi-Regular.ttf'),
        'Pridi-Bold': require('./assets/fonts/Pridi-Bold.ttf'),
    });

    return isFontsLoaded ?
        <RootDrawer />
        :
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setIsFontsLoaded(true)}
        />;
}
