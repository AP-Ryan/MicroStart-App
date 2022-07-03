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

export default function Pedidos({ navigation }) {


  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ImageBackground
        source={require('../../../assets/imgbg.jpg')}
        style={styles.image}>

        <View style={styles.box}>
          <View style={styles.cont}>
            <Text style={styles.texto}>Pedidos</Text>
          </View>
        </View>

        <View style={styles.containerProduto}>

          <View style={styles.produto}>
            <View style={styles.containerImg}>
              <Image
                source={require('../../../assets/headset.png')}
                style={styles.imgProduto}
              />
              <View style={styles.textNome}>
                <Text style={styles.nomeProduto}>Headset</Text>
                <Text style={styles.codProduto}>BB9876543291BR</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoProduto}>Chegou à transportadora{"\n"}SÃO PAULO/SP</Text>
              <Text style={styles.loteProduto}>Qtd: 2 lotes</Text>
              <IconButton
                icon="chevron-right"
                color="black"
                size={30}
                style={styles.seta}
                onPress={() => navigation.navigate('Informação Headset')}
              />
            </View>
          </View>

          <View style={styles.produto}>
            <View style={styles.containerImg}>
              <Image
                source={require('../../../assets/meia.jpg')}
                style={styles.imgProduto}
              />
              <View style={styles.textNome}>
                <Text style={styles.nomeProduto}>Meia</Text>
                <Text style={styles.codProduto}>AA123456789BR</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoProduto}>À caminho do destinatário{"\n"}GUARULHOS/SP</Text>
              <Text style={styles.loteProduto}>Qtd: 5 lotes</Text>
              <IconButton
                icon="chevron-right"
                color="black"
                size={30}
                style={styles.seta}
                onPress={() => navigation.navigate('Informação Meia')}
              />
            </View>
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
    fontSize: 30,
    fontStyle: 'Bold',
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },

  box: {
    position: 'relative',
    top: 60,
    backgroundColor: '#007AFF',
    width: 220,
    height: 60,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 12,
  },
  
  cont: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "center",
  },

  containerProduto: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "center",
  },

  produto: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 180,
    borderRadius: 40,
    borderColor: 'Black',
    borderWidth: 4,
    elevation: 10,
    marginBottom: 30,
  },

  imgProduto: {
    margin: 3,
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  containerImg: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    margin: 5,
  },
  textNome: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  info: {
    marginLeft: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoProduto: {
    fontSize: 18,
    color: '#007AFF'
  },
  loteProduto: {
    fontSize: 18,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  codProduto: {
    fontSize: 20,
    color: '#f1c50e',
    fontWeight: 'bold',
    
  },
  seta: {
    margin: -15,
    position: 'relative',
    left: 150,
  },
});

