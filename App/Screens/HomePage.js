/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

// DATA
import CardData from '../Data/CardData';
import PaymentHistoryData from '../Data/PaymentHistoryData';

// Components
import Container from '../Components/Container';
import UserBalanceComponent from '../Components/UserBalanceComponent';

const width = Dimensions.get('screen').width;

const HomePage = () => {
  const navigation = useNavigation()

  const cardListComponent = ({item}) => {
    let imageSource = item.cardImage;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={imageSource}
            resizeMode="contain"
          />
          <Entypo name={'dots-three-horizontal'} color={'#FFF'} size={18} />
        </View>
        <View style={styles.cardInformationContainer}>
          <Text style={styles.regularText}>Balance</Text>
          <Text style={styles.amountText}>$ {item.totalBalance}</Text>
          <Text style={[styles.regularText, {fontSize: 10}]}>
            {item.cardName} - {item.cardNumber}
          </Text>
        </View>
      </View>
    );
  };

  const paymentListComponent = ({item}) => {
    let imageSource = item.paymentProductImage;
    return (
      <View style={styles.paymentListContainer}>
        <View>
          <Image
            style={styles.paymentImage}
            source={imageSource}
            resizeMode="contain"
          />
        </View>
        <View style={styles.paymentProductContainer}>
          <Text style={styles.mediumText}>{item.productName}</Text>
          <Text style={[styles.regularText, {fontSize: 13, color: '#646E72'}]}>{item.paymentPurpose}</Text>
        </View>
        <View>
          <Text style={[styles.mediumText, {color: item.paymentType === 'income' ? '#7CE8A8' : '#F9797A' }]}>
            {item.paymentType === 'income'
              ? `$${item.totalPayment}`
              : `-$${item.totalPayment}`}
          </Text>
          <Text style={[styles.regularText, {fontSize: 13, color: '#646E72'}]}>{item.paymentDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <Container />
      <ScrollView style={styles.scrollContainer}>
        <UserBalanceComponent />
        <View>
          <FlatList
            horizontal={true}
            data={CardData}
            renderItem={(item, index) => cardListComponent(item)}
            keyExtractor={item => item?.cardId}
          />
        </View>
        <View style={styles.expencesContainer}>
          <Text style={styles.regularText}>December Expences</Text>
          <Text style={styles.amountText}>$ 3,478.48</Text>
          <View style={styles.expencesLineContainer}>
            <View style={styles.firstExpences} />
            <View style={styles.secondExpences} />
            <View style={styles.thirdExpences} />
            <View style={styles.forthExpences} />
            <View style={styles.fifthExpences} />
          </View>
        </View>
        <View style={styles.paymentHistoryContainer}>
          <View style={styles.paymentHistoryHeader}>
            <Text style={styles.paymentHistoryTitle}>Payment History</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentHistoryPage')}>
              <MaterialIcons name={'chevron-right'} color={'#FFF'} size={32} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              nestedScrollEnabled={true}
              data={PaymentHistoryData}
              renderItem={(item, index) => paymentListComponent(item)}
              keyExtractor={item => item?.paymentId}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#070A0E',
    paddingTop: 60
  },
  scrollContainer: {
    paddingHorizontal: 10
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  scanQrButton: {
    flex: 1,
  },
  scanNotifButton: {
    marginRight: 20,
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
  cardContainer: {
    backgroundColor: '#0E141A',
    marginRight: 10,
    width: width / 2.2,
    borderRadius: 15,
    paddingBottom: 20,
    marginTop: 20,
  },
  cardImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#12181E',
  },
  cardImage: {
    width: 75,
    height: 75,
  },
  cardInformationContainer: {
    paddingLeft: 20,
    marginTop: 30,
  },
  expencesContainer: {
    padding: 25,
    backgroundColor: '#0E141A',
    borderRadius: 15,
    marginTop: 20,
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
  paymentHistoryContainer: {
    backgroundColor: '#0E141A',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 80
  },
  paymentHistoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 15,
    paddingTop: 20,
  },
  paymentHistoryTitle: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  paymentListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderBottomColor: '#171D22'
  },
  paymentImage: {
    width: 75,
    height: 75,
  },
  paymentProductContainer: {
    flex: 1
  },
  mediumText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFF'
  }
});

export default HomePage;
