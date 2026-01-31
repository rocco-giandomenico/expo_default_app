import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import '../global.css';

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center">
        <Text>hello World!...</Text>
      </View>
    </>
  );
}

export default App;

registerRootComponent(App);
