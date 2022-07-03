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
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box
import { StatusBar } from 'expo-status-bar';

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, firestore, collection, addDoc, getDoc, onSnapshot, getDocs } from 'firebase/firestore';

import { auth } from '../Config';
import db from '../Config';
import { async } from '@firebase/util';

export default function Perfil({ navigation }) {

  const [infos, setinfos] = useState([]);
  const user = auth.currentUser;
  const uid = user.uid;
  const userCollectionRef = collection(db, "usuários/usu/" + uid);

  useEffect( () => {

    const getInfos = async () => {
      const data = await getDocs(userCollectionRef);
      setinfos(data.docs.map((doc) => ({...doc.data(), uid})));
    }
    getInfos()
  }, [])

  async function logout() {
    await signOut(auth)
      .then(() => {
        navigation.navigate('Login')
      })
      .catch(error => Alert.alert("Erro", "Não foi possível realizar o LogOut",));
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ImageBackground
        source={require('../../../assets/imgbg.jpg')}
        style={styles.image}>

        <View style={styles.box}>
          <View style={styles.cont}>
            <Text style={styles.texto}>Informações do Perfil</Text>
          </View>
        </View>

        <View style={styles.container}>

        <Text style={styles.textoInput}>Nome:</Text>
          {infos.map((info) => {
            return (
              <TextInput
              style={styles.input}
              placeholder="Nome"
              value={info.nome}
              editable={false}
            />
            );
          })}

          <Text style={styles.textoInput}>E-mail:</Text>
          {infos.map((info) => {
            return (
              <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={info.email}
              editable={false}
            />
            );
          })}

          <Text style={styles.textoInput}>Cep:</Text>
          {infos.map((info) => {
            return (
              <TextInput
              style={styles.input}
              placeholder="CEP"
              value={info.cep}
              editable={false}
            />
            );
          })}
          
          <Text style={styles.textoInput}>CNPJ:</Text>
          {infos.map((info) => {
            return (
              <TextInput
              style={styles.input}
              placeholder="Cnpj"
              value={info.cnpj}
              editable={false}
            />
            );
          })}

          <View style={styles.containerBtn}>

            <TouchableOpacity style={styles.btnSubmit} onPress={logout}>
              <Text style={styles.submitText}>Sair</Text>
            </TouchableOpacity>

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

  box: {
    position: 'relative',
    top: 60,
    backgroundColor: '#007AFF',
    width: 330,
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

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "center",
    top: 100,
  },

  texto: {
    color: '#ffffff',
    fontSize: 30,
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  textoInput: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',

    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnSubmit: {
    backgroundColor: '#fc3a3a',
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 8,
    marginLeft: 5,
  },
  submitText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  containerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "center",
  },
});

