import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link, Stack } from 'expo-router';
import SearchBar from '../../components/formik';

export default function Page() {
  const [result, setResult] = useState<Array<any>>([]);

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{title: "Search"}}/>
      <View style={{flex: 1}}>
        <SearchBar setResult={setResult}/>
        <ScrollView contentContainerStyle={{alignItems: "center"}}>
          {result.length !== 0 && result[1].length != 0 && result[1].map((item: string) => {
            return (
              <Link key={item} href={{pathname: '/read', params: {subject: item}}} asChild>
                <Pressable style={styles.container}>
                  <View style={{flex: 1, justifyContent: "center"}}>
                    <Text style={{textAlign: "center", fontSize: 20}}>{item}</Text>
                  </View>
                </Pressable>
              </Link>
            );
          })}
          {result.length !== 0 && result[1].length == 0 && 
            <View>
              <Text>No results found</Text>
            </View>
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#61677A",
    width: "80%",
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
  }
})