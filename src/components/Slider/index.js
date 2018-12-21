import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
    height:300,
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => <Swiper 
    style={styles.wrapper} 
    showsButtons
    autoplay={true}>
  <View style={styles.slide1}>
    {/* <Text style={styles.text}>Hello Swiper</Text> */}
    <Image style={{flex:1}} source={{uri: "https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1545084399"}}/>
  </View>
  <View style={styles.slide2}>
    <Image style={{flex:1}} source={{uri: "https://phongvu.vn/cong-nghe/wp-content/uploads/2018/09/csgo-free.jpg"}}/>
  </View>
  <View style={styles.slide3}>
    <Image style={{flex:1}} source={{uri : "https://static.altchar.com/live/media/images/950x633_ct/10981_leak_ops_bd42765147e3022c5943b9b70e323546.jpg"}}/>
  </View>
</Swiper>