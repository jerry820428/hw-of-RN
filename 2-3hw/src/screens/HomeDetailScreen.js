import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RoleDetail from '../component/roledetail';


const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const roleIntroduction = (string) => {
    switch (string) {
        case 'Chris Martin':
            return (
                <RoleDetail
                    mainPic='https://pyxis.nymag.com/v1/imgs/a5e/3f2/4760b9dfed69639be969a66a0b81253043-21-chris-martin.rsquare.w700.jpg'
                    introduction='全名Christopher Anthony John Chris Martin，為Coldplay的主唱、吉他手與鋼琴手，超棒!!'
                />
            )
            break;
        case 'Jonny Buckland':
            return (
                <RoleDetail
                    mainPic='https://www.famousbirthdays.com/headshots/jonny-buckland-4.jpg'
                    introduction='全名Jonathan Mark "Jonny" Buckland，為Coldplay的主奏吉他手，與Chris Martin組成Pectoralz樂團，為Coldplay的前身，很棒'
                />
            )
            break;

        case 'Guy Berryman':
            return (
                <RoleDetail
                    mainPic='https://alchetron.com/cdn/guy-berryman-6f043bab-cf30-4204-b728-76d331e0a12-resize-750.jpeg'
                    introduction='全名Guy Rupert Berryman，為Coldplay的主貝斯手，為第三位加入的團員，加入後樂團更名為海星樂團，很棒'
                />
            )
            break;

        case 'will champion':
            return (
                <RoleDetail
                    mainPic='https://i.pinimg.com/originals/9c/90/a7/9c90a71cecd54f1ad395de491f1a08ab.jpg'
                    introduction='全名William "Will" Champion，為Coldplay的鼓手，為最後加入的團員，加入後樂團更名為Coldplay(酷玩樂團)，很棒'
                />
            )
            break;
        default:
            break;
    }
}

export default function HomeDetailScreen(props) {

    //也可以用這種方式來取代
    //const name = props.route.params.name || 'nothing get'

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={{ uri: 'https://pbs.twimg.com/media/A64UoOeCMAACccJ.jpg' }}
                blurRadius={1}
            />

            {roleIntroduction(props.route.params.name)}

            {/* <RoleDetail
                mainPic='https://pyxis.nymag.com/v1/imgs/a5e/3f2/4760b9dfed69639be969a66a0b81253043-21-chris-martin.rsquare.w700.jpg'
                introduction='主唱，超棒'
            /> */}


            {/* name為接收值的key */}
            {/* ||後面為當沒接收到值的時候的預設值 */}
            {/* 下面也可以用{name}來取代(參考上方的const) */}
            <Text style={{ fontWeight: 'bold' }}>{props.route.params.name || 'nothing get'}</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                    style={{ height: 100, width: 100, borderRadius: 20 }}
                    source={{ uri: 'https://www.musicjournal.com.br/wp-content/uploads/2019/10/coldplay-1.jpg' }}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>返回</Text>
            </TouchableOpacity>


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
        textAlign: 'center'
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
