import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button, Alert, Switch } from "react-native";
import Slider from '@react-native-community/slider';

const Feedback = () => {
    const [nota, setNota] = useState(5);
    const [comentario, setComentario] = useState("");
    const [gostou, setGostou] = useState(false);

    const enviarFeedback = () => {
        Alert.alert("Feedback enviado!", `Nota: ${nota}\nComentário: ${comentario}\nGostou: ${gostou ? "Sim" : "Não"}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avalie o álbum GNX</Text>
            <View style={styles.card}>
                <Image style={styles.image}
                    source={{ uri: "https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/500x500.jpg",}}
                />
            </View>

            <Text style={styles.label}>Nota (0 a 10):</Text>
            <Slider style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={10}
                step={1}
                value={nota}
                onValueChange={setNota}
                minimumTrackTintColor="#BB86FC"
                maximumTrackTintColor="#ccc"
            />
            <Text style={styles.sliderValue}>Nota: {nota}</Text>

            <Text style={styles.label}>Gostou do álbum?</Text>
            <Switch
                value={gostou}
                onValueChange={setGostou}
                thumbColor={gostou ? "#BB86FC" : "#f4f3f4"}
                trackColor={{ false: "#767577", true: "#BB86FC" }}
            />

            <Text style={styles.label}>Comentário:</Text>
            <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                placeholder="Escreva aqui..."
                placeholderTextColor="#999"
                onChangeText={setComentario}
                value={comentario}
            />

            <Button title="Enviar" onPress={enviarFeedback} color="#BB86FC" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#FFF",
        textAlign: "center",
    },
    card: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 20,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        width: 320,
    },
    label: {
        color: "#FFF",
        marginBottom: 8,
        fontSize: 16,
    },
    input: {
        backgroundColor: "#1E1E1E",
        color: "#FFF",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        textAlignVertical: "top",
    },
    sliderValue: {
        color: "#FFF",
        marginBottom: 20,
    },
});

export default Feedback;
