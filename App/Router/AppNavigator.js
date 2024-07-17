/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LoginPage from '../Containers/LoginPage';
import HomePage from '../Containers/HomePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const TabBar = () => {
    return (
      <>
        <Tab.Navigator
          initialRouteName="HomePage"
          screenOptions={{
            tabBarLabelStyle: {display: 'none'},
            tabBarStyle: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderTopWidth: 0,
              position: 'absolute',
              height: 64,
            },
            tabBarItemStyle: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            tabBarHideOnKeyboard: true,
          }}>
          <Tab.Screen
            name="HomePage"
            component={HomePage}
            options={{
              tabBarIcon: ({focused}) => {
                const colorFocused = focused ? '#E9C749' : '#757D80';
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                      name={'home'}
                      color={colorFocused}
                      size={24}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        color: colorFocused,
                        paddingTop: 4,
                      }}>
                      Home
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Payments"
            component={HomePage}
            options={{
              tabBarIcon: ({focused}) => {
                const colorFocused = focused ? '#E9C749' : '#757D80';
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialIcons
                      name={'shape-line'}
                      color={colorFocused}
                      size={24}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        color: colorFocused,
                        paddingTop: 4,
                      }}>
                      Payments
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Send"
            component={HomePage}
            options={{
              tabBarIcon: ({focused}) => {
                const colorFocused = focused ? '#E9C749' : '#757D80';
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialIcons
                      name={'swap-horizontal-circle'}
                      color={colorFocused}
                      size={24}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        color: colorFocused,
                        paddingTop: 4,
                      }}>
                      Send
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Products"
            component={HomePage}
            options={{
              tabBarIcon: ({focused}) => {
                const colorFocused = focused ? '#E9C749' : '#757D80';
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                      name={'delicious'}
                      color={colorFocused}
                      size={24}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        color: colorFocused,
                        paddingTop: 4,
                      }}>
                      Products
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Account"
            component={HomePage}
            options={{
              tabBarIcon: ({focused}) => {
                const colorFocused = focused ? '#E9C749' : '#757D80';
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                      name={'user'}
                      color={colorFocused}
                      size={24}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        color: colorFocused,
                        paddingTop: 4,
                      }}>
                      Account
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </>
    );
  };

  let defaultRouteName = 'LoginPage';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={defaultRouteName}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
