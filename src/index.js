import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'react-native-paper';

const App = () => {
  const [imc, setImc] = useState('0');
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [legenda, setLegenda] = useState('Indeterminado');
  const [backColor, setbackColor] = useState('#eee');

  const alturaRef = useRef();

  function calcularIMC() {
    let seuImc = peso / (altura * altura);

    setImc(Math.ceil(seuImc));
    setPeso();
    setAltura();

    if (seuImc < 18.5) {
      setLegenda('Magreza');
      setbackColor('#e74c3c');
    } else if (seuImc >= 18.5 && seuImc < 25) {
      setLegenda('Normal');
      setbackColor('#2ecc71');
    } else if (seuImc >= 25 && seuImc < 29.9) {
      setLegenda('Sobrepeso');
      setbackColor('#f1c40f');
    } else if (seuImc >= 30 && seuImc < 39.9) {
      setLegenda('Obesidade');
      setbackColor('#e67e22');
    } else if (seuImc >= 40) {
      setLegenda(' Grave');
      setbackColor('#e74c3c');
    }
  }

  function zerarImc() {
    setImc('0');
    setLegenda('Indeterminado');
    setbackColor('#eee');
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.app}>
      <TouchableOpacity style={styles.btnzr} onPress={() => zerarImc()}>
        <Text style={styles.btnzrtext}>Zerar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Seu IMC</Text>

      <View style={[styles.painel, {backgroundColor: backColor}]}>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          style={styles.peso}
          value={peso}
          onChangeText={(t) => setPeso(t.replace(',', '.'))}
          placeholder="Digite seu peso"
          placeholderTextColor="#bac3ff"
          onSubmitEditing={() => alturaRef.current.focus()}
          keyboardType={'numeric'}
          returnKeyType="next"
        />
        <TextInput
          style={styles.altura}
          value={altura}
          onChangeText={(t) => setAltura(t.replace(',', '.'))}
          placeholder="Digite seu altura"
          placeholderTextColor="#bac3ff"
          keyboardType={'numeric'}
          ref={alturaRef}
          returnKeyType="send"
          onSubmitEditing={() => calcularIMC()}
        />

        <Button
          mode="contained"
          style={styles.botao}
          onPress={() => calcularIMC()}>
          Calcular
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    color: '#4e91fc',
  },
  painel: {
    width: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 20,
    marginTop: 15,
  },
  resultado: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  diagnostico: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  peso: {
    borderColor: '#bac3ff',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 4,
    padding: 15,
    height: 60,
    fontSize: 18,
    color: '#4e91fc',
  },
  altura: {
    borderColor: '#bac3ff',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    height: 60,
    fontSize: 18,
    color: '#4e91fc',
  },
  botao: {
    marginTop: 20,
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#4e91fc',
  },
  btnzr: {
    alignSelf: 'flex-end',
    right: 0,
    marginTop: -10,
    fontSize: 15,
  },
  btnzrtext: {
    fontSize: 14,
    color: '#4e91fc',
    fontWeight: 'bold',
  },
});

export default App;
