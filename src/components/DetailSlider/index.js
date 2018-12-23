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
    <Image style={{flex:1}} source={{uri: "https://www.callofduty.com/content/dam/activision/callofduty/blackops/master/dlc/dlc1_screenshots_stadium_large_2.jpg"}}/>
  </View>
  <View style={styles.slide2}>
    <Image style={{flex:1}} source={{uri: "https://www.callofduty.com/content/dam/activision/callofduty/blackops/master/dlc/dlc1_screenshots_kowloon_large_1.jpg"}}/>
  </View>
  <View style={styles.slide3}>
    <Image style={{flex:1}} source={{uri : "https://www.callofduty.com/content/dam/activision/callofduty/blackops/master/dlc/dlc1_screenshots_berlinwall_large_3.jpg"}}/>
  </View>
</Swiper>