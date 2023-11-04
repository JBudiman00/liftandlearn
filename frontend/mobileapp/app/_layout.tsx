import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: "black",
            },
            headerTintColor: "#FFF6E0",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFF6E0"
            }
        }}
    />);
}