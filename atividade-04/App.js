import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando as telas
import Home from "./screens/Home";
import Feedback from "./screens/Feedback";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "GNX" }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ title: "Avaliação" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
