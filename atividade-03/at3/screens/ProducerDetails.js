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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#121212", padding: 20 },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#FFF" },
  subtitle: { fontSize: 16, color: "#BBB", marginTop: 10 },
  track: { fontSize: 14, color: "#FFF", marginTop: 5 },
});

export default ProducerDetails;
