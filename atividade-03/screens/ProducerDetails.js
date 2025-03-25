import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";

const ProducerDetails = ({ route }) => {
  const { producer } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: producer.image }} style={styles.image} />
      <Text style={styles.title}>{producer.title}</Text>
      <Text style={styles.subtitle}>Faixas produzidas:</Text>
      {producer.text.map((line, index) => (
        <Text key={index} style={styles.track}>{line}</Text>
      ))}

      <View style={styles.card}>
        <Text style={styles.info}>Jack Michael Antonoff (Bergenfield, 31 de março de 1984) é um músico, produtor, cantor e compositor estadunidense. Ele é mais conhecido por ser o vocalista e compositor do Bleachers e o guitarrista da banda de indie rock Fun. Jack também é conhecido por trabalhar com diversas artistas, entre elas estão Taylor Swift, Sia, Lana Del Rey e Lorde.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF"
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    width: 320
  },
  info: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 16,
    color: "#BBB",
    marginTop: 10
  },
  track: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 5
  },
});

export default ProducerDetails;
