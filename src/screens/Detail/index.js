import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    TextInput,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    WebView
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from '../../components/DetailSlider'

const { width: WIDTH } = Dimensions.get("window");
const description = "The gameplay will feature the return of Dante and Nero as playable characters, along with a new character, named 'V'. The gameplay is similar to the other titles in the Devil May Cry series, focusing on fast-paced 'stylish action'. The player fights off hordes of demons with a variety of attacks and weapons and receives a style-rating in combat based on a number of factors, such as move variety, the length of a combo and dodging attacks. The music in the game will change based on the player's performance in combat."
const Page = ({ label }) => (
    <View style={styles.container}>
        <Text>
            {label}
        </Text>

    </View>
);

const PageHome = ({label}) => ( 
    <View style={styles.container}>
        <ScrollView style={{flex:1}}>
            <Slider/>
            <View style={{flex:1, justifyContent:'space-between', alignItems:'center', padding: 10}}>
              <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 80, borderRadius: 40, backgroundColor: 'white', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
                <View style={{flex:3, justifyContent:'flex-start', padding:10}}>
                  <Text  style={{fontWeight:'600'}}>STANDARD EDITION</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontWeight:'300'}}>$69.69</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity style={{height: 60, width:50, borderRadius:25, backgroundColor:'#FF7A00', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'200'}}>Buy</Text>
                    <Text style={{color:'white', fontWeight:'200'}}>Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity style={{height: 60, width:50, borderRadius:25, backgroundColor:'#1d262c', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'200'}}>Add to</Text>
                    <Text style={{color:'white', fontWeight:'200'}}>cart</Text>
                  </TouchableOpacity>
                </View>
              </View> 
              <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 80, borderRadius: 40, backgroundColor: 'white', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:3, justifyContent:'flex-start', padding:10}}>
                  <Text  style={{fontWeight:'600'}}>DELUXE EDITION</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontWeight:'300'}}>$99.69</Text>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity style={{height: 60, width:50, borderRadius:25, backgroundColor:'#FF7A00', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'200'}}>Buy</Text>
                    <Text style={{color:'white', fontWeight:'200'}}>Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity style={{height: 60, width:50, borderRadius:25, backgroundColor:'#1d262c', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'200'}}>Add to</Text>
                    <Text style={{color:'white', fontWeight:'200'}}>cart</Text>
                  </TouchableOpacity>
                </View>
              </View> 
            </View>
        </ScrollView>
    </View>
)

const PageDecription = ({label}) => ( 
    <View style={{flex:1, margin:10,  }}>
      <View style={{height:160}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://youtu.be/L2w0d6lH4kA" }}
        />
      </View>
      <Text style={{color:'#FF7A00', marginTop: 20, textAlign:'center'}}>{description}</Text>
    </View>
)

const PageRequirement = ({label}) => ( 
  <ScrollView>
    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
      <View style={{backgroundColor:'#FF7A00', width:300, height:40, borderRadius:20, justifyContent:'center'}}>
        <Text style={{color:'white', fontSize:18, fontWeight:'500', textAlign:'center'}}>Official Minimum Requirements</Text>
      </View>
    </View>
    <View style={{width:WIDTH, height:200, justifyContent:'space-around', padding:10}}>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>OS: WINDOWS® 7 (64-BIT Required)</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Processor: Intel® Core™ i7-4770 3.4GHz or better</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Memory: 4 GB RAM</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Graphics: NVIDIA® GeForce® GTX760 or better</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>DirectX: Version 11</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Storage: 35 GB available space</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Additional Notes: *Controllers recommended *Internet connection required for game activation.</Text>
    </View>
    <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
      <View style={{backgroundColor:'#FF7A00', width:350, height:40, borderRadius:20, justifyContent:'center'}}>
        <Text style={{color:'white', fontSize:18, fontWeight:'500', textAlign:'center'}}>Official Recommended Requirements</Text>
      </View>
    </View>
    <View style={{width:WIDTH, height:200, justifyContent:'space-around', padding:10}}>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>OS: WINDOWS® 10 (64-BIT Required)</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Processor: Intel® Core™ i7-4770 3.4GHz or better</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Memory: 8 GB RAM</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Graphics: NVIDIA® GeForce® GTX760 or better</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>DirectX: Version 11</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Storage: 35 GB available space</Text>
      <Text style={{color:'#FF7A00', fontSize:14, textAlign:'center'}}>Additional Notes: *Controllers recommended *Internet connection required for game activation.</Text>
    </View>
  </ScrollView>
)

const PageRating = ({label}) => ( 
  <View style={styles.container}>
    <ScrollView style={{flex:1, padding:5}}>
      <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Game Informer</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Game Informer</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>N4G</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Gamespot</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Eurogamer</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Polygon</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>GameZone</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Metacritic</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>Kotaku</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:10, width:WIDTH-30, height: 40, borderRadius: 20, backgroundColor: '#FF7A00', opacity: 0.7, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, paddingLeft:10}}>
            <Text style={{fontWeight:'600', color:'#ffffff'}}>IGN</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', flexDirection:'row'}}>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
            <Icon name="ios-star" size={30} color="yellow" style={{marginRight:5}}/>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)

const PageReaction = ({label}) => ( 
  <View style={styles.container}>
    <View style={{height:160}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://youtu.be/ufNnu1fvNsQ" }}
        />
      </View>
  </View>
)

export default class Example extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            showTextInput : false,
        }
    }


    render() {
        return (
            <View style={{ flex: 1, padding: 5,  }}>
                <View style={{height:55,backgroundColor:'black', flexDirection:'row',alignItems:'center', padding :5}}>
                    <Icon name="ios-arrow-back" size={30} color="#FF7A00" style={{marginLeft: 5}} onPress={()=>this.setState({showTextInput:!this.state.showTextInput})}/>
                    <View style={{flex:1, backgroundColor:"transparent"}}>
                        {!this.state.showTextInput?<Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'#FF7A00'}}>Call Of Duty - Back Ops</Text>:
                        <TextInput  underlineColorAndroid="#53ac49"/>}
                    </View>
                    <Icon name="ios-cart" size={30} color="#FF7A00" style={{marginRight: 5}}/>

                </View>
                <ScrollableTabView
                    style={{backgroundColor:'black'}}
                    tabBarBackgroundColor="black"
                    tabBarActiveTextColor="#FF7A00"
                    renderTabBar={() => <TabBar underlineColor="#FF7A00" tabBarTextStyle={{color:'white'}}/>}>
                    <PageHome tabLabel={{ label: "Home" }} label="Page #1" />
                    <PageDecription tabLabel={{ label: "Decription", }} label="Page #2 aka Long!" />
                    <PageRequirement tabLabel={{ label: "Requirement" }} label="Page #3" />
                    <PageRating tabLabel={{ label: "Rating", badge: 9 }} label="Page #4 aka Page" />
                    <PageReaction tabLabel={{ label: "Reaction" }} label="Page #5" />
                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});