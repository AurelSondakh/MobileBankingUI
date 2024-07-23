/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Components
import Container from '../Components/Container';
import HeaderComponent from '../Components/HeaderComponent';
import BottomModalComponent from '../Components/BottomModalComponent';

// Data
import BankListData from '../Data/BankListData';

const height = Dimensions.get('screen').height;

const AddNewBeneficiaryPage = () => {
  const [bankName, setBankName] = useState('Paywise');
  const [showBankListModal, setShowBankListModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filterBankListData, setFilterBankListData] = useState(BankListData);

  useEffect(() => {
    let filteredData = BankListData.filter(item =>
      item.bankName.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilterBankListData(filteredData);
  }, [searchInput]);

  console.log(searchInput);

  const bankListComponent = () => {
    return (
      <View>
        <View style={styles.searchBarContainer}>
          <MaterialIcons name={'search'} color={'#A2A2A2'} size={24} />
          <TextInput
            placeholder={'Search bank name'}
            placeholderTextColor={'#A2A2A2'}
            style={styles.searchBarInput}
            value={searchInput}
            onChangeText={(e) => setSearchInput(e)}
          />
        </View>
        <View style={{height: height / 2}}>
          <FlatList
            removeClippedSubviews={false}
            data={filterBankListData}
            keyExtractor={item => item.bankId}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setBankName(item.bankName);
                    setShowBankListModal(false);
                  }}
                  style={styles.bankListContainer}>
                  <Text style={{color: '#000'}}>BANK {item.bankName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.newBenefictaryContainer}>
      <Container />
      <View>
        <HeaderComponent title={'Add New Beneficiary'} />
      </View>
      <View style={styles.bankNameContainer}>
        <Text style={styles.bankNameTitle}>Bank Name</Text>
        <TouchableOpacity
          onPress={() => setShowBankListModal(true)}
          style={styles.selectBankContainer}>
          <FontAwesome name={'bank'} color={'#FFF'} size={18} />
          <Text style={styles.bankName}>BANK {bankName}</Text>
          <FontAwesome name={'chevron-down'} color={'#FFF'} size={18} />
        </TouchableOpacity>
      </View>
      <View style={[styles.bankNameContainer, {marginTop: 20}]}>
        <Text style={styles.bankNameTitle}>Bank Account Number</Text>
        <View style={styles.bankAccountNumberContainer}>
          <FontAwesome name={'vcard-o'} color={'#FFF'} size={18} />
          <TextInput
            placeholder="Input your bank account number"
            placeholderTextColor={'#FFF'}
            style={styles.bankAccoutNumberInput}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.continueButtonContainer}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      {showBankListModal ? (
        <BottomModalComponent
          title={'Bank List'}
          content={bankListComponent}
          setShowModal={setShowBankListModal}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  newBenefictaryContainer: {
    flex: 1,
    backgroundColor: '#070A0E',
    paddingTop: 60,
  },
  bankNameContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  bankNameTitle: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  selectBankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    padding: 10,
  },
  bankName: {
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    flex: 1,
    marginHorizontal: 15,
  },
  bankAccountNumberContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  bankAccoutNumberInput: {
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginHorizontal: 15,
    flex: 1,
  },
  continueButtonContainer: {
    backgroundColor: '#E9C749',
    marginHorizontal: 20,
    marginTop: 50,
    paddingVertical: 15,
    borderRadius: 15,
  },
  continueButtonText: {
    color: '#030A04',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
  },
  searchBarContainer: {
    borderWidth: 2,
    borderColor: '#A2A2A2',
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBarInput: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    flex: 1,
  },
  bankListContainer: {
    marginHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#A2A2A2',
  },
});

export default AddNewBeneficiaryPage;
