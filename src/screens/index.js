import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from '../components/Slider'

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
            <View style={{height:200, margin:20,justifyContent:'center', alignItems:'center',backgroundColor:'yellow'}}>
                <Text>Fifa 2018</Text>
            </View>
            <View style={{height:200, margin:20,justifyContent:'center', alignItems:'center',backgroundColor:'green'}}>
                <Text>Fifa 2018</Text>
            </View>
            <View style={{height:200, margin:20,justifyContent:'center', alignItems:'center',backgroundColor:'red'}}>
                <Text>Fifa 2018</Text>
            </View>
        </ScrollView>
    </View>
)

const PageTrending = ({label}) => ( 
    <View style={styles.container}>
        <ScrollView style={{flex:1, padding:5}}>
            <View style={{height:200, margin:10,justifyContent:'center', alignItems:'center',backgroundColor:'yellow'}}>
                <Text>Fifa 2018</Text>
            </View>
            <View style={{height:200, margin:10,justifyContent:'center', alignItems:'center',backgroundColor:'green'}}>
                <Text>Pubg</Text>
            </View>
            <View style={{height:200, margin:10,justifyContent:'center', alignItems:'center',backgroundColor:'blue'}}>
                <Text>Titan</Text>
            </View>
        </ScrollView>
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


    render() {
        return (
            <View style={{ flex: 1, padding: 5,  }}>
                <View style={{height:55,backgroundColor:'black', flexDirection:'row',alignItems:'center', padding :5}}>
                    <Icon name="ios-search" size={30} color="#FF7A00" onPress={()=>this.setState({showTextInput:!this.state.showTextInput})}/>
                    <View style={{flex:1, backgroundColor:"transparent"}}>
                        {!this.state.showTextInput?<Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'#FF7A00'}}> Home </Text>:
                        <TextInput  underlineColorAndroid="#53ac49"/>}
                    </View>
                    <Icon name="ios-cart" size={30} color="#FF7A00"/>

                </View>
                <ScrollableTabView
                    tabBarActiveTextColor="#FF7A00"
                    renderTabBar={() => <TabBar underlineColor="#FF7A00" tabBarTextStyle={{color:'white'}}/>}>
                    <PageHome tabLabel={{ label: "Home" }} label="Page #1" />
                    <PageTrending tabLabel={{ label: "Trending", badge: 3 }} label="Page #2 aka Long!" />
                    <Page tabLabel={{ label: "BestSeller" }} label="Page #3" />
                    <Page tabLabel={{ label: "Page #4 aka Page" }} label="Page #4 aka Page" />
                    <Page tabLabel={{ label: "Page #5" }} label="Page #5" />
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