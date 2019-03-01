/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet,Alert, View, NativeModules} from 'react-native';
import CustomBtn from './CustomBtn';

const CustomBtnManager = NativeModules.CustomBtnManager;
export default class App extends Component {

  //原生执行js方法
  onBtnClick = (e)=>{
    const {title,description} = e.nativeEvent;    
    Alert.alert(
      '原生调用完成',
      '开始js调原生方法并且回调js',
      [        
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.jsCallNative()},
      ],
      { cancelable: false }
    )    
  }

  //js调用原生,并且回调js
  jsCallNative = ()=>{
    const p = {title:'js调用原生并且回调js',description:'调用成功'}
    CustomBtnManager.rnCallNative(p).then(res=>{      
      alert('js调用原生，收到回调');
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
