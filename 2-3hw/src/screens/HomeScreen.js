
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Linking, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import outerStyle from '../component/styles/style'
import MyRole from '../component/rolebtn';
import roleDetail from '../component/roledetail';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;      //裝置的寬度
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function App(props) {

    const bandIntroduction = '成立於1996年，來自英國倫敦的搖滾樂團，至今已發行八張專輯， \
除了音樂演出外，酷玩樂團同時也積極投身於社會與政治組織活動， \
著名曲目有"Viva La Vida"、"Yellow"、"The Scientist"等等'

    const roleData = [{ id: '1', name: 'Chris Martin', pic: 'https://pyxis.nymag.com/v1/imgs/a5e/3f2/4760b9dfed69639be969a66a0b81253043-21-chris-martin.rsquare.w700.jpg', func: () => props.navigation.push('Notifications', { name: 'Chris Martin' }) },
    { id: '2', name: 'Jonny Buckland', pic: 'https://www.famousbirthdays.com/headshots/jonny-buckland-4.jpg', func: () => props.navigation.push('Notifications', { name: 'Jonny Buckland' }) },
    { id: '3', name: 'Guy Berryman', pic: 'https://alchetron.com/cdn/guy-berryman-6f043bab-cf30-4204-b728-76d331e0a12-resize-750.jpeg', func: () => props.navigation.push('Notifications', { name: 'Guy Berryman' }) },
    { id: '4', name: 'will champion', pic: 'https://i.pinimg.com/originals/9c/90/a7/9c90a71cecd54f1ad395de491f1a08ab.jpg', func: () => props.navigation.push('Notifications', { name: 'will champion' }) }
    ]

    const songList = [{ id: '1', songName: 'Fix You', url: 'https://www.youtube.com/watch?v=k4V3Mo61fJM' },
    { id: '2', songName: 'Charlie Brown', url: 'https://www.youtube.com/watch?v=zTFBJgnNgU4' },
    { id: '3', songName: 'Hymn For The Weekend', url: 'https://www.youtube.com/watch?v=YykjpeuMNEk' },
    { id: '4', songName: 'Clocks', url: 'https://www.youtube.com/watch?v=d020hcWA_Wg' }
    ]

    const renderCrew = (item) => {
        return (
            <View >
                <MyRole key={item.id}
                    roleName={item.name}
                    picUrl={item.pic}
                    showRoleDetail={item.func}
                />

                <View style={{ height: 1, backgroundColor: 'black' }}></View>
            </View>
        )
    }

    const renderSongList = (item) => {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <View>
                    {/* 為什這邊view的width要設置 */}
                    <View style={{ flexDirection: 'row', width: windowWidth * 0.8 }}>
                        <View style={{ flex: 6 }}>
                            <Text key={item.id}
                                style={{ color: 'white', paddingLeft: 5, paddingRight: 5, fontSize: 18 }}
                            >
                                {item.id}.{item.songName}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/1280px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png' }}
                            />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#dddddd' }}></View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* 背景圖應該在scrollView的上層，確保滾動時背景圖不動 */}
            <Image
                style={styles.background}
                source={{ uri: 'https://ysolife.com/wp-content/uploads/2016/11/%E6%9C%AA%E5%91%BD%E5%90%8D-2-7.jpg' }}
                blurRadius={1}
            />
            {/* scrollView必須要加入alignItem和justifyContent屬性才能正常運作 */}
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <View style={{ height: 10 }}></View>
                <Image
                    style={{ height: 200, width: 200, borderRadius: 20 }}
                    source={{ uri: 'https://www.musicjournal.com.br/wp-content/uploads/2019/10/coldplay-1.jpg' }}

                />

                <Text style={styles.maintext}>Coldplay
            </Text>

                {/* rgba的方式取代color和opacity，可以確保view的透明度，卻又不會影響裡面的文字透明度 */}
                <View style={{ backgroundColor: 'rgba(1,255,255,0.5)', borderRadius: 10, width: '80%', margin: 10 }}>
                    <Text style={{ margin: 15, color: 'white' }}>{bandIntroduction} </Text>
                </View>


                {/* 列表 */}
                <FlatList
                    data={roleData}
                    renderItem={cases => renderCrew(cases.item)}
                    keyExtractor={cases => cases.id}
                    style={{ backgroundColor: 'rgba(1,255,255,0.5)', borderRadius: 10, width: '80%' }}
                />

                <Text style={{ fontSize: 16, color: '#fff' }}>歌曲推薦</Text>
                <View style={{ backgroundColor: 'rgba(1,255,255,0.5)', borderRadius: 3, margin: 15, padding: 5, flexDirection: 'row', }}>


                    <FlatList
                        data={songList}
                        renderItem={cases => renderSongList(cases.item)}
                        keyExtractor={cases => cases.id}
                        style={{ borderRadius: 10, width: '80%' }}
                        // 以下兩個屬性在scrollView內時，必須加在contentContainerStyle而非style內
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    />
                </View>
            </ScrollView>

        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
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
    ScrollView: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    MainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
});
