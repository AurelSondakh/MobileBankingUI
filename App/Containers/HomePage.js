/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomePage = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.scanQrButton}>
                    <MaterialIcons name={'qr-code-scanner'} color={'#FFF'} size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.scanNotifButton}>
                    <MaterialIcons name={'notifications'} color={'#FFF'} size={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name={'search'} color={'#FFF'} size={28} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#070A0E',
        paddingTop: 60,
        paddingHorizontal: 10
    },
    headerContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    scanQrButton: {
        flex: 1
    },
    scanNotifButton: {
        marginRight: 20
    }
})

export default HomePage
