import React, { Component } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import styles from "../styles/App";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image source={require('../../assets/icon.png')} style={{ height: 150, width: 150 }} />
        {/* <Text style={styles.Titulo}> {this.props.titulo} </Text> */}
        <Text style={styles.Slogan}> {this.props.slogan} </Text>
      </View>
    );
  }
}
