
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'

//按鈕換頁套件
const Tab = createBottomTabNavigator();
//堆疊換頁套件
const Stack = createStackNavigator();

// 先把換頁功能包起來
function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Coldplay'
      screenOptions={{
        headerStyle: { backgroundColor: 'purple' },
        //headerBackTitle: '返回',
        //headerTruncatedBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      {/* 下方的Name為自己定義的，主要用來分辨是哪一頁 */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={HomeDetailScreen} options={{ title: '返回' }} />

    </Stack.Navigator>)
}


function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='My chemical Romance'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        //headerBackTitle: '返回',
        //headerTruncatedBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      {/* 下方的Name為自己定義的，主要用來分辨是哪一頁 */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Notification" component={ProfileDetailScreen} options={{ title: '返回' }} />

    </Stack.Navigator>
  )
}



export default function App() {



  return (
    // <View style={styles.container}>
    // <Text style={styles.maintext}>Open up App.js to start working on my fucking awesome app!
    // OH Yeah~ weeeee
    // </Text>
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'tomato' },
    //       //headerBackTitle: '返回',
    //       //headerTruncatedBackTitle: '返回',
    //       headerTintColor: 'white'
    //     }}
    //   >
    //     {/* 下方的Name為自己定義的，主要用來分辨是哪一頁 */}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Notifications" component={HomeDetailScreen} options={{ title: 'adroid不能用headerBackTitle..' }} />

    //   </Stack.Navigator>
    <NavigationContainer>
      <Tab.Navigator
        //設定初始tab
        initialRouteName='Coldplay'
        screenOptions={({ route }) => ({
          // 傳入的參數要再用大括號包起來
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Coldplay') {
              //iconName = focused ? 'ios-trophy' : 'ios-information-circle'
              return <Image
                source={{ uri: 'https://assets.juksy.com/files/articles/53809/800x_100_w-573c339c57c50.jpg' }}
                style={{ width: 30, height: 30 }}
              />
            }
            else if (route.name == 'My chemical Romance') {
              return <Image
                source={{ uri: 'https://ysolife.com/wp-content/uploads/2019/11/74605478_2408546815928928_4584835308821938176_n.jpg' }}
                style={{ width: 30, height: 30 }}
              />
            }
            // 顏色等參數可以用變數方式傳入
            //可以把下面的程式碼個別放到If判斷後，但因程式碼重複就盡量提出來的原則
            //所以判斷後只給予iconName值 最後在return

          }

        })}
        // tabBarOptions的內容會帶入到color裡面
        tabBarOptions={{
          // activeTintColor為被點選時的顏色
          activeTintColor: 'tomato',
          // inactiveTintColor為未啟用時的顏色
          inactiveTintColor: 'gray'
        }}
      >
        {/* name後面為自己定義的名稱 */}
        <Tab.Screen name="Coldplay" component={MyHomeStack} />
        <Tab.Screen name="My chemical Romance" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 20,
    textAlign: 'center'
  },
  great: {
    fontSize: 60
  }
});
