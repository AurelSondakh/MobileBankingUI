/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Container from '../Components/Container';
import UserBalanceComponent from '../Components/UserBalanceComponent';
import SearchBarComponent from '../Components/SearchBarComponent';

// Data
import SavedUserTransferData from '../Data/SavedUserTransferData';

const SendTransferPage = () => {
  const navigation = useNavigation();

  const getInitials = fullName => {
    const names = fullName.split(' ');
    return names
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase();
  };

  const savedUserList = ({item}) => {
    const usernameInitial = getInitials(item?.userName);

    return (
      <View style={styles.userListContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{usernameInitial}</Text>
        </View>
        <View>
          <Text style={styles.userListUsername}>{item?.userName}</Text>
          <Text style={styles.userListDetail}>{item?.bankName}</Text>
          <Text style={styles.userListDetail}>{item?.accountNumber}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.sendTransferContainer}>
      <Container />
      <View style={styles.userBalanceContainer}>
        <UserBalanceComponent />
      </View>
      <View style={styles.savedUserContainer}>
        <View style={styles.savedUserHeader}>
          <Text style={styles.savedUserTitle}>Benefictary List</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddNewBenefictaryPage')}>
            <Text
              style={[
                styles.savedUserTitle,
                {textDecorationLine: 'underline'},
              ]}>
              Add New User
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarComponent}>
          <SearchBarComponent placeholderText={'Search by name or bank'} />
        </View>
        <View style={styles.savedUserListContainer}>
          <FlatList
            data={SavedUserTransferData}
            keyExtractor={item => item.userId}
            renderItem={(item, index) => savedUserList(item)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTransferContainer: {
    flex: 1,
    backgroundColor: '#070A0E',
    paddingTop: 60,
  },
  userBalanceContainer: {
    paddingHorizontal: 10,
  },
  savedUserContainer: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    marginBottom: 130,
  },
  savedUserHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savedUserTitle: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  searchBarComponent: {
    marginTop: 15,
  },
  savedUserListContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#FFF',
  },
  userListContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontSize: 20,
    color: '#fff',
  },
  userListUsername: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
    fontSize: 14,
  },
  userListDetail: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 13,
  },
});

export default SendTransferPage;
