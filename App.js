import React, {useState, useEffect} from "react"
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
import imageDarkMode from './assets/icon/eco-light-off.png'
import imageLightMode from './assets/icon/eco-light.png'
import logoDioWhite from './assets/icon/logo-dio-white.png'
import logoDio from './assets/icon/logo-dio.png'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

useEffect(() => {
  const subscription = RNShake.addListener(() => {
    setToggle(oldToggle => !oldToggle);
  });

  return () => subscription.remove();
}, []);

  return (
  <View style={toggle ? style.container : style.containerLight}>
    <TouchableOpacity onPress={handleChangeToggle}/>
    <Image style={toggle ? style.lightingOff : style.lightingOn} source={toggle ? imageDarkMode : imageLightMode}/>
    <Image style={style.dioLogo} source={toggle ? logoDioWhite : logoDio}/>
  </View>
  );
};


export default App

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
