/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules} from 'react-native';
import CustomBtn from './CustomBtn';

const CustomBtnManager = NativeModules.CustomBtnManager;
export default class App extends Component {

  onBtnClick = (e)=>{
    const {title,description} = e.nativeEvent;
    // alert(title+description);
    CustomBtnManager.rnCallNative({title,description}).then(res=>{
      // console.log('=======')
      alert(title+description);
    }).catch(err=>{

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomBtn style={{backgroundColor:'red',height:40,width:100}} title='原生按钮' onBtnClick={this.onBtnClick}/>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
