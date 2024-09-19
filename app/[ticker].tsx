import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TickerScreen() {
  const { ticker } = useLocalSearchParams();


  return (
    <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={"white"}
            size={40}
          />
      </Pressable>
        
          <MaterialCommunityIcons
            name={
              likedStocks.includes(ticker as string) ? "star" : "star-outline"
            }
            color={"white"}
            size={40}
          />
          )
