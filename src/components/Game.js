import React, { Component } from "react";
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

  restart() {
    this.setState({
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
    });

    Alert.alert(
      "Reiniciar",
      "Você acaba de reiniciar o jogo. Todas as informações foram zeradas. Por favor, comece novamente."
    );
  }

  submit(nome) {
    if (this.state.participantes.includes(nome)) {
      Alert.alert(
        "Nome em uso",
        "Este nome já está sendo utilizado. Tente outro nome, ou utilize sobrenomes."
      );
    } else {
      this.state.participantes.push(this.state.nomeInput);
      this.state.quadro.push(this.state.nomeInput);
      this.textInput.clear();

      this.setState({ y: +1 });
    }
  }

  confirm(nome) {
    Alert.alert(
      "Confirmação",
      "Você é " + nome + "?",
      [
        {
          text: "não",
        },
        {
          text: "sim",
          onPress: () => this.tirarNome(nome),
        },
      ],
      { cancelable: true }
    );
  }

  tirarNome(nome) {
    if (this.state.quadro.includes(nome)) {
      var x = Math.floor(Math.random() * this.state.participantes.length);

      if (this.state.participantes[x] == nome) {
        while (this.state.participantes[x] == nome) {
          var x = Math.floor(Math.random() * this.state.participantes.length);

          if (this.state.quadro == nome) {
            break;
          }
        }

        if (this.state.quadro == nome) {
          Alert.alert(
            "Atenção",
            "Coincidentemente, só sobrou você para ser tirado. Recomecem o jogo.",
            [
              {
                text: "Reiniciar",
                onPress: () => this.restart(),
              },
            ],
            { cancelable: false }
          );
        } else {
          const participante = this.state.participantes[x];

          this.state.tirados.push(participante);
          Alert.alert(nome, "Você tirou " + participante);
          this.state.participantes.splice(
            this.state.participantes.indexOf(participante),
            1
          );
          this.state.quadro.splice(this.state.quadro.indexOf(nome), 1);
          this.setState({ y: -1 });
        }
      } else {
        const participante = this.state.participantes[x];

        this.state.tirados.push(this.state.participantes[x]);
        Alert.alert(nome, "Você tirou " + participante);
        this.state.participantes.splice(
          this.state.participantes.indexOf(participante),
          1
        );
        this.state.quadro.splice(this.state.quadro.indexOf(nome), 1);
        this.setState({ y: -1 });
      }
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
      this.restart();
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
                this.submit(this.state.nomeInput);
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
                onPress={() => this.confirm(nome)}
              >
                <Text style={styles.nomeTextBtn}>{nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* <Button
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
          /> */}
        </View>
      </View>
    );
  }
}
