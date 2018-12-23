import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/Detail'

import {createStackNavigator} from 'react-navigation'

export default RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen
    },
    {
        initialRouteName: 'Home',
        navigationOptions:
        {
            header:null
        }

    }
)


