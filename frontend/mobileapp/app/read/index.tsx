import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { getWikiBlocks } from '../../endpoints/backendapi';
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Page() {
  const [blockArr, setBlockArr] = useState<any>([]);
  const [index, setIndex] = useState<number>(0);
  const local = useLocalSearchParams();
  const item = local.subject as string;

  useEffect(() => {
    const getBlocks = async () => {
      const wps = await AsyncStorage.getItem("WPS");
      const interval = await AsyncStorage.getItem("interval")
      const response = await getWikiBlocks(item as string, wps === null ? "250" : String(Math.floor(Number(wps) * Number(interval))));
      setBlockArr(response.body);
    }

    getBlocks();
  }, [])

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{title: item, headerTitleAlign: 'center'}}/>
      <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 4}}>
        {blockArr.length !== 0 && 
          blockArr[index].map((item: any, i: number) => 
          <View key={i}>
            {item.section !== "" && <Text style={{fontSize: 34, fontWeight: 'bold'}}>{item.section}</Text>}
            {item.header !== "" && <Text style={{fontSize: 26, fontWeight: '500'}}>{item.header}</Text>}
            {item.text !== "" && <Text style={{fontSize: 22}}>{item.text}</Text>}
          </View>
        )}
        <View style={{marginVertical: 70}} />
      </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 0, backgroundColor: "#272829", width: "100%", height: "15%"}}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: "5%"}}>
          <Pressable style={styles.button} onPress={() => setIndex(Math.max(index - 1, 0))}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <AntDesign name="caretleft" size={40} color="black" />
            </View>
          </Pressable>
          <View style={styles.counter}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 20, color: "#272829"}}>{index+1}/{blockArr.length}</Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={() => setIndex(Math.min(index + 1, blockArr.length - 1))}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <AntDesign name="caretright" size={40} color="black" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D8D9DA", 
    width: "20%", 
    height: "50%",
    borderRadius: 25
  },
  counter: {
    backgroundColor: "#D8D9DA", 
    width: "20%", 
    height: "50%"
  }
})