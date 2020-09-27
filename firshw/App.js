import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [tcname, setTcname] = useState('')
  const [ftxt, setFtxt] = useState('')

  //react-native有跳行標籤嗎? 類似<br>之類的
  //可以直接在輸入時動態判斷要顯示的文字嗎? 而不用透過回答按鈕

  return (
    <View style={styles.container}>
      <Text style={styles.container}>能學到這真的很厲害啊，接下來就由我</Text>
      <Text style={styles.bossname}>TextInput的作業一來當你的對手了</Text>
      <View style={{ height: 30 }} />
      <Text style={styles.container}>報上你的大名吧</Text>
      <View style={{ height: 15 }} />

      <TextInput
        style={{ height: 50, width: 300, borderRadius: 20, borderColor: 'gray', borderWidth: 5, backgroundColor: 'gray', color: 'white', fotSize: 25, textAlign: 'center' }}
        value={name}
        maxLength={15}
        onChangeText={(name) => setName(name)}
      />

      <View style={{ height: 15 }} />
      <Text style={styles.container}>原來是{name}啊</Text>
      <View style={{ height: 15 }} />
      <Text style={styles.container}>這個嘛~要放你一馬，也不是不行</Text>
      <View style={{ height: 10 }} />
      <Text style={styles.container}>你只要能回答出老師的名字，今天就這麼算了</Text>
      <View style={{ height: 10 }} />

      <TextInput
        style={{ height: 50, width: 300, borderRadius: 20, borderColor: 'gray', borderWidth: 5, backgroundColor: 'black', color: 'white', fotSize: 25, textAlign: 'center' }}
        value={tcname}
        maxLength={15}
        onChangeText={(tcname) => setTcname(tcname)}
        placeholder='Avon'
      />
      <View style={{ height: 15 }} />
      <Button
        title="回答"
        onPress={fintxt}
      />

      <Text style={styles.container}>{ftxt}</Text>

      <StatusBar style="auto" />
    </View>
  );

  function fintxt() {
    if (tcname == "Avon") {
      //return <Text>很好! 今天就這麼算了 好好繼續上課</Text>
      setFtxt('很好! 今天就這麼算了 好好繼續上課')
    }
    else if (tcname == "avon") {
      setFtxt("名字給我乖乖大寫啊，無禮的人啊")
    }
    else if (tcname.toLowerCase() == "avon the great") {
      setFtxt('很棒啊，你離飛黃騰達不遠了呢~')
    }
    else if (tcname == "") {
      setFtxt('')
    }
    else {
      setFtxt('錯誤!')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bossname: {
    fontSize: 60,
  }
});
