
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, Linking, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import style from '../component/styles/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyRole from '../component/rolebtn';
import outerStyle from '../component/styles/style'
import { FlatList } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;      //裝置的寬度
const windowHeight = Dimensions.get('window').height;


export default function App(props) {

    const bandIntroduction = '成立於2001年，來自美國紐澤西的搖滾樂團，於2013年宣布解散\
，但於2019年10月31日宣布回歸，共發行八張專輯， 其中以黑暗行軍最為知名，\
曲風方面主要為龐克搖滾及一些非主流類型搖滾， \
著名曲目有"Welcome To The Black Parade"、"I Don\'t Love You "等等'

    const roleData = [{ id: '1', name: 'Gerard Way', pic: 'https://ysolife.com/wp-content/uploads/2018/11/https-blueprint-api-production.s3.amazonaws.com-uploads-card-image-656115-12531220-8e6c-400e-a332-4c8d7ba94408.jpg', func: () => props.navigation.push('Notification', { name: 'Gerard Way' }) },
    { id: '2', name: 'Mikey Way', pic: 'https://vignette.wikia.nocookie.net/mychemicalromance/images/b/b1/F9D8DFAB-9798-421F-B993-61537C67B94A.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222153742', func: () => props.navigation.push('Notification', { name: 'Mikey Way' }) },
    { id: '3', name: 'Frank Iero', pic: 'https://au.rollingstone.com/wp-content/uploads/2017/02/frank-iero-accident.jpg', func: () => props.navigation.push('Notification', { name: 'Frank Iero' }) },
    { id: '4', name: 'Ray Toro', pic: 'https://vignette.wikia.nocookie.net/mychemicalromance/images/4/42/B17E02FF-DFF4-4B35-BD0C-937D3CD9BCE0.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222025543', func: () => props.navigation.push('Notification', { name: 'Ray Toro' }) },
    { id: '5', name: 'Bob Bryar', pic: 'https://pbs.twimg.com/profile_images/697699830471258112/2CQUf0Nr_400x400.png', func: () => props.navigation.push('Notification', { name: 'Bob Bryar' }) }
    ]

    const songList = [{ id: '1', songName: 'Welcome To The Black Parade', url: 'https://www.youtube.com/watch?v=RRKJiM9Njr8' },
    { id: '2', songName: " I Don't Love You", url: 'https://www.youtube.com/watch?v=pyi0ZfuIIvo' },
    { id: '3', songName: 'The Ghost Of You', url: 'https://www.youtube.com/watch?v=uCUpvTMis-Y' },

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
            <Image
                style={styles.background}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Blackparadecover.jpg/220px-Blackparadecover.jpg' }}
                blurRadius={0.5}
            />
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <View style={{ height: 10 }}></View>
                <Image
                    style={{ height: 200, width: 200, borderRadius: 20 }}
                    source={{ uri: 'https://melhoreseuingles.files.wordpress.com/2014/01/my-chemical-romance.jpg' }}
                />

                <Text style={styles.maintext}>My Chemical Romance
                </Text>

                {/* rgba的方式取代color和opacity，可以確保view的透明度，卻又不會影響裡面的文字透明度 */}
                <View style={{ backgroundColor: 'rgba(230,230,230,0.5)', borderRadius: 10, width: '80%', margin: 10 }}>
                    <Text style={{ margin: 15, color: '#555' }}>{bandIntroduction} </Text>
                </View>


                <FlatList
                    data={roleData}
                    renderItem={cases => renderCrew(cases.item)}
                    keyExtractor={cases => cases.id}
                    style={{ backgroundColor: 'rgba(230,230,230,0.5)', borderRadius: 10, width: '80%' }}
                />

                <Text style={{ fontSize: 16, color: '#555' }}>歌曲推薦</Text>
                <View style={{
                    backgroundColor: '', borderRadius: 3, margin: 5, padding: 5,
                    flexDirection: 'row', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'
                }}>
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

    );
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
        color: '#666',
        fontWeight: 'bold'
    },
    great: {
        fontSize: 60
    },
    background: {
        height: windowHeight,
        width: windowWidth,
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
