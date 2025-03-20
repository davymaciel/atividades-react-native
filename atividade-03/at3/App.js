import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumDetails from "./screens/AlbumDetails";
import ProducerDetails from "./screens/ProducerDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AlbumDetails" component={AlbumDetails} options={{ title: "Álbum" }} />
        <Stack.Screen name="ProducerDetails" component={ProducerDetails} options={{ title: "Detalhes do Produtor" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
