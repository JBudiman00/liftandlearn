import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start on your app Testinasdf!</Text>
        <StatusBar style="auto" />
        <Button title="Solid" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
