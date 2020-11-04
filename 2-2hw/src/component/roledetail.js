import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

function RoleDetail(detailData) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                style={{ width: 100, height: 100, borderRadius: 20, margin: 20 }}
                source={{ uri: detailData.mainPic }}
            />
            <Text style={{ textAlign: 'center', backgroundColor: 'white', opacity: 50, borderRadius: 10 }}>
                {detailData.introduction}
            </Text>

        </View>
    )
}

export default RoleDetail