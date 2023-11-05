import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; 


export default function Page() {
    return(
        <View style={{flex: 1, alignItems: "center", paddingHorizontal: 20, marginTop: 60}}>
            <Stack.Screen options={{title: "About Us", headerTitleAlign: 'center'}}/>
            <AntDesign name="dingding" size={150} color="black" />
            <Text style={{textAlign: "center", fontSize: 30}}>Welcome to Lift n Learn!</Text>
            <Text style={{textAlign: "center", fontSize: 20}}>
                Lift n Learn is intended for all gym goers who seek to make the most use of their time.
                We recorgnize that taking care of one's physical health is an important aspect to a happy
                and healthy lifestyle. However, going to the gym can often be a timeconsuming process. 
                Lift n Learn has provided a platform with resources from the world's greatest encyclopedia,
                Wikipedia, and allows people to learn in between their workout sets. We hope to provide 
                an educational experience for all those that are curious and seek to learn more. 
                Thanks for taking a look at our and enjoy!
            </Text>
            <Text style={{textAlign: "center", fontSize: 20, paddingTop: 20}}>
                -Nathan Budiman & Logan Snelling
            </Text>
        </View>
    );
}