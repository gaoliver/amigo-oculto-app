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
import styles from "./src/styles/App";
import Header from "./src/components/Header";
import Game from "./src/components/Game";

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
              <Text>by</Text>
              <Text
               style={styles.FooterLink}
               onPress={() => Linking.openURL('https://instagram.com/eugaoliver')}
               >@eugaoliver</Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
