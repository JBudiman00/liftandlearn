import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Stack } from 'expo-router';

export default function Page() {
  return (
      <View style={{flex: 1}}>
        <Stack.Screen options={{title: "Home"}}/>
        <View style={styles.container}>
          <Card name="Search" />
          <Card name="Train" />
        </View>
      </View>
  );
}

const Card = (props: {name: string}) => {
  return (
    <View style={styles.card}>
      <View style={{flex: 1, justifyContent: "center"}}>
        <Link href={"/".concat(props.name.toLowerCase())} asChild>
          <Pressable>
            <Text style={{color: "#FFF6E0", textAlign: "center", fontSize: 25}}>{props.name}</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#61677A",
    width: "40%",
    height: "15%",
  },
  container: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "space-around",
    marginVertical: 20
  }
})