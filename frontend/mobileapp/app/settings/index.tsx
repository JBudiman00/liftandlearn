import { Text, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Page() {
    const [value, setValue] = useState<string>();
    
    useEffect(() => {
        const getInterval = async () => {
            const interval = await AsyncStorage.getItem('interval');
            setValue(interval || "");
        }

        getInterval();
    }, [])

    const Options = (props: {interval: string, value: string}) => {
        return (
            <Pressable 
                onPress={async () => {
                    setValue(props.value);
                    await AsyncStorage.setItem('interval', props.value);
                }} 
                style={{backgroundColor: props.value == value ? "#272829" : "#61677A", height: 80, width: 80, borderRadius: 30, marginHorizontal: 20}
            }>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{color: "#FFF6E0", fontSize: 20, textAlign: 'center'}}>
                        {props.interval}        
                    </Text>
                </View>
            </Pressable>
        );
    }

    return(
        <View style={{flex: 1, alignItems: 'center'}}>
            <Stack.Screen options={{title: "Settings", headerTitleAlign: 'center'}}/>
            <View>
                <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20}}>Break Interval</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
                    <Options interval="1 min" value={"60"} />
                    <Options interval="2 min" value={"120"} />
                    <Options interval="3 min" value={"180"} />
                </View>
            </View>
        </View>
    );
}