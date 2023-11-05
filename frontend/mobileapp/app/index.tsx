import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function Page() {
  return (
      <View style={styles.container}>
        <Stack.Screen options={{title: "Lift n Learn", headerTitleAlign: 'center'}}/>
        <Link href='/search' asChild>
          <Pressable style={styles.gridItem}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: "#FFF6E0", textAlign: "center", fontSize: 25}}>Search</Text>
            </View>
          </Pressable>
        </Link>
        <Link href='/train/info' asChild>
          <Pressable style={styles.gridItem}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: "#FFF6E0", textAlign: "center", fontSize: 25}}>Calibrate</Text>
            </View>
          </Pressable>
        </Link>
        <Link href='/settings' asChild>
          <Pressable style={styles.gridItem}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: "#FFF6E0", textAlign: "center", fontSize: 25}}>Settings</Text>
            </View>
          </Pressable>
        </Link>
        <Link href='/about' asChild>
          <Pressable style={styles.gridItem}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: "#FFF6E0", textAlign: "center", fontSize: 25}}>About</Text>
            </View>
          </Pressable>
        </Link>
     </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange items in a row
    flexWrap: 'wrap', // Wrap items to the next row when needed
    justifyContent: "space-around"
  },
  gridItem: {
    width: '40%', // Each item takes 50% of the parent container's width
    height: 170, // Adjust the height as needed
    backgroundColor: '#61677A', // Example background color
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 50
  },
})