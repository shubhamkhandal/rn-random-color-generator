import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('#ececec');

  const randomGenerateColor = () => {
    const hexaStr = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexaStr[Math.floor(Math.random() * hexaStr.length)];
    }
    setBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[Styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity onPress={randomGenerateColor} style={Styles.btn}>
          <Text style={Styles.btnTxt}>Press me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    padding: 12,
    elevation: 10,
    borderRadius: 12,
  },
  btnTxt: {
    color: '#000',
    fontSize: 16,
  },
});
