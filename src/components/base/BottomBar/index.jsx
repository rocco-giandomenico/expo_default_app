import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const BottomBar = () => {
    const insets = useSafeAreaInsets();
    return <View style={{ paddingBottom: insets.bottom }} className="bg-surface" />;
};
