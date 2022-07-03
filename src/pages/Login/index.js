import React, { useState, useEffect } from 'react';
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
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'; //Navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box

import Constants from 'expo-constants';

import { signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";

import { auth } from '../Config';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Login({ navigation }) {

  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');

  async function usuLogin() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then(value => {
      setemail('')
      setSenha('')
      navigation.navigate('Principal')
    })
    .catch(error =>  Alert.alert( "Erro", "Usuário não cadastrado", ));
  };

  async function redefinirSenha() {
    await sendPasswordResetEmail(auth, email)
    .then(value => {
      Alert.alert( "Redefinir Senha", "Enviamos um e-mail para você")
    })
    .catch(error =>  Alert.alert( "Erro", "Digite um e-mail válido!"));
  };

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 220, y: 220 }));

// Autenticação do Login -----------------------------------------------------------------------------------------

// Metodo para o teclado não ficar emcima dos input -----------------------------------------------------------------------------------------
  useEffect(() => {
    
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

// Efeito de balançar quando entra na tela -----------------------------------------------------------------------------------------
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 12,
      }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
        })
    ]).start();

  }, []);

// função para dimunuir o logo -----------------------------------------------------------------------------------------
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 100,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
      }),
    ]).start();

  }

  function keyboardDidHide(){

      Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 220,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 220,
        duration: 100,
      }),
    ]).start();

  }

// Main -----------------------------------------------------------------------------------------
  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
    <ImageBackground 
    source={require('../../../assets/imgbg.jpg')}
    style={styles.image}>


      <Animated.View
        style={[
          styles.containerInput,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}>

      <View style={styles.logo}>
        <Animated.Image
        style={{
          width: logo.x,
          height: logo.y,
        }}
        source={require('../../../assets/logo.jpg')} />
      </View>

      <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}

          value={email}
          onChangeText={value => setemail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry={true}

          value={senha}
          onChangeText={ value => setSenha(value)}
        />

        <TouchableOpacity style={styles.btnSenha} onPress={() => redefinirSenha()}>
          <Text style={styles.senhaText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit} onPress={ usuLogin }>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={ () => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}


/*---------------------------------------------------ESTILO---------------------------------------------------*/
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
    justifyContent: "center",
    width: "100%",
  },

  containerInput: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  input: {
    backgroundColor: '#ffffff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor:'#585858',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor:'#585858',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  btnSenha: {
    alignItems: 'flex-end',
    width: '87%',
    marginTop: -12,
  },
  senhaText: {
    color: '#5c5c5c',
    fontSize: 13,

  },
});
