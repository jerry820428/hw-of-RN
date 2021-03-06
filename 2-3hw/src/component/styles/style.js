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
    buttonContainer: {
        //height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 13,
        //color: 'red',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        padding: 10,
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainView: {
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
});