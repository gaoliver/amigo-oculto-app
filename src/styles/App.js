import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    AreaGeral: {
        flex: 1,
        backgroundColor: '#A52F2A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Container: {
        alignItems: 'center'
    },
    Titulo: {
        color: '#FFF8DC',
        fontSize: 35,
        fontWeight: 'bold'
    },
    Slogan: {
        color: '#FFF8DC',
        fontSize: 25,
        fontWeight: 'bold'
    },
    // Slogan: {
    //     color: '#DEB887',
    //     fontSize: 20,
    //     fontWeight: 'bold'
    // },
    BotaoWide: {
        width: 200,
        height: 40,
        backgroundColor: '#FFF8DC',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    Botao: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    botaoText: {
        fontSize: 15,
        color: '#A52F2A',
        fontWeight: 'bold'
    },
    Jogo: {
        overflow: 'hidden',
        backgroundColor: '#B8871F',
        width: Dimensions.get('screen').width - 30,
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    jogoHeader: {
        flexDirection: 'row',
        height: 38
    },
    Texto: {
        fontSize: 15,
        color: '#FFF8DC',
        marginTop: 10,
        fontWeight: 'bold'
    },
    Input: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#000',
        width: 250,
        paddingHorizontal: 5,
        fontSize: 13,

    },
    OkButton: {
        backgroundColor: '#FFF',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quadroAmigos: {
        width: '100%',
        maxHeight: 420,
    },
    nomeBtn: {
        width: '95%',
        paddingVertical: 10,
        backgroundColor: "#333",
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center'
    },
    nomeTextBtn: {
        color: "#fff",
        fontSize: 15
    },
    Footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#fff3",
        width: Dimensions.get('screen').width,
        paddingVertical: 5,
        alignItems: 'center',
    },
    FooterText: {
        color: '#999',
        alignSelf: 'center'
    },
    FooterLink: {
        color: '#FFF',
        fontWeight: 'bold',
        alignSelf: 'center',
        textDecorationLine: 'underline',
        marginLeft: 5
    }
});

export default styles;