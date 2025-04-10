import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, Switch, ScrollView } from "react-native";
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const Feedback = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [musicaPreferida, setMusicaPreferida] = useState("");
    const [comentario, setComentario] = useState("");
    const [nota, setNota] = useState(5);
    const [tempoMusica, setTempoMusica] = useState(1);
    const [gostou, setGostou] = useState(false);
    const [receberRecomendacoes, setReceberRecomendacoes] = useState(false);
    const [plataforma, setPlataforma] = useState("");

    const enviarFeedback = () => {
        Alert.alert(
            "Feedback enviado!",
            `Nome: ${nome}
Email: ${email}
Música preferida: ${musicaPreferida}
Comentário: ${comentario}
Nota: ${nota}
Tempo ouvindo música: ${tempoMusica}h/dia
Plataforma: ${plataforma}
Gostou do álbum? ${gostou ? "Sim" : "Não"}
Receber recomendações? ${receberRecomendacoes ? "Sim" : "Não"}`
        );
    };

    const limparFormulario = () => {
        setNome("");
        setEmail("");
        setMusicaPreferida("");
        setComentario("");
        setNota(5);
        setTempoMusica(1);
        setGostou(false);
        setReceberRecomendacoes(false);
        setPlataforma("");
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Avalie o álbum GNX</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>E-mail:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Música preferida do álbum:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome da música"
                placeholderTextColor="#999"
                value={musicaPreferida}
                onChangeText={setMusicaPreferida}
            />

            <Text style={styles.label}>Comentário:</Text>
            <TextInput
                style={styles.input}
                placeholder="Deixe seu comentário"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={comentario}
                onChangeText={setComentario}
            />

            <Text style={styles.label}>Nota (0 a 10):</Text>
            <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={10}
                step={1}
                value={nota}
                onValueChange={setNota}
                minimumTrackTintColor="#BB86FC"
                maximumTrackTintColor="#ccc"
            />
            <Text style={styles.sliderValue}>Nota: {nota}</Text>

            <Text style={styles.label}>Tempo diário ouvindo o projeto (horas):</Text>
            <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={24}
                step={1}
                value={tempoMusica}
                onValueChange={setTempoMusica}
                minimumTrackTintColor="#BB86FC"
                maximumTrackTintColor="#ccc"
            />
            <Text style={styles.sliderValue}>Tempo: {tempoMusica}h/dia</Text>

            <Text style={styles.label}>Plataforma onde ouviu o projeto:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={plataforma}
                    onValueChange={(itemValue) => setPlataforma(itemValue)}
                    dropdownIconColor="#fff"
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione..." value="" />
                    <Picker.Item label="Spotify" value="spotify" />
                    <Picker.Item label="Apple Music" value="apple" />
                    <Picker.Item label="Deezer" value="deezer" />
                    <Picker.Item label="YouTube" value="youtube" />
                    <Picker.Item label="Outra" value="outra" />
                </Picker>
            </View>

            <Text style={styles.label}>Gostou do projeto?</Text>
            <Switch
                value={gostou}
                onValueChange={setGostou}
                thumbColor={gostou ? "#BB86FC" : "#f4f3f4"}
                trackColor={{ false: "#767577", true: "#BB86FC" }}
            />

            <Text style={styles.label}>Gostaria de receber mais recomendações?</Text>
            <Switch
                value={receberRecomendacoes}
                onValueChange={setReceberRecomendacoes}
                thumbColor={receberRecomendacoes ? "#BB86FC" : "#f4f3f4"}
                trackColor={{ false: "#767577", true: "#BB86FC" }}
            />

            <View style={styles.buttonGroup}>
                <Button title="Enviar Avaliação" onPress={enviarFeedback} color="#BB86FC" />
                <View style={{ height: 10 }} />
                <Button title="Limpar Formulário" onPress={limparFormulario} color="#555" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#FFF",
        textAlign: "center",
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
    },
    sliderValue: {
        color: "#FFF",
        marginBottom: 20,
    },
    pickerContainer: {
        backgroundColor: "#1E1E1E",
        borderRadius: 8,
        marginBottom: 20,
    },
    picker: {
        color: "#FFF",
    },
    buttonGroup: {
        marginTop: 20,
    },
});

export default Feedback;
