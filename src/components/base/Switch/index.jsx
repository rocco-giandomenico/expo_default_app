import { View, Pressable } from 'react-native';

export const Switch = ({ onValueChange, value }) => {
    return (
        <Pressable onPress={onValueChange}>
            {({ pressed }) => (
                <View
                    className={`h-[32] w-[52] justify-center rounded-full border-2 ${value ? 'items-start border-outline bg-surfaceContainerHighest p-[6]' : 'items-end border-primary bg-primary p-[2]'}`}>
                    <View
                        className={`aspect-square scale-[1] rounded-full ${value ? 'h-[16] bg-outline' : 'h-[24] bg-onPrimary'} ${pressed && (value ? 'scale-[1.75]' : 'scale-[1.1666]')}`}></View>
                </View>
            )}
        </Pressable>
    );
};
