import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList } from "react-native";

// Dados dos produtores do álbum GNX
const DATA = [
  {
    id: "1",
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

const Item = ({ title2, image2, text2 }) => (
  <View style={styles.item}>
    <Image source={{ uri: image2 }} style={styles.image2} />
    <View style={styles.infoContainer}>
      <Text style={styles.title2}>{title2}</Text>
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
          data={DATA}
          renderItem={({ item }) => <Item title2={item.title2} image2={item.image2} text2={item.text2} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
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
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
    flex: 1,
  }, 
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default App;
