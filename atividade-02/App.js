import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";

const App = () => {
  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>INFORMAÇÕES</Text>

    <View style={styles.card}>
      <Image
        source={{ uri: 'https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/500x500.jpg' }}
        style={styles.image}
      />
      <Text style={styles.albumTitle}>GNX</Text>
      <Text style={styles.artist}>Kendrick Lamar</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.info}>GNX é o sexto álbum de estúdio do rapper americano Kendrick Lamar. Lançado de surpresa pela PGLang e Interscope Records em 22 de novembro de 2024, o álbum conta com participações especiais de SZA, Dody6, Roddy Ricch, e entre outras.</Text>
    </View>
    <Text style={styles.title}>PRODUÇÃO</Text>
    

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  safeArea: {       // Estilo para o SafeAreaView, garantindo que ocupe toda a tela e tenha fundo escuro
    flex: 1,      // Ocupa todo o espaço disponível
    backgroundColor: '#121212',
  },
  container: {       // Estilos para o container que envolve os cards
    alignItems: 'center',
    paddingVertical: 20,    // Adiciona espaçamento no topo e na base
    backgroundColor: '#121212',
    flexGrow: 1,     // Permite que o conteúdo cresça dentro do ScrollView
  },
  title: {        // Estilo do título principal
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  card: {       // Estilo para os cards individuais
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center', 
    marginBottom: 20,   // Espaçamento entre os cards

    // Sombra para dar efeito de elevação no Android e iOS
    elevation: 8, // sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 3 },   // Direção da sombra
    shadowOpacity: 0.25,    // Opacidade da sombra
    shadowRadius: 5,    // Intensidade da sombra
    width: 320,   // Largura fixa para manter o tamanho uniforme
  },
  image: {      // Estilo das imagens dos álbuns
    width: 280,
    height: 280,
    borderRadius: 10,
  },
  albumTitle: {     // Estilo para o título do álbum
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,    // Espaçamento superior
    color: '#FFF',
  },
  artist: {       // Estilo para o nome do artista
    fontSize: 16,
    color: '#BBB',
    fontWeight: '400',
  },
  info:{
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
  }
})

export default App;