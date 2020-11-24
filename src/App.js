import React from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Linking
} from "react-native";
import styles from "./styles/App";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#84322f" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.AreaGeral}>
          <Header titulo="Amigo Oculto" slogan="Quem você tirou?" />
          <Game />
          <View style={styles.Footer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.FooterText}>Criado por  </Text>
              <Text
               style={styles.FooterLink}
               onPress={() => Linking.openURL('https://instagram.com/eugaoliver')}
               >GABRIEL RAMOS</Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
