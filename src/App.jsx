import '../global.css';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { userTheme } from '@/constants/colors';
import { BottomBar } from '@/components/base/BottomBar';
import { Switch } from '@/components/base/Switch';

function App() {
    // GESTIONE TEMA ----------------------------------------------------------

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            return next;
        });
    };

    // RETURN -----------------------------------------------------------------

    return (
        <>
            <StatusBar style={theme === 'light' ? 'dark' : 'light'} />

            <SafeAreaProvider>
                <SafeAreaView style={userTheme['light']} className="flex-1" edges={[]}>
                    <View className="flex-1 items-center justify-center gap-10 bg-surface">
                        <Text className="text-onSurface">Activate dark mode</Text>
                        <Switch onValueChange={toggleTheme} value={theme === 'light'} />
                    </View>
                </SafeAreaView>

                <BottomBar />
            </SafeAreaProvider>
        </>
    );
}

export default App;

registerRootComponent(App);
