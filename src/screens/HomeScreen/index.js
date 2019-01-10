import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Icon from 'react-native-vector-icons/Ionicons'
import SliderCS from '../../components/Slider'
import csgo from '../../csgo.jpg'
import pubg from '../../pubg.jpg'
import rust from '../../rust.jpg'
import spider_man from '../../spider_man.jpg'
import little_nightmares  from '../../little_nightmares.jpg'
import rainbow from '../../rainbow.jpg'
import gta from '../../gta.jpg'
import twd from '../../twd.jpg'


import { white } from 'ansi-colors';
const Page = ({ label }) => (
    <View style={styles.container}>
        <Text>
            {label}
        </Text>

    </View>
);



const PageHome = ({label, props}) => ( 
    <View style={styles.container}>
        <ScrollView style={{flex:1}}>
            <SliderCS onPress={()=>props.navigation.push("Detail")}/>
            <Text style={{fontWeight:'bold', color:'#FF7A00',marginLeft:10,marginTop:5, fontSize:12}}>Special Deals</Text>
            <ScrollView
            style = {{ height: 200, marginLeft:10}}
             horizontal={true}
             >
             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginLeft:0, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={pubg}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Pubg</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>
            
             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={csgo}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>CS:GO</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>
          

             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={little_nightmares}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Little Nightmare</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>

             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={rust}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Rust</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>

            </ScrollView>

            <View style={{height:200, margin:10, marginRight: 0,flexDirection:'row',backgroundColor:'#FF7A00'}}>
                <ImageBackground style={{flex:3}} source={spider_man}>

                </ImageBackground>
                <View style={{flex:2}}>
                <Text style={{fontWeight:'bold', color:'white',marginLeft:5}}>Game of the Day !</Text>
                <Text style={{fontWeight:'bold', color:'white',marginHorizontal:5,marginVertical:10,fontSize:18}}>Spider Man : Home Coming</Text>
                <Text style={{color:'white',marginLeft:5}}>Join the journey of the famous neighbor-friendly spiderman a.k.a Peter Parker ...</Text>
                
                <TouchableOpacity style ={{ height :20, width: 100, backgroundColor:"white", borderRadius: 10, marginVertical: 5, alignSelf:'center',justifyContent:"center", alignItems:'center'}}
                onPress={()=>props.navigation.navigate("Detail")}
                >
                        <Text style={{ color:'#FF7A00',marginLeft:5}}>View Detail</Text>
                </TouchableOpacity>
                </View>
            </View>

            <Text style={{fontWeight:'bold', color:'#FF7A00',marginLeft:10,fontSize:12}}>New Release </Text>
            <ScrollView
            style = {{ height: 200, marginLeft:10}}
             horizontal={true}
             >
             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5,marginLeft:0 , marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={rainbow} resizeMode="cover">

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Tom clancy's rainbow six</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>
            
             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={gta}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Gta V</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>
          

             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}} onPress={()=>props.navigation.navigate("Detail")}>
                <ImageBackground style={{flex:1}} source={twd}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>The walking dead</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>

             <TouchableOpacity style={{width:140,backgroundColor:'yellow', margin : 5, marginTop:2}}>
                <ImageBackground style={{flex:1}} source={rust}>

                </ImageBackground>
                <View style={{height:30,backgroundColor:'#FF7A00', paddingHorizontal:5}}>
                    <Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>Rust</Text>
                    <Text style={{color:'white', fontSize:11, fontWeight:'bold',alignSelf:"flex-end"}}>̶5̶̶6̶̶.̶̶0̶̶0̶ $ 50.00 $</Text>
                </View>

             </TouchableOpacity>

            </ScrollView>

        </ScrollView>
    </View>
)

