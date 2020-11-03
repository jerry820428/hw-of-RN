
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, Linking, TextInput } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import style from '../component/styles/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyRole from '../component/rolebtn';
import outerStyle from '../component/styles/style'

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;      //裝置的寬度
const windowHeight = Dimensions.get('window').height;

const bandIntroduction = '來自美國紐澤西的搖滾樂團，成立於2001年，解散於2013年，後於2019年10月31日宣布回歸 \
除了音樂演出外，酷玩樂團同時也積極投身於社會與政治組織活動， \
著名曲目有"Viva La Vida"、"Yellow"、"、"The Scientist"等等'

const roleData = [{ name: 'Gerard Way', pic: 'https://lh3.googleusercontent.com/proxy/4_VJeOIJZ3_GElr18VddXzKWg8TE0BIU7lolodhkP0VvjCgKKySQ05_xkBV65mwJk8rR-i4OL7o_w6pt5TUe998OEYZyc_IeeqFsF0n3VW-duYWhlVvIPDEaRsqUfnq1ukMIXHRKYrOOM26Jrth4f4eyaw', func: () => props.navigation.push('Notifications', { name: 'Gerard Way' }) },
{ name: 'Mikey Way', pic: 'https://www.famousbirthdays.com/headshots/jonny-buckland-4.jpg', func: () => props.navigation.push('Notifications', { name: 'Mikey Way' }) },
{ name: 'Frank Iero', pic: 'https://alchetron.com/cdn/guy-berryman-6f043bab-cf30-4204-b728-76d331e0a12-resize-750.jpeg', func: () => props.navigation.push('Notifications', { name: 'Frank Iero' }) },
{ name: 'Ray Toro', pic: 'https://i.pinimg.com/originals/9c/90/a7/9c90a71cecd54f1ad395de491f1a08ab.jpg', func: () => props.navigation.push('Notifications', { name: 'Ray Toro' }) },
{ name: 'Bob Bryar', pic: 'https://i.pinimg.com/originals/9c/90/a7/9c90a71cecd54f1ad395de491f1a08ab.jpg', func: () => props.navigation.push('Notifications', { name: 'Bob Bryar' }) }
]

const songList = [{ songName: 'Welcome To The Black Parade', url: 'https://www.youtube.com/watch?v=RRKJiM9Njr8' },
{ songName: " I Don't Love You", url: 'https://www.youtube.com/watch?v=zTFBJgnNgU4' },
{ songName: 'The Ghost Of You', url: 'https://www.youtube.com/watch?v=uCUpvTMis-Y' },

]

export default function App(props) {

    const bandIntroduction = '成立於2001年，來自美國紐澤西的搖滾樂團，於2013年宣布解散\
，但於2019年10月31日宣布回歸，共發行八張專輯， 其中以黑暗行軍最為知名，\
曲風方面主要為龐克搖滾及一些非主流類型搖滾， \
著名曲目有"Welcome To The Black Parade"、"I Don\'t Love You "等等'

    const roleData = [{ name: 'Gerard Way', pic: 'https://ysolife.com/wp-content/uploads/2018/11/https-blueprint-api-production.s3.amazonaws.com-uploads-card-image-656115-12531220-8e6c-400e-a332-4c8d7ba94408.jpg', func: () => props.navigation.push('Notification', { name: 'Gerard Way' }) },
    { name: 'Mikey Way', pic: 'https://vignette.wikia.nocookie.net/mychemicalromance/images/b/b1/F9D8DFAB-9798-421F-B993-61537C67B94A.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222153742', func: () => props.navigation.push('Notification', { name: 'Mikey Way' }) },
    { name: 'Frank Iero', pic: 'https://au.rollingstone.com/wp-content/uploads/2017/02/frank-iero-accident.jpg', func: () => props.navigation.push('Notification', { name: 'Frank Iero' }) },
    { name: 'Ray Toro', pic: 'https://vignette.wikia.nocookie.net/mychemicalromance/images/4/42/B17E02FF-DFF4-4B35-BD0C-937D3CD9BCE0.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222025543', func: () => props.navigation.push('Notification', { name: 'Ray Toro' }) },
    { name: 'Bob Bryar', pic: 'https://pbs.twimg.com/profile_images/697699830471258112/2CQUf0Nr_400x400.png', func: () => props.navigation.push('Notification', { name: 'Bob Bryar' }) }
    ]

    const songList = [{ songName: 'Welcome To The Black Parade', url: 'https://www.youtube.com/watch?v=RRKJiM9Njr8' },
    { songName: " I Don't Love You", url: 'https://www.youtube.com/watch?v=pyi0ZfuIIvo' },
    { songName: 'The Ghost Of You', url: 'https://www.youtube.com/watch?v=uCUpvTMis-Y' },

    ]

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Blackparadecover.jpg/220px-Blackparadecover.jpg' }}
                blurRadius={0.5}
            />
            <View style={{ height: 10 }}></View>
            <Image
                style={{ height: 200, width: 200, borderRadius: 20 }}
                source={{ uri: 'https://melhoreseuingles.files.wordpress.com/2014/01/my-chemical-romance.jpg' }}
            />

            <Text style={styles.maintext}>My Chemical Romance
            </Text>

            {/* rgba的方式取代color和opacity，可以確保view的透明度，卻又不會影響裡面的文字透明度 */}
            <View style={{ backgroundColor: 'rgba(230,230,230,0.5)', borderRadius: 10, width: '80%' }}>
                <Text style={{ margin: 15, color: '#555' }}>{bandIntroduction} </Text>
            </View>


            <View style={outerStyle.buttonContainer}>
                {/* map重複渲染寫法 */}
                {roleData.map((item, index) => {
                    return (
                        //沒設index會有warning
                        <MyRole
                            key={index}
                            roleName={item.name}
                            picUrl={item.pic}
                            showRoleDetail={item.func}
                        />
                    )
                }
                )}
            </View>

            <Text style={{ fontSize: 16, color: '#555' }}>歌曲推薦</Text>
            <View style={{
                backgroundColor: '', borderRadius: 3, margin: 5, padding: 5,
                flexDirection: 'row', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'
            }}>
                {songList.map((item, index) => {
                    return (
                        //沒設index會有warning
                        <Text key={index}
                            style={{ color: '#555', paddingLeft: 5, paddingRight: 5 }}
                            onPress={() => Linking.openURL(item.url)}>
                            {index + 1}.{item.songName}
                        </Text>
                    )
                }
                )}
            </View>


            <TouchableOpacity
                title=''
                onPress={() => props.navigation.push('Notification')}
            />
        </View>

    );
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
});
