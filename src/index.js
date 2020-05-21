import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Button} from 'react-native-paper';

const App = () => {
  const [imc, setImc] = useState('0');
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [legenda, setLegenda] = useState('Indeterminado');

  function calcularIMC() {
    let seuImc = peso / (altura * altura);

    setImc(seuImc);
    setPeso();
    setAltura();

    if (setImc < 18.5) {
      setLegenda('Magreza');
    } else if (seuImc >= 18.5 && seuImc < 25) {
      setLegenda('Normal');
    } else if (seuImc >= 25 && seuImc < 29.9) {
      setLegenda('Sobrepeso');
    } else if (seuImc >= 30 && seuImc < 39.9) {
      setLegenda('Obesidade');
    } else if (seuImc >= 40) {
      setLegenda(' Grave');
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>

      <View>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          style={styles.peso}
          value={peso}
          onChangeText={(t) => setPeso(t)}
          placeholder="Digite seu peso"
        />
        <TextInput
          style={styles.altura}
          value={altura}
          onChangeText={(t) => setAltura(t)}
          placeholder="Digite seu altura"
        />

        <Button mode onPress={() => calcularIMC()}>
          Calcular
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 10,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  diagnostico: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  peso: {
    borderColor: '#000',
    borderWidth: 1,
  },
  altura: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default App;