const PageBestSeller = ({label}) => (
    <View style={styles.container}>
        <ScrollView style={{flex:1}}>
        <Text style={{ color:'#FF7A00',margin:5}}>All-kill Realtime Board</Text>
        <View style={{flexDirection:'row', height:200, padding:5}}>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'flex-end'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>1</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>3</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>4</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>5</Text>
            </View>
            <View style={{flex:4,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>Pubg</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>Dota 2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Cs:go</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Dokidoki</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Far Cry 5</Text>
            </View>
            <View style={{flex:2,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>16,231 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>10,238 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,123 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,096 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>7,000 pts</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>9d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>1d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>6d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>13d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>21d</Text>
            </View>
        </View>
        <Text style={{ color:'#FF7A00',margin:5,alignSelf:'flex-end',textDecorationLine:'underline'}}>View more ... </Text>

        <Text style={{ color:'#FF7A00',margin:5}}>Singleplayer</Text>
        <View style={{flexDirection:'row', height:200, padding:5}}>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'flex-end'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>1</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>3</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>4</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>5</Text>
            </View>
            <View style={{flex:4,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>Pubg</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>Dota 2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Cs:go</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Dokidoki</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Far Cry 5</Text>
            </View>
            <View style={{flex:2,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>16,231 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>10,238 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,123 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,096 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>7,000 pts</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>9d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>1d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>6d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>13d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>21d</Text>
            </View>
        </View>
        <Text style={{ color:'#FF7A00',margin:5,alignSelf:'flex-end',textDecorationLine:'underline'}}>View more ... </Text>

        <Text style={{ color:'#FF7A00',margin:5}}>Mulitplayer</Text>
        <View style={{flexDirection:'row', height:200, padding:5}}>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'flex-end'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>1</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>3</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>4</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>5</Text>
            </View>
            <View style={{flex:4,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>Pubg</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>Dota 2</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Cs:go</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Dokidoki</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>Far Cry 5</Text>
            </View>
            <View style={{flex:2,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>16,231 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>10,238 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,123 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>9,096 pts</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>7,000 pts</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text style={{ color:'#FF7A00', fontSize:18}}>9d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:16}}>1d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>6d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>13d</Text>
                    <Text style={{ color:'#FF7A00', fontSize:14}}>21d</Text>
            </View>
        </View>
        <Text style={{ color:'#FF7A00',margin:5,alignSelf:'flex-end',textDecorationLine:'underline'}}>View more ... </Text>

        </ScrollView>
    </View>
)

const PageTrending = ({label,props}) => ( 
    <View style={styles.container}>
        <ScrollView style={{flex:1, padding:5}}>
            <TouchableOpacity style={{height:200, margin:10}} onPress={()=>props.navigation.navigate("Detail")}>
               <ImageBackground style={{flex:1}} source={rainbow}/>
               <View style={{height:20,backgroundColor:'#FF7A00'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Tom Clancy's Rainbow Six Siege | Ubisoft® (US)</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={{height:200, margin:10}} onPress={()=>props.navigation.navigate("Detail")}>
               <ImageBackground style={{flex:1}} source={twd}/>
               <View style={{height:20,backgroundColor:'#FF7A00'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>The Walking Dead: The Final Season</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={{height:200, margin:10}} onPress={()=>props.navigation.navigate("Detail")}>
               <ImageBackground style={{flex:1}} source={little_nightmares}/>
               <View style={{height:20,backgroundColor:'#FF7A00'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Little Nightmares</Text>
               </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
)

const PageSignIn = ({ label, props }) => (
    <View style={styles.container}>
        <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 20, }}>
            <TextInput
                style={{ marginHorizontal: 10 }}
                placeholder="Username"
                placeholderTextColor="black"
                underlineColorAndroid="white" />
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 20, }}>
            <TextInput
                style={{ marginHorizontal: 10 }}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="black"
                underlineColorAndroid="white" />
        </View>

        <TouchableOpacity style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: '#FF7A00', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ margin: 10, color: 'white' }}>Sign In</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', margin: 5, justifyContent:'center'}}>
            <Text style={{color:'white'}}>Don't have account ?</Text>
            <TouchableOpacity onPress={()=>{}}>
                <Text style={{color:'#FF7A00'}}> Sign Up Now</Text>
            </TouchableOpacity>
        
        </View>
    </View>
)

const PageContact = ({ label, props }) => (
    <View style={styles.container}>
        <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 20, }}>
            <TextInput
                style={{ marginHorizontal: 10 }}
                placeholder="Your Email"
                placeholderTextColor="black"
                underlineColorAndroid="white" />
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 20, }}>
            <TextInput
                style={{ marginHorizontal: 10 }}
                placeholder="Your Content"
                multiline={true}
                placeholderTextColor="black"
                underlineColorAndroid="white" />
        </View>

        <TouchableOpacity style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: '#FF7A00', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ margin: 10, color: 'white' }}> Send </Text>
        </TouchableOpacity>

    </View>
)


export default class Example extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            showTextInput : false
        }
    }

    openDetail_Screen = () => 
    {
        this.props.navigation.push("Detail")
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{height:55,backgroundColor:'black', flexDirection:'row',alignItems:'center', padding :5}}>
                    <Icon name="ios-search" size={30} color="#FF7A00" onPress={()=>this.setState({showTextInput:!this.state.showTextInput})}/>
                    <View style={{flex:1, backgroundColor:"transparent"}}>
                        {!this.state.showTextInput?<Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'#FF7A00'}}> Home </Text>:
                        <TextInput  underlineColorAndroid="#53ac49"/>}
                    </View>
                    <Icon name="ios-cart" size={30} color="#FF7A00"/>

                </View>
                <ScrollableTabView
                    style={{backgroundColor:'black'}}
                    tabBarBackgroundColor="black"
                    tabBarActiveTextColor="#FF7A00"
                    renderTabBar={() => <TabBar underlineColor="#FF7A00" tabBarTextStyle={{color:'white'}}/>}>
                    <PageHome tabLabel={{ label: "Home" }} label="Page #1" props = {this.props} />
                    <PageTrending tabLabel={{ label: "Trending", badge: 3 }} label="Page #2"  props = {this.props}   />
                    <PageBestSeller tabLabel={{ label: "BestSeller" }} label="Page #3" props = {this.props}  />
                    <PageSignIn tabLabel={{ label: "Sign In" }} label="Page #5" />
                    <PageContact tabLabel={{ label: "Contact" }} label="Page #8 " />
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