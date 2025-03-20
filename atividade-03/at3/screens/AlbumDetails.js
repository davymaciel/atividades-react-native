import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1", title: "Jack Antonoff",
    image: "https://hips.hearstapps.com/hmg-prod/images/jack-antonoff-attends-the-65th-grammy-awards-on-february-05-news-photo-1708541671.jpg",
    text: ["Track: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12"]
  },

  {
    id: "2", title: "Sounwave",
    image: "https://i.scdn.co/image/ab677762000056b84b6bdc5e61d8e030a8ca7ce0",
    text: ["Track: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"]
  },
];

const AlbumDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Álbum em destaque</Text>

        <View style={styles.card}>
          <Image source={{ uri: "https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/500x500.jpg" }} style={styles.image} />
          <Text style={styles.albumTitle}>GNX</Text>
          <Text style={styles.artist}>Kendrick Lamar</Text>
        </View>

        <Text style={styles.producersTitle}>Produção</Text>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("ProducerDetails", { producer: item })}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image2} />
                <View style={styles.infoContainer}>
                  <Text style={styles.title2}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#121212" },
  container: { alignItems: "center", paddingVertical: 20, backgroundColor: "#121212", flexGrow: 1 },
  title: { color: "#FFF", fontSize: 26, fontWeight: "bold", marginBottom: 20, textTransform: "uppercase" },
  producersTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold", marginBottom: 20, textTransform: "uppercase" },
  card: { backgroundColor: "#1E1E1E", padding: 15, borderRadius: 12, alignItems: "center", marginBottom: 20, width: 320 },
  image: { width: 280, height: 280, borderRadius: 10 },
  albumTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#FFF" },
  artist: { fontSize: 16, color: "#BBB", fontWeight: "400" },
  item: { flexDirection: "row", backgroundColor: "#1E1E1E", padding: 10, marginBottom: 10, borderRadius: 10, alignItems: "center", width: 300 },
  title2: { fontSize: 16, color: "#FFF", fontWeight: "bold" },
  image2: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  flatListContainer: { paddingBottom: 20 },
});

export default AlbumDetails;
