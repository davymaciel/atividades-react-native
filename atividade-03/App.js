import React from "react"; 
import { NavigationContainer } from "@react-navigation/native"; // Importa o container de navegação
import { createStackNavigator } from "@react-navigation/stack"; // Importa a função para criar uma navegação em pilha (Stack Navigation)
import AlbumDetails from "./screens/AlbumDetails"; // Importa a tela de detalhes do álbum
import ProducerDetails from "./screens/ProducerDetails"; // Importa a tela de detalhes do produtor

// Cria um Stack Navigator, que gerencia a navegação entre telas em forma de pilha
const Stack = createStackNavigator();

export default function App() {
  return (
    // O NavigationContainer é o componente principal que gerencia a navegação
    <NavigationContainer>
      
      {/* Define o navegador de pilha (Stack Navigator) */}
      <Stack.Navigator>

        {/* Define a tela AlbumDetails como parte da pilha */}
        <Stack.Screen 
          name="AlbumDetails" // Nome da rota
          component={AlbumDetails} // Componente que será renderizado para essa rota
          options={{ title: "Álbum" }} // Define o título da tela na barra de navegação
        />
        
        {/* Define a tela ProducerDetails na pilha */}
        <Stack.Screen 
          name="ProducerDetails" 
          component={ProducerDetails} 
          options={{ title: "Detalhes do Produtor" }} // Define o título da tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
