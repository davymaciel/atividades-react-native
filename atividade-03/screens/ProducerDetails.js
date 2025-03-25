import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, FlatList, ScrollView } from "react-native";

const ProducerDetails = ({ route }) => {
  const { producer } = route.params;

  const productions = [
    {
      id: "1",
      title: "Melodrama (Lorde)",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png",
      tracks: ["Green Light", "Sober", "Homemade Dynamite"],
    },
    {
      id: "2",
      title: "Norman Fucking Rockwell! (Lana Del Rey)",
      image: "https://cdn-images.dzcdn.net/images/cover/c0f4f022fa51f13e877aae2e758e241d/0x1900-000000-80-0-0.jpg",
      tracks: ["Mariners Apartment Complex", "Venice Bitch", "Doin' Time"],
    },
    {
      id: "3",
      title: "Folklore (Taylor Swift)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqA7yrE3rqVJEq6m5Zp03zUfEXGcjpFo3qkQ&s",
      tracks: ["The 1", "Cardigan", "Exile"],
    },
    {
      id: "4",
      title: "Sling (Clairo)",
      image: "https://upload.wikimedia.org/wikipedia/pt/9/9e/Clairo_-_Sling.png",
      tracks: ["Bambi", "Amoeba", "Partridge"],
    },
  ];

  const ProductionItem = ({ title, image, tracks }) => (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        {tracks.map((track, index) => (
          <Text key={index} style={styles.itemText}>• {track}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: producer.image }} style={styles.image} />
        <Text style={styles.title}>{producer.title}</Text>
        <Text style={styles.subtitle}>Faixas produzidas:</Text>
        {producer.text.map((line, index) => (
          <Text key={index} style={styles.track}>{line}</Text>
        ))}

        <View style={styles.card}>
          <Text style={styles.info}>
            Jack Michael Antonoff é um músico, produtor, cantor e compositor estadunidense. Ele é mais conhecido por ser
            o vocalista e compositor do Bleachers e o guitarrista da banda de indie rock Fun. Jack também é conhecido por
            trabalhar com diversas artistas, entre elas estão Taylor Swift, Sia, Lana Del Rey e Lorde.
          </Text>
        </View>

        <Text style={styles.producersTitle}>Produções</Text>

        <FlatList
          data={productions}
          renderItem={({ item }) => <ProductionItem title={item.title} image={item.image} tracks={item.tracks} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          nestedScrollEnabled={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    width: 320,
  },
  info: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "400",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#BBB",
    marginTop: 10,
  },
  track: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 5,
    marginBottom: 20,
  },
  producersTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 14,
    color: "#BBB",
  },
});

export default ProducerDetails;
