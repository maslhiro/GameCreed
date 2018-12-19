import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View,
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
        <Slider/>
        <View style={{flex:1}}/>
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
                <View style={{height:55,backgroundColor:'#FF7A00', flexDirection:'row',alignItems:'center', padding :5}}>
                    <Icon name="ios-search" size={30} color="black" onPress={()=>this.setState({showTextInput:!this.state.showTextInput})}/>
                    <View style={{flex:1, backgroundColor:"transparent"}}>
                        {!this.state.showTextInput?<Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'black'}}> Home </Text>:
                        <TextInput  underlineColorAndroid="#53ac49"/>}
                    </View>
                    <Icon name="ios-cart" size={30} color="black"/>

                </View>
                <ScrollableTabView
                    tabBarActiveTextColor="#FF7A00"
                    renderTabBar={() => <TabBar underlineColor="#FF7A00" />}>
                    <PageHome tabLabel={{ label: "Home" }} label="Page #1" />
                    <Page tabLabel={{ label: "Trending", badge: 3 }} label="Page #2 aka Long!" />
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