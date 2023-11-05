import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { getWikiBlocks } from '../../endpoints/backendapi';
import { AntDesign } from '@expo/vector-icons'; 
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Page() {
  const [blockArr, setBlockArr] = useState<any>([]);
  const [index, setIndex] = useState<number>(0);
  const local = useLocalSearchParams();
  const item = local.subject as string;

  useEffect(() => {
    const test = async () => {
      // console.log(await AsyncStorage.getItem("WPS"));
    }
    test();
    getWikiBlocks(item as string, "25")
    .then((response) => {
      setBlockArr(response.body);
    })
  }, [])

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{title: item}}/>
      <View style={{flex: 1, padding: 4}}>
        <Text>
          {blockArr.length !== 0 && 
            blockArr[index].map((item: any) => 
            <Text style={{fontSize: 22}}>{item.text}Here</Text>
          )}
        </Text>
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