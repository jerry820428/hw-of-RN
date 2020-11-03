
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Linking, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import outerStyle from '../component/styles/style'
import MyRole from '../component/rolebtn';
import roleDetail from '../component/roledetail';


const windowWidth = Dimensions.get('window').width;      //裝置的寬度
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function App(props) {

    const bandIntroduction = '成立於1996年，來自英國倫敦的搖滾樂團，至今已發行八張專輯， \
除了音樂演出外，酷玩樂團同時也積極投身於社會與政治組織活動， \
著名曲目有"Viva La Vida"、"Yellow"、"The Scientist"等等'

    const roleData = [{ name: 'Chris Martin', pic: 'https://pyxis.nymag.com/v1/imgs/a5e/3f2/4760b9dfed69639be969a66a0b81253043-21-chris-martin.rsquare.w700.jpg', func: () => props.navigation.push('Notifications', { name: 'Chris Martin' }) },
    { name: 'Jonny Buckland', pic: 'https://www.famousbirthdays.com/headshots/jonny-buckland-4.jpg', func: () => props.navigation.push('Notifications', { name: 'Jonny Buckland' }) },
    { name: 'Guy Berryman', pic: 'https://alchetron.com/cdn/guy-berryman-6f043bab-cf30-4204-b728-76d331e0a12-resize-750.jpeg', func: () => props.navigation.push('Notifications', { name: 'Guy Berryman' }) },
    { name: 'will champion', pic: 'https://i.pinimg.com/originals/9c/90/a7/9c90a71cecd54f1ad395de491f1a08ab.jpg', func: () => props.navigation.push('Notifications', { name: 'will champion' }) }
    ]

    const songList = [{ songName: 'Fix You', url: 'https://www.youtube.com/watch?v=k4V3Mo61fJM' },
    { songName: 'Charlie Brown', url: 'https://www.youtube.com/watch?v=zTFBJgnNgU4' },
    { songName: 'Hymn For The Weekend', url: 'https://www.youtube.com/watch?v=YykjpeuMNEk' },
    { songName: 'Clocks', url: 'https://www.youtube.com/watch?v=d020hcWA_Wg' }
    ]

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={{ uri: 'https://ysolife.com/wp-content/uploads/2016/11/%E6%9C%AA%E5%91%BD%E5%90%8D-2-7.jpg' }}
                blurRadius={1}
            />
            <View style={{ height: 10 }}></View>
            <Image
                style={{ height: 200, width: 200, borderRadius: 20 }}
                source={{ uri: 'https://www.musicjournal.com.br/wp-content/uploads/2019/10/coldplay-1.jpg' }}

            />

            <Text style={styles.maintext}>Coldplay
            </Text>

            {/* rgba的方式取代color和opacity，可以確保view的透明度，卻又不會影響裡面的文字透明度 */}
            <View style={{ backgroundColor: 'rgba(1,255,255,0.5)', borderRadius: 10, width: '80%' }}>
                <Text style={{ margin: 15, color: 'white' }}>{bandIntroduction} </Text>
            </View>

            <View style={outerStyle.buttonContainer}>
                {/* map重複渲染寫法 */}
                {roleData.map((item, index) => {
                    return (
                        //沒設index會有warning
                        <MyRole key={index}
                            roleName={item.name}
                            picUrl={item.pic}
                            showRoleDetail={item.func}
                        />
                    )
                }
                )}

            </View>
            <Text style={{ fontSize: 16, color: '#fff' }}>歌曲推薦</Text>
            <View style={{ backgroundColor: '#fff', borderRadius: 3, margin: 5, padding: 5, flexDirection: 'row', }}>

                {/* 跟songList的map比起來，加上變數雖然文字量差異不大，但看起來舒服多了 */}
                {/* 還是留著以示警惕 */}
                {/* <Text style={{ color: 'red', paddingLeft: 5, paddingRight: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=k4V3Mo61fJM')}>
                    1.Fix You
                </Text>
                <Text style={{ color: 'red', paddingLeft: 5, paddingRight: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zTFBJgnNgU4')}>
                    2.Charlie Brown
                </Text>
                <Text style={{ color: 'red', paddingLeft: 5, paddingRight: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YykjpeuMNEk')}>
                    3.Hymn For The Weekend
                </Text>
                <Text style={{ color: 'red', paddingLeft: 5, paddingRight: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=d020hcWA_Wg')}>
                    4.Clocks
                </Text> */}

                {songList.map((item, index) => {
                    return (
                        //沒設index會有warning
                        <Text key={index}
                            style={{ color: 'red', paddingLeft: 5, paddingRight: 5 }}
                            onPress={() => Linking.openURL(item.url)}>
                            {index + 1}.{item.songName}
                        </Text>
                    )
                }
                )}
            </View>

            {/* <Button
                title='go to next page'
                // push為跑到指定頁面 頁面名稱為app.js裡的Stack.Screen 標籤中name屬性的值
                //也可以傳遞function讓指定頁面可以使用
                onPress={() => props.navigation.push('Notifications', { name: 'Avons', functionA: (arg) => changeFood(arg) })} /> */}
        </View>

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
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    great: {
        fontSize: 60
    },
    background: {
        height: windowHeight + 50,
        width: windowWidth + 50,
        position: 'absolute',

    },
});
