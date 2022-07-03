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
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box
import { IconButton, Colors } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
  <StatusBar barStyle="light-content" backgroundColor="#000000" />
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ImageBackground
        source={require('../../../assets/imgbg.jpg')}
        style={styles.image}>

        <View style={styles.box}>
          <View style={styles.cont}>
            <Text style={styles.texto}>Produtos</Text>
          </View>
        </View>

        <ScrollView style={styles.rolagem}>

          <View style={styles.containerProduto}>

          <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/meia.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Meia</Text>
                  <Text style={styles.codProduto}>R$ 70/lote</Text>
                  <Text style={styles.infoLote}>50u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Seu Zé</Text>
                <Text style={styles.loteProduto}>Qtd mín: 5 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/headset.png')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Headset</Text>
                  <Text style={styles.codProduto}>R$ 1.000/lote</Text>
                  <Text style={styles.infoLote}>20u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Thiago</Text>
                <Text style={styles.loteProduto}>Qtd mín: 2 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/harry.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Colar</Text>
                  <Text style={styles.codProduto}>R$ 400/lote</Text>
                  <Text style={styles.infoLote}>40u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Juliana</Text>
                <Text style={styles.loteProduto}>Qtd mín: 3 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/smartwacth.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Smartwatch</Text>
                  <Text style={styles.codProduto}>R$ 300/lote</Text>
                  <Text style={styles.infoLote}>10u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Emili</Text>
                <Text style={styles.loteProduto}>Qtd mín: 3 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/Vinil.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Disco de vinil</Text>
                  <Text style={styles.codProduto}>R$ 120/lote</Text>
                  <Text style={styles.infoLote}>10u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Maria</Text>
                <Text style={styles.loteProduto}>Qtd mín: 3 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/Pulseira.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Pulseira</Text>
                  <Text style={styles.codProduto}>R$ 250/lote</Text>
                  <Text style={styles.infoLote}>30u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Henrique</Text>
                <Text style={styles.loteProduto}>Qtd mín: 4 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

            <View style={styles.produto}>
              <View style={styles.containerImg}>
                <Image
                  source={require('../../../assets/ryzen.jpg')}
                  style={styles.imgProduto}
                />
                <View style={styles.textNome}>
                  <Text style={styles.nomeProduto}>Processador</Text>
                  <Text style={styles.codProduto}>R$ 5.000/lote</Text>
                  <Text style={styles.infoLote}>10u/lote</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoProduto}>Fonecedor: Ryan</Text>
                <Text style={styles.loteProduto}>Qtd mín: 2 lotes</Text>
                <IconButton
                  icon="cart-arrow-right"
                  color="black"
                  size={30}
                  style={styles.seta}
                  onPress={() => navigation.navigate('MicroStart')}
                />
              </View>
            </View>

          </View>
        </ScrollView>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  rolagem: {
  },

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
    marginTop: 60,
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
    marginTop: 20,
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
    marginTop: 6,
    marginLeft: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoProduto: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
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
    color: '#007AFF',
    fontWeight: 'bold',
  },
  infoLote: {
    fontSize: 14,
    color: '#5c5c5c',
    fontWeight: 'bold',
  },
  seta: {
    margin: -10,
    left: 110,
  },
});

