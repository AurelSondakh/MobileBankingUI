/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('screen').width

const MenuIconComponent = ({title, iconName, iconColor, hide}) => {
    return (
        <TouchableOpacity disabled={hide} style={styles.menuContainer}>
            <View style={[styles.iconContainer, {backgroundColor: hide ? '#0E1419' : 'rgba(58, 97, 91, 0.8)'}]}>
                <MaterialIcons name={iconName} color={iconColor} size={38} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        paddingHorizontal: 10
    },
    iconContainer: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#D4D6CF',
        fontFamily: 'Poppins-Regular',
        width: 65,
        textAlign: 'center',
        fontSize: 11,
        marginTop: 8
    }
})

export default MenuIconComponent
