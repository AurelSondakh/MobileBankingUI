/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {RadialGradient} from 'react-native-gradients';

const Container = () => {
  const colorList = [
    {offset: '40%', color: '#3A615B', opacity: '1'},
    {offset: '100%', color: '#070A0E', opacity: '1'},
  ];

  return (
    <>
      <View style={[styles.gradientBg]}>
        <RadialGradient
          x="0%"
          y="0%"
          rx="120%"
          ry="30%"
          colorList={colorList}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Container;
