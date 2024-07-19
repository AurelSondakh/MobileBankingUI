/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {TabView} from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Components
import Container from '../Components/Container';
import UserBalanceComponent from '../Components/UserBalanceComponent';
import MenuIconComponent from '../Components/MenuIconComponent';

// Data
import RecommendationData from '../Data/RecommendationData';

const PaymentsPage = () => {
  const [routes] = useState([
    {key: 'favorit', title: 'Favorit'},
    {key: 'pilihanLain', title: 'Pilihan Lain'},
    {key: 'financial', title: 'Financial'},
  ]);
  const [index, setIndex] = useState(0);

  const TabBarComponent = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 1,
        }}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={`index-tabbar-${i}`}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: index === i ? '#E9C749' : '#0E1419',
                borderRadius: 15,
                paddingVertical: 5,
              }}
              onPress={() => {
                setIndex(i);
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: index === i ? '#030A04' : '#80838C',
                  fontFamily: 'Poppins-Medium',
                }}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const favoritMenu = () => {
    return (
      <>
        <View style={styles.tabMenuContainer}>
          <MenuIconComponent
            title={'Pulsa/Paket Data'}
            iconName={'phone-android'}
            iconColor={'rgba(187, 214, 207, 0.8)'}
          />
          <MenuIconComponent
            title={'PLN'}
            iconName={'electric-bolt'}
            iconColor={'rgba(233, 199, 73, 0.8)'}
          />
          <MenuIconComponent
            title={'Air PDAM'}
            iconName={'water-drop'}
            iconColor={'rgba(118, 170, 193, 1)'}
          />
          <MenuIconComponent
            title={'Uang Elektronik'}
            iconName={'credit-card'}
            iconColor={'rgba(219, 160, 91, 1)'}
          />
        </View>
        <View style={styles.tabMenuContainer}>
          <MenuIconComponent
            title={'Pajak PBB'}
            iconName={'speaker-notes'}
            iconColor={'rgba(172, 232, 141, 0.7)'}
          />
          <MenuIconComponent
            title={'BPJS Kesehatan'}
            iconName={'shield'}
            iconColor={'rgba(108, 183, 81, 1)'}
          />
          <MenuIconComponent
            title={'Angsuran Kredit'}
            iconName={'notes'}
            iconColor={'rgba(217, 143, 183, 1)'}
          />
          <MenuIconComponent
            title={'Lainnya'}
            iconName={'grid-view'}
            iconColor={'rgba(255, 177, 86, 1)'}
          />
        </View>
      </>
    );
  };

  const pilihanLainMenu = () => {
    return (
      <>
        <View style={styles.tabMenuContainer}>
          <MenuIconComponent
            title={'Telkom'}
            iconName={'phone-in-talk'}
            iconColor={'rgba(187, 214, 207, 0.8)'}
          />
          <MenuIconComponent
            title={'PLN'}
            iconName={'house'}
            iconColor={'rgba(233, 199, 73, 0.8)'}
          />
          <MenuIconComponent
            title={'Pajak'}
            iconName={'add-business'}
            iconColor={'rgba(118, 170, 193, 1)'}
          />
          <MenuIconComponent
            title={'Pendidikan'}
            iconName={'menu-book'}
            iconColor={'rgba(219, 160, 91, 1)'}
          />
        </View>
        <View style={styles.tabMenuContainer}>
          <MenuIconComponent
            title={'Voucher Games'}
            iconName={'videogame-asset'}
            iconColor={'rgba(108, 183, 81, 1)'}
          />
          <MenuIconComponent
            title={'Donasi'}
            iconName={'monitor-heart'}
            iconColor={'rgba(217, 143, 183, 1)'}
          />
          <MenuIconComponent
            title={'Internet & TV Kabel'}
            iconName={'connected-tv'}
            iconColor={'rgba(255, 177, 86, 1)'}
          />
          <MenuIconComponent hide={true} />
        </View>
      </>
    );
  };

  const financialMenu = () => {
    return (
      <View style={styles.tabMenuContainer}>
        <MenuIconComponent
          title={'U Card'}
          iconName={'wallet-giftcard'}
          iconColor={'rgba(108, 183, 81, 1)'}
        />
        <MenuIconComponent
          title={'Proteksi'}
          iconName={'umbrella'}
          iconColor={'rgba(217, 143, 183, 1)'}
        />
        <MenuIconComponent hide={true} />
        <MenuIconComponent hide={true} />
      </View>
    );
  };

  const recommendationComponent = ({item}) => {
    let bannerSource = item.recommendationBanner;
    let logoSource = item.recommendationCompanyLogo;
    return (
      <View style={styles.recommendationListContainer}>
        <Image style={styles.banner} source={bannerSource} resizeMode="cover" />
        <View style={styles.recommendationTextContainer}>
          <Text style={styles.recommendationCategory}>
            {item.recommendationCategory}
          </Text>
          <Text style={styles.recommendationTitle}>
            {item.recommendationTitle}
          </Text>
        </View>
        <Image style={styles.logo} source={logoSource} resizeMode='contain' />
      </View>
    );
  };

  return (
    <View style={styles.paymentPageContainer}>
      <Container />
      <ScrollView style={styles.scrollContainer}>
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
        <View style={styles.userBalanceContainer}>
          <UserBalanceComponent />
        </View>
        <View style={styles.menuContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={({route}) => {
              switch (route.key) {
                case 'favorit':
                  return favoritMenu();
                case 'pilihanLain':
                  return pilihanLainMenu();
                case 'financial':
                  return financialMenu();
                default:
                  return null;
              }
            }}
            onIndexChange={setIndex}
            initialLayout={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            }}
            renderTabBar={TabBarComponent}
          />
        </View>
        <View style={styles.recomendContainer}>
          <Text style={styles.recommendTitle}>Recommendation Tab</Text>
          <View>
            <FlatList
              data={RecommendationData}
              horizontal
              keyExtractor={item => item.recommendationId}
              renderItem={(item, index) => recommendationComponent(item)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentPageContainer: {
    flex: 1,
    backgroundColor: '#070A0E',
    paddingTop: 60,
  },
  scrollContainer: {
    paddingHorizontal: 0,
  },
  userBalanceContainer: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  scanQrButton: {
    flex: 1,
  },
  scanNotifButton: {
    marginRight: 20,
  },
  menuContainer: {
    backgroundColor: '#0E1419',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabMenuContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recomendContainer: {
    backgroundColor: '#0E1419',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 80,
    paddingBottom: 30
  },
  recommendTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
  recommendationListContainer: {
    marginRight: 20,
    marginTop: 20,
  },
  banner: {
    width: 200,
    height: 120,
    borderRadius: 15,
  },
  recommendationTextContainer: {
    marginTop: 10,
    marginLeft: 5
  },
  recommendationCategory: {
    fontFamily: 'Poppins-Regular',
    color: '#80838C',
    marginBottom: 2
  },
  recommendationTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 15,
  }
});

export default PaymentsPage;
