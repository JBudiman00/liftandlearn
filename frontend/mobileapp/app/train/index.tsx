import { View, Text, Pressable, StyleSheet, ScrollView, Modal } from "react-native";
import { Stack, Link } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Page() {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (startTime > endTime){
      const intervalId = setInterval(() => {setTimer(timer + 1)}, 1000);
      return () => clearInterval(intervalId);
    }
  })

  const FinishModal = (props: {visible: boolean, setVisible: any, finishTime: any}) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{width: "70%", height: "30%", backgroundColor: '#61677A', borderRadius: 50}}>
          <Text style={{textAlign: 'center', color: "#FFF6E0", fontSize: 30, paddingTop: 30}}>Training Summary</Text>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', color: "#FFF6E0", fontSize: 24}}>Time: {props.finishTime}</Text>
              <Text style={{textAlign: 'center', color: "#FFF6E0", fontSize: 24}}>Average WPS: {(98 / props.finishTime).toFixed(2)}</Text>
              <Text style={{textAlign: 'center', color: "#FFF6E0", fontSize: 24, paddingTop: 10}}>Nice Job!</Text>
              <Link href="/" asChild>
                <Pressable>
                  <Text style={{textAlign: 'center', fontSize: 24, opacity: 0.4, paddingTop: 20}}>Go home</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FinishModal visible={modalVisible} setVisible={setModalVisible} finishTime={(endTime - startTime) / 1000}/>
      <Stack.Screen options={{title: "Training"}}/>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text style={{fontSize: 24}}>
            An application programming interface (API) is a way for two or more computer programs to communicate with each other. 
            It is a type of software interface, offering a service to other pieces of software.[1] 
            A document or standard that describes how to build or use such a connection or interface is called an API specification. 
            A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation. 
            Whereas a system's user interface dictates how its end-users interact with the system in question, 
            its API dictates how to write code that takes advantage of that system's capabilities.
          </Text>
        </ScrollView>
      </View>
        <View style={{position: 'absolute', bottom: 0, backgroundColor: "#272829", width: "100%", height: "15%"}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: "5%"}}>
            <Pressable 
              style={styles.counter} 
              onPress={() => {
                setEndTime(new Date().getTime())
                setModalVisible(true);
                AsyncStorage.setItem("WPS", String((new Date().getTime() - startTime) / 1000));
              }}
              >
              <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 20, color: "#272829"}}>Finish</Text>
              </View>
            </Pressable>
            <View style={styles.counter}>
              <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 20, color: "#272829"}}>
                  {endTime > startTime ? ((endTime - startTime) / 1000) : timer}
                  </Text>
              </View>
            </View>
            <Pressable 
              style={styles.counter} 
              onPress={() => {
                setStartTime(new Date().getTime())
                setTimer(0);
              }}
            >
              <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 20, color: "#272829"}}>Restart</Text>
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