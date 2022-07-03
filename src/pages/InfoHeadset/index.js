import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Animated,
    Keyboard,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box
import { IconButton, Colors } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function InfoHeadset({ navigation }) {
    <StatusBar barStyle="light-content" backgroundColor="#000000" />

    return (
        <KeyboardAvoidingView style={styles.background}>
            <ImageBackground
                source={require('../../../assets/imgbg.jpg')}
                style={styles.image}>

                <View style={styles.containerBox}>
                    <View style={styles.box}>
                        <View style={styles.cont}>
                            <Image
                                source={require('../../../assets/entrega.png')}
                                style={styles.imgEntrega}
                            />
                            <Text style={styles.texto}>Previsão de Entrega: 30/06/2022</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.containerPedido}>

                    <View style={styles.attPedido}>
                        <View style={styles.bolaPedido}>
                        </View>
                        <Text style={styles.textoPedido}>Objeto chegou à transportadora</Text>
                        <Text style={styles.textoInfo}>SÃO PAULO/SP{"\n"}26/06/2022 16:05</Text>
                    </View>

                    <View style={styles.attPedido}>
                    <Image
                            source={require('../../../assets/truck1.png')}
                            style={styles.imgPedido}
                        />
                        <Text style={styles.textoPedido}>Objeto em trânsito</Text>
                        <Text style={styles.textoInfo}>de BELO HORIZONTE/MG para SÃO PAULO/SP{"\n"}22/06/2022 11:28</Text>
                    </View>

                    <View style={styles.attPedido}>
                    <Image
                            source={require('../../../assets/truck1.png')}
                            style={styles.imgPedido}
                        />
                        <Text style={styles.textoPedido}>Objeto em trânsito</Text>
                        <Text style={styles.textoInfo}>de TERESINA/PI para BELO HORIZONTE/MG{"\n"}16/06/2022 16:05</Text>
                    </View>

                    <View style={styles.attPedido}>
                    <Image
                            source={require('../../../assets/box1.png')}
                            style={styles.imgPedido}
                        />
                        <Text style={styles.textoPedido}>Objeto postado pelo remetente</Text>
                        <Text style={styles.textoInfo}>TERESINA/PI{"\n"}12/06/2022 12:09</Text>
                    </View>

                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
    },

    texto: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: '#585858',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },

    containerBox: {
        alignItems: 'center',
        marginBottom: 30,
    },

    box: {
        position: 'relative',
        top: 60,
        backgroundColor: '#007AFF',
        width: 340,
        height: 60,
        borderRadius: 40,
        elevation: 15,
    },

    cont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    imgEntrega: {
        margin: 5,
        width: 50,
        height: 50,
    },

    imgPedido: {
        width: 60,
        height: 60,
        marginRight: -10,
    },

    containerPedido: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: "center",
    },
    attPedido: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: "flex-start",
        flexWrap: 'wrap',
        width: 350,
    },
    bolaPedido: {
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 100,
        borderWidth: 2,
    },

    textoPedido: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },

    textoInfo: {
        color: '#5c5c5c',
        fontSize: 14,
        marginLeft: 28,
        marginBottom: 10,
        borderLeftWidth: 2,
        paddingLeft: 25,
    },
});

