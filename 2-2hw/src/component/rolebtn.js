import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import outerStyle from './styles/style'


function MyRole(roleData) {
    return (
        <TouchableOpacity style={outerStyle.button}
            onPress={roleData.showRoleDetail}
        >
            <Image
                style={{ width: 100, height: 100, borderRadius: 20 }}
                source={{ uri: roleData.picUrl }}
            />
            <Text style={outerStyle.buttonText}>{roleData.roleName}</Text>
        </TouchableOpacity>
    )
}

export default MyRole