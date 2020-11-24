import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import styles from './styles/App'
import Header from './components/Header';
import Game from './components/Game';

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#84322f" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.AreaGeral}>
          <Header
            titulo="Amigo Oculto"
            slogan="Hora de tirar os nomes"
          />
          <Game />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
