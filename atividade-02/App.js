import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList } from "react-native";

// Dados dos produtores do álbum GNX
const DATA = [    // declarando uma constante chamada DATA, que armazena um array de objetos contendo informações sobre os produtores do álbum. (Esse array é usado como fonte de dados para a lista de produtores)
  {
    id: "1",    // Identificador único do produtor
    title2: "Jack Antonoff",
    image2: "https://hips.hearstapps.com/hmg-prod/images/jack-antonoff-attends-the-65th-grammy-awards-on-february-05-news-photo-1708541671.jpg?crop=0.481xw:0.721xh;0.260xw,0&resize=1200:*",
    text2: ["Track: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12"]
  },
  {
    id: "2",
    title2: "Sounwave",
    image2: "https://i.scdn.co/image/ab677762000056b84b6bdc5e61d8e030a8ca7ce0",
    text2: ["Track: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"]
  },
  {
    id: "3",
    title2: "Mustard",
    image2: "https://blackenterprise-prod.b-cdn.net/wp-content/blogs.dir/1/files/2025/02/DJ_Mustard_2019_by_Glenn_Francis-1920x1465.jpg",
    text2: ["Track: 5, 7"]
  },
  {
    id: "4",
    title2: "Craig Balmoris",
    image2: "https://i.discogs.com/6jgh6n8vKEj2fdAYAEgNrrxRUE8TKFXZcFsptRiHUlU/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE2Mzg3/OTItMTY5NzY0MTYx/OC03OTQxLnBuZw.jpeg",
    text2: ["Track: 1, 4"]
  },
  {
    id: "5",
    title2: "Kamasi Washington",
    image2: "https://i.scdn.co/image/ab6761610000e5ebefa4712d1cdf27fd2869a396",
    text2: ["Track: 5, 7"]
  }
];

// Componente para exibir cada produtor
const Item = ({ title2, image2, text2 }) => (
  <View style={styles.item}>    {/* Container do item */}
    <Image source={{ uri: image2 }} style={styles.image2} />    {/* Exibe a imagem do produtor */}
    <View style={styles.infoContainer}>   {/* Container do texto */}
      <Text style={styles.title2}>{title2}</Text>   {/* Exibe o nome do produtor */}
      {text2.map((line, index) => (
        <Text key={index} style={styles.text2}>{line}</Text>
      ))}
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Álbum em destaque</Text>

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

        <Text style={styles.producersTitle}>Produção</Text>

        <FlatList
          data={DATA}   // Define os dados que serão exibidos na lista. No seu caso, DATA é um array contendo informações dos produtores musicais.
          renderItem={({ item }) => <Item title2={item.title2} image2={item.image2} text2={item.text2} />}    // Define como cada item da lista será renderizado.
          keyExtractor={(item) => item.id}    // Define uma chave única (key) para cada item da lista.
          contentContainerStyle={styles.flatListContainer}   // A propriedade contentContainerStyle no FlatList é usada para aplicar estilos ao conteúdo interno da lista, ou seja, afeta a área que contém os itens, mas não o próprio FlatList.
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  producersTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    width: 320,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 10,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFF',
  },
  artist: {
    fontSize: 16,
    color: '#BBB',
    fontWeight: '400',
  },
  info: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400',
  },
  item: {
    flexDirection: 'row', // Organiza os elementos dentro do item em linha (horizontalmente)
    backgroundColor: '#1E1E1E',
    padding: 10, // Adiciona um espaçamento interno de 10 pixels ao redor do conteúdo
    marginBottom: 10, // Adiciona um espaçamento de 10 pixels abaixo de cada item
    borderRadius: 10,
    alignItems: 'center', // Alinha verticalmente ao centro
    width: 300,
    elevation: 5, // Adiciona um efeito de sombra no Android para dar profundidade
    shadowColor: '#000', // Define a cor da sombra como preta (iOS e Android)
    shadowOffset: { width: 0, height: 2 }, // Define o deslocamento da sombra (2px para baixo)
    shadowOpacity: 0.2, // Define a opacidade da sombra em 20%
    shadowRadius: 4, // Define o raio de difusão da sombra para suavizá-la
  },
  title2: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text2: {
    fontSize: 14,
    color: '#BBB',
  },
  infoContainer: {
    flex: 1,    //garante que os textos dentro dos itens da lista ocupem o espaço adequado.
  }, 
  flatListContainer: {
    paddingBottom: 20,    // Adiciona um espaço extra na parte inferior da lista, evitando que o último item fique colado no final da tela.
  },
});

export default App;

// COMENTÁRIOS
// O FlatList é um componente altamente eficiente para renderizar listas de dados no React Native. 
// Ele é otimizado para lidar com grandes quantidades de itens, renderizando apenas os elementos visíveis na tela, o que melhora a performance do aplicativo.

// O FlatList recebe um array (DATA) e itera sobre ele.
// Para cada elemento do array, ele renderiza um componente Item, passando os dados necessários.
// Ele só carrega na tela os itens visíveis, otimizando o uso de memória e melhorando o desempenho.

// style → Aplica estilos ao FlatList inteiro (incluindo bordas, fundo, tamanho etc.).
// contentContainerStyle → Aplica estilos somente ao conteúdo interno da lista.
