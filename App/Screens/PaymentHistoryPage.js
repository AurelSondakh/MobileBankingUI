/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// Components
import Container from '../Components/Container';
import HeaderComponent from '../Components/HeaderComponent';
import SearchBarComponent from '../Components/SearchBarComponent';

// Data
import PaymentHistoryData from '../Data/PaymentHistoryData';

const width = Dimensions.get('screen').width;

const PaymentHistoryPage = () => {
  const navigation = useNavigation();
  const paymentListComponent = ({item}) => {
    let imageSource = item.paymentProductImage;
    return (
      <View
        style={styles.paymentListContainer}>
        <View>
          <Image
            style={styles.paymentImage}
            source={imageSource}
            resizeMode="contain"
          />
        </View>
        <View style={styles.paymentProductContainer}>
          <Text style={styles.mediumText}>{item.productName}</Text>
          <Text style={[styles.regularText, {fontSize: 13, color: '#646E72'}]}>
            {item.paymentPurpose}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.mediumText,
              {color: item.paymentType === 'income' ? '#7CE8A8' : '#F9797A'},
            ]}>
            {item.paymentType === 'income'
              ? `$${item.totalPayment}`
              : `-$${item.totalPayment}`}
          </Text>
          <Text style={[styles.regularText, {fontSize: 13, color: '#646E72'}]}>
            {item.paymentDate}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.paymentHistoryContainer}>
      <Container />
      <View style={styles.scrollContainer}>
        <HeaderComponent title={'Payment History'} />
        <View style={styles.searchBarComponent}>
          <SearchBarComponent placeholderText={'Search by product name'} />
        </View>
        <View style={styles.expencesContainer}>
          <View style={styles.expencesMonthContainer}>
            <View>
              <Text style={styles.regularText}>December Expences</Text>
              <Text style={styles.amountText}>$ 3,478.48</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name={'calendar-month'} color={'#FFF'} size={32} />
            </TouchableOpacity>
          </View>
          <View style={styles.expencesLineContainer}>
            <View style={styles.firstExpences} />
            <View style={styles.secondExpences} />
            <View style={styles.thirdExpences} />
            <View style={styles.forthExpences} />
            <View style={styles.fifthExpences} />
          </View>
        </View>
      </View>
      <View style={styles.paymentListParentContainer}>
        <FlatList
          data={PaymentHistoryData}
          renderItem={(item, index) => paymentListComponent(item)}
          keyExtractor={item => item?.paymentId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentHistoryContainer: {
    flex: 1,
    backgroundColor: '#070A0E',
    paddingTop: 60,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  searchBarComponent: {
    marginTop: 25
  },
  regularText: {
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  amountText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  expencesContainer: {
    padding: 25,
    backgroundColor: '#0E141A',
    borderRadius: 15,
    marginTop: 20,
  },
  expencesMonthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expencesLineContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  firstExpences: {
    borderWidth: 4,
    width: width / 5,
    borderColor: '#FFE14F',
  },
  secondExpences: {
    borderWidth: 4,
    width: width / 5,
    borderColor: '#CA72E9',
  },
  thirdExpences: {
    borderWidth: 4,
    width: width / 10,
    borderColor: '#338FFF',
  },
  forthExpences: {
    borderWidth: 4,
    width: width / 6,
    borderColor: '#2AC46A',
  },
  fifthExpences: {
    borderWidth: 4,
    width: width / 7,
    borderColor: '#4A5356',
  },
  paymentListParentContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#0E1419',
    flex: 1,
    marginHorizontal: 10,
  },
  paymentListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderBottomColor: '#171D22',
  },
  paymentImage: {
    width: 75,
    height: 75,
  },
  paymentProductContainer: {
    flex: 1,
  },
  mediumText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFF',
  },
});

export default PaymentHistoryPage;
