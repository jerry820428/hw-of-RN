import { StyleSheet, Text, View, Button, Animated, TouchableOpacity, Image, TextInput } from 'react-native';

import React, { useState } from 'react';

import outerStyle from '../style/style'

function MyGame(gear) {
  return (
    <View style={outerStyle.container}>
      <Text style={{ fontSize: 25 }}>{gear.comment}</Text>

      <Text style={outerStyle.maintext}>{gear.wish}</Text>
      <Text> {gear.sumValue}</Text>
      <View style={outerStyle.bottmContainer}>
        <TouchableOpacity style={outerStyle.button} onPress={gear.press1}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://tshop.r10s.com/fce/c8d/44b7/2c5c/c01d/d210/e7c8/11a6e9b92a0242ac110003.jpg?_ex=460x460' }}
          />
          <Text style={outerStyle.buttonText}>+{gear.addValue1}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={outerStyle.button} onPress={gear.press2}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://tshop.r10s.com/fce/c8d/44b7/2c5c/c01d/d210/e7c8/11a6e9b92a0242ac110003.jpg?_ex=460x460' }}
          />
          <Text style={outerStyle.buttonText}>+{gear.addValue2}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={outerStyle.button} onPress={gear.press3}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://tshop.r10s.com/fce/c8d/44b7/2c5c/c01d/d210/e7c8/11a6e9b92a0242ac110003.jpg?_ex=460x460' }}
          />
          <Text style={outerStyle.buttonText}>+{gear.addValue3}</Text>
        </TouchableOpacity>
      </View>
      <View style={outerStyle.bottmContainer}>
        <TouchableOpacity style={outerStyle.button} onPress={gear.press4}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://res2.pubu.tw/news/2905/81216/BIW9TC_xl.jpg' }}
          />
          <Text style={outerStyle.buttonText}>歸零</Text>
        </TouchableOpacity>
      </View>

      <View style={outerStyle.bottmContainer}>
        <TouchableOpacity style={outerStyle.button} onPress={gear.changeType}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://www.epochweekly.com/uploads/pictures/6723/content_605-74-01.jpg' }}
          />
          <Text style={outerStyle.buttonText}>切換模式</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default MyGame
