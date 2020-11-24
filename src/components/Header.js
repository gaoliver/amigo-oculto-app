import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import styles from '../styles/App'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.Titulo}>{this.props.titulo}</Text>
                <Text style={styles.Slogan}>{this.props.slogan}</Text>
            </View>
        )
    }
}
