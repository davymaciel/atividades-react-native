import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>        {/*SafeAreaView garante que o conteúdo fique dentro das áreas seguras da tela (evitando sobreposição com notch, status bar, etc.)*/}
         <ScrollView contentContainerStyle={styles.container}>       {/*ScrollView permite rolagem do conteúdo, caso haja muitos elementos na tela */}
          <Text style={styles.title}>Álbuns em destaque</Text>    {/* style={styles.title} referência aos estilos definidos no objeto styles criado com StyleSheet.create(). */}

          {/* Card 1 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/500x500.jpg' }}
              style={styles.image}
            />
            <Text style={styles.albumTitle}>GNX</Text>
            <Text style={styles.artist}>Kendrick Lamar</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/6/6a/PartyNextDoor_and_Drake_-_Some_Sexy_Songs_4_U.png' }}
              style={styles.image}
            />
            <Text style={styles.albumTitle}>$ome $exy $ongs 4 U</Text>
            <Text style={styles.artist}>PartyNextDoor & Drake</Text>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://i.scdn.co/image/ab67616d0000b2737e7f1d0bdb2bb5a2afc4fb25' }}
              style={styles.image}
            />
            <Text style={styles.albumTitle}>Hurry Up Tomorrow</Text>
            <Text style={styles.artist}>The Weeknd</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({      // Definição de estilos usando StyleSheet.create para otimizar performance, padrão de estilização do react native
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
  }
});

export default App;
// Essas linhas, como styles.safeArea, styles.container, styles.card, etc., são referências aos estilos definidos no objeto styles criado com StyleSheet.create().
// No React Native, a estilização não é feita com classes CSS (className="container" no React Web), mas sim passando um objeto de estilo dentro do atributo style.
// O StyleSheet.create() ajuda a organizar e otimizar esses estilos.
