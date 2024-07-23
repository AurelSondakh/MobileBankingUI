/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBarComponent = ({placeholderText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons name={'search'} color={'#FFF'} size={24} />
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={'#FFF'}
        style={styles.searchBarInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
    flex: 1,
  },
});

export default SearchBarComponent;
