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

import { NavigationContainer } from '@react-navigation/native'; //Navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, firestore, collection, addDoc } from 'firebase/firestore';

import { auth } from '../Config';
import db from '../Config';

import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { async } from '@firebase/util';

export default function Cadastro({ navigation }) {

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [cep, setcep] = useState('');
  const [cnpj, setcnpj] = useState('');
  const [senha, setsenha] = useState('');
  const [error, setError] = useState('');
  
  let valerror = null;

  const isValidEmail = (value) =>{
    const regx =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regx.test(value)
  }

  const validar = () => {
    
    // so valida se todos os campos tiverem preenchidos
    if(nome == '' || email == '' || cep == '' || cnpj == '' || senha == '') return setError('Preencha todos os campos');
    // Email precisa ser valido
    if(!isValidEmail(email)) return setError('Escreva um email válido');
    // so valida se o cep tiver 9 caracteres
    if(cep.length != 9) return setError('Preencha o CEP corretamente');
    // so valida se o cnpj tiver 18 caracteres
    if(cnpj.length != 18) return setError('Preencha o CNPJ corretamente');
    // so valida se a senha tiver mais de 6 caracteres
    if(senha.length < 6) return setError('A senha deve ter no mínimo 6 caracteres');
    
    setError(null)

    return true;
  }

  async function createUser() {
    validar()
    
    if(validar() == true)
    {
      await createUserWithEmailAndPassword(auth, email, senha).then(async(userRec) => {
        const user = userRec.user;
        const payload = {nome: nome, email: email, cnpj: cnpj, cep: cep}
        
        await addDoc(collection(db, "usuários/usu/" + user.uid),payload).catch((error)=>{ console.log(error); });

        Alert.alert(
          "Sucesso",
          "Usuário cadastrado com sucesso",
          [
            {
              text: "Ok",
              onPress: () => navigation.navigate('Login')
            }
          ]
        )
      })
      .catch(error => Alert.alert("Erro", "Usuário já cadastrado"));
    }
    else{
    }
  }

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));


  useEffect(() => {


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

          <Text style={styles.texto}>Faça seu cadastro:</Text>
          <Text style={styles.erro}>{error}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="words"

            value={nome}
            onChangeText={value => setnome(value)}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            
            value={email}
            onChangeText={value => setemail(value)}
          />

          <TextInputMask
            style={styles.input}
            placeholder="CEP"
            type={'zip-code'}

            value={cep}
            onChangeText={value => setcep(value)}

          />

          <TextInputMask
            style={styles.input}
            placeholder="CNPJ"
            type={'cnpj'}

            value={cnpj}
            onChangeText={value => setcnpj(value)}

          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}

            value={senha}
            onChangeText={value => setsenha(value)}
          />

          <TouchableOpacity style={styles.btnSubmit} onPress={() => {createUser()}}>
            <Text style={styles.submitText}>Cadastrar</Text>
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
    justifyContent: 'center',
    backgroundColor: '#ffffff',

  },

  image: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },

  texto: {
    justifyContent: "center",
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'Bold',
    marginBottom: 15,
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },

  containerInput: {
    flex: 1,
    alignItems: 'center',
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
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 8,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  erro: {
    color: 'red',
    marginTop: -5,
    marginBottom: 5,
    width: '100%',
    left: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
