import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintext: {
        fontSize: 60,
        textAlign: 'center'
    },
    bottmContainer: {
        //height: 60,
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
