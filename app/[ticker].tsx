import { StyleSheet, View, Pressable} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TickerScreen() {
  const { ticker } = useLocalSearchParams();


  return (
    <View
        style={{
          flexDirection: "row",
          paddingVertical: 25,
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={"white"}
            size={40}
          />
        </Pressable>
    </View>
  )
}
