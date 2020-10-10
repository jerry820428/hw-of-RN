import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, TextInput, Modal, Alert } from 'react-native';


const windowWidth = Dimensions.get('window').width;      //裝置的寬度
const windowHeight = Dimensions.get('window').height;

//淡入的view


export default function App() {
  //淡入效果
  var fadeAnim = new Animated.Value(0)
  //參數
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [loginText, setLoginText] = useState('')
  const [successText, setSuccessText] = useState('')

  Animated.timing(
    fadeAnim,
    {
      toValue: 1,
      duration: 3000, //動畫完成時間
      useNativeDriver: true
    }
  ).start();

  const loginCheck = (password) => {

    if (password === '1234') {
      setLoginText('都給你答案了，為什麼你還是先猜1234呢?')
    }
    else if (password !== 'toosafe') {
      setLoginText('在看清楚一點，placeholder寫了什麼，喔是 "再" 抱歉!')
    }
    else {
      setLoginText('登入成功，請至商店下載spotify')
      setModalVisible(false)
      setSuccessText('對!你成功了，想要聆聽喜愛的音樂，請到商店下載真的spotify~')
    }
  }

  return (
    //版面剛弄好想說來走質感風，但一出現if判斷後的文字回復，我又忍不住了..
    //有方法能讓動畫效果不要在setstate後就自動重播嗎
    //如果我function需要更改到多個state 那用onpress觸發時，
    //是不是都用一支function把需要觸發的setstate都包起來比較好~
    <View style={styles.container}>
      <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=10&blur' }} />
      <View style={styles.container}>
        <Animated.Image style={{ height: 100, width: 100, opacity: fadeAnim }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/600px-Spotify_logo_without_text.svg.png' }} />
        <Animated.Text style={[styles.title, { fontSize: 40, opacity: fadeAnim }]}>Spotify</Animated.Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>聆聽你最喜愛的音樂</Text>
        <Text style={styles.desc}>收集最豐富，專屬於您的音樂平台</Text>
        <Animated.Text style={[styles.desc, { opacity: fadeAnim }]}>{successText}</Animated.Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>請輸入密碼</Text>
            <TextInput style={{ fontSize: 16, textAlign: 'center' }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              maxLength={10}
              placeholder='輸入toosafe'
              secureTextEntry={true}
            />
            <Text style={{ color: 'red', fontSize: 20 }}>{loginText}</Text>
            <TouchableOpacity onPress={() => loginCheck(password)}
              style={{ backgroundColor: '#53423D', width: windowWidth * 0.3, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            >

              <Text style={styles.buttonText}>
                登入
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.bottmContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.button, { backgroundColor: '#53423D' }]}>
          <Text style={styles.buttonText} >LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSuccessText('這不是spotify，請不要期待這顆按鈕有正常功能~')} style={[styles.button, { backgroundColor: '#A58987' }]}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottmContainer: {
    height: 50,
    flexDirection: 'row',
    marginBottom: 0
  },
  background: {
    height: windowHeight + 50,
    width: windowWidth + 50,
    position: 'absolute',
  },
  button: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
    margin: 20,
    marginTop: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 20
  }



});
