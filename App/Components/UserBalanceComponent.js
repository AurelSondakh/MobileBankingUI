/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserBalanceComponent = () => {
  const [showMoney, setShowMoney] = useState(true);
  const handleToggleShowMoney = () => {
    if (showMoney) setShowMoney(false);
    else setShowMoney(true);
  };

  return (
    <View style={styles.totalAmountContainer}>
      <View style={styles.availableMoneyContainer}>
        <Text style={styles.regularText}>Total Available Money</Text>
        <Text style={styles.amountText}>
          {showMoney ? '$ 7,483.54' : '******'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleToggleShowMoney}
        style={styles.hideBalanceContainer}>
        <FontAwesome
          style={{marginRight: 10}}
          name={showMoney ? 'eye-slash' : 'eye'}
          color={'#FFF'}
          size={24}
        />
        <Text style={styles.regularText}>
          {showMoney ? 'Hide' : 'Show'} Balance
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    totalAmountContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-between',
      },
      availableMoneyContainer: {},
      hideBalanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
});

export default UserBalanceComponent;
