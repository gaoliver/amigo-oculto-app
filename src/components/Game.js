import React, { Component, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import styles from "../styles/App";

export default class Game extends Component {
  state = {
    altura: 0,
    bordasV: 0,
    bordasH: 0,
    texto: "Iniciar",

    participantes: [],
    quadro: [],
    tirados: [],
    y: 0,
    quadro: [],

    nomeInput: "",
  };

  submit() {
    this.state.participantes.push(this.state.nomeInput);
    this.state.quadro.push(this.state.nomeInput);
    this.textInput.clear();

    this.setState({ y: +1 });
  }

  tirarNome(nome) {
    if (this.state.quadro.includes(nome)) {
      var x = Math.floor(Math.random() * this.state.participantes.length);

      while (this.state.participantes[x] == nome) {
        var x = Math.floor(Math.random() * this.state.participantes.length);

        if (this.state.quadro.values() == nome) {
          Alert.alert(
            "Atenção",
            "Coincidentemente, só sobrou você para ser tirado. Recomecem o jogo."
          );

          break;
        }
      }

      this.state.tirados.push(this.state.participantes[x]);
      Alert.alert(
        "Atenção, " + nome,
        "Você tirou " + this.state.participantes[x]
      );
      this.state.quadro.splice(this.state.quadro.indexOf(nome), 1);
      this.state.participantes.splice(this.state.participantes[x], 1);
    } else {
      Alert.alert("Atenção", "Esse nome já jogou.");
    }
  }

  alternar = () => {
    if (this.state.altura == 0) {
      this.setState({
        altura: "auto",
        bordasV: 10,
        bordasH: 5,
        texto: "Fechar",
      });
    } else {
      this.setState({ altura: 0, bordasV: 0, bordasH: 0, texto: "Iniciar" });

      Alert.alert(
        "Reiniciar",
        "Você acaba de reiniciar o jogo. Todas as informações foram zeradas. Por favor, comece novamente."
      );
    }
  };

  regras = () => {
    Alert.alert(
      "Regras",
      "Passo 1: Adicionar nomes dos participantes.\n" +
        "\nPasso 2: Cada participante, em privado, tocará no seu próprio nome exibido na tela para descobrir quem é seu amigo oculto.\n" +
        "\nPasso 3: Trocar os presentes."
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.BotaoWide} onPress={this.alternar}>
          <Text> {this.state.texto} </Text>
        </TouchableOpacity>

        <View
          style={[
            styles.Jogo,
            {
              height: this.state.altura,
              paddingVertical: this.state.bordasV,
              paddingHorizontal: this.state.bordasH,
            },
          ]}
        >
          <View style={styles.jogoHeader}>
            <TextInput
              ref={(input) => {
                this.textInput = input;
              }}
              style={styles.Input}
              placeholder="Adicionar participante"
              onChangeText={(text) => {
                this.setState({ nomeInput: text });
              }}
            />

            <TouchableOpacity
              style={styles.OkButton}
              onPress={() => {
                this.submit();
              }}
            >
              <Text>Ok</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.OkButton, { marginHorizontal: 0 }]}
              onPress={this.regras}
            >
              <Text>Regras</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.Texto}>
            Toque no seu nome e saiba quem você tirou.
          </Text>

          <ScrollView style={styles.quadroAmigos} persistentScrollbar={true}>
            {this.state.quadro.map((nome) => (
              <TouchableOpacity
                style={styles.nomeBtn}
                key={nome}
                onPress={() => this.tirarNome(nome)}
              >
                <Text style={styles.nomeTextBtn}>{nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Button
            title="Ver lista"
            onPress={() =>
              Alert.alert(
                "Listas: ",
                "Participantes: " +
                  this.state.participantes +
                  "\nQuadro: " +
                  this.state.quadro +
                  "\nTirados: " +
                  this.state.tirados
              )
            }
          />
        </View>
      </View>
    );
  }
}
