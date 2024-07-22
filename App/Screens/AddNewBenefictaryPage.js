/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

// Components
import Container from '../Components/Container';

const AddNewBenefictaryPage = () => {
    return (
        <View style={styles.newBenefictaryContainer}>
            <Container />
            <Text style={{ color: '#FFF' }}>BENEFICTARY PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    newBenefictaryContainer: {
        flex: 1,
        backgroundColor: '#070A0E',
        paddingTop: 60
    }
})

export default AddNewBenefictaryPage
