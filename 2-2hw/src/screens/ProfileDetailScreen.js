
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import RoleDetail from '../component/roledetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const roleIntroduction = (string) => {
    switch (string) {
        case 'Gerard Way':
            return (
                <RoleDetail
                    mainPic='https://ysolife.com/wp-content/uploads/2018/11/https-blueprint-api-production.s3.amazonaws.com-uploads-card-image-656115-12531220-8e6c-400e-a332-4c8d7ba94408.jpg'
                    introduction='My Chemical Romance的主唱，同時也是一位作曲家兼漫畫家，很棒'
                />
            )
            break;
        case 'Mikey Way':
            return (
                <RoleDetail
                    mainPic='https://vignette.wikia.nocookie.net/mychemicalromance/images/b/b1/F9D8DFAB-9798-421F-B993-61537C67B94A.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222153742'
                    introduction='My Chemical Romance的貝斯手，同時也是主唱的弟弟，很棒'
                />
            )
            break;

        case 'Frank Iero':
            return (
                <RoleDetail
                    mainPic='https://au.rollingstone.com/wp-content/uploads/2017/02/frank-iero-accident.jpg'
                    introduction='My Chemical Romance的節奏吉他手以及和聲，很棒'
                />
            )
            break;

        case 'Ray Toro':
            return (
                <RoleDetail
                    mainPic='https://vignette.wikia.nocookie.net/mychemicalromance/images/4/42/B17E02FF-DFF4-4B35-BD0C-937D3CD9BCE0.jpeg/revision/latest/top-crop/width/360/height/450?cb=20191222025543'
                    introduction='My Chemical Romance的主吉他手以及和聲，很棒'
                />
            )
            break;

        case 'Bob Bryar':
            return (
                <RoleDetail
                    mainPic='https://pbs.twimg.com/profile_images/697699830471258112/2CQUf0Nr_400x400.png'
                    introduction='My Chemical Romance的鼓手，很棒'
                />
            )
            break;
        default:
            break;
    }
}

export default function ProfileDetailScreen(props) {
    return (
        <View style={styles.container}>

            <Image
                style={styles.background}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Blackparadecover.jpg/220px-Blackparadecover.jpg' }}
                blurRadius={0.5}
            />

            {roleIntroduction(props.route.params.name)}


            <Text style={{ fontWeight: 'bold' }}>{props.route.params.name || 'nothing get'}</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                    style={{ height: 100, width: 100, borderRadius: 20 }}
                    source={{ uri: 'https://melhoreseuingles.files.wordpress.com/2014/01/my-chemical-romance.jpg' }}
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
        height: windowHeight,
        width: windowWidth,
        position: 'absolute',

    },
});
