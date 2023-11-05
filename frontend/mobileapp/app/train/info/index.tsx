import { Stack, Link } from 'expo-router';
import { View, Text, Pressable } from "react-native";


export default function Page() {
    return (
        <View style={{flex: 1}}>
            <Stack.Screen options={{title: "Training Tutorial"}}/>
            <View style={{paddingHorizontal: 20, paddingTop: 20}}>
                <Text style={{textAlign: "center", fontSize: 30}}>Welcome to the training module!</Text>
                <Text style={{textAlign: "center", fontSize: 20}}>
                    In this module, we'll assess your current reading speed. To determine how large your learning chunks
                    will be while working out, we have to understand how fast you read. When you're ready, please press 
                    the 'Continue' button. It will move you onto a screen where we have a paragraph. Please read that paragraph
                    at a comfortable speed and click the 'finish' button once you're complete. Our system will be able to 
                    calibrate the learning chunks and tailor a learning experience designed just for you. Enjoy!
                </Text>
                <View style={{height: "40%", alignItems: 'center'}}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Link href="/train">
                            <View style={{width: 100, backgroundColor: "#24A0ED", height: 60, borderRadius: 40}}>
                                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                
                                    <Pressable>
                                        <Text style={{fontSize: 20, color: "#FFF6E0"}}>Continue</Text>
                                    </Pressable>
                                
                                </View>
                            </View>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}