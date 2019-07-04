import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Provider } from 'react-redux';
 
import CryptoTradingPairs from './pages/CryptoTradingPairs';
import Favorites from './pages/Favorites';
import TopMajorGainer from './pages/TopMajorGainer';

import theme from './styles/theme.style';
import configureStore from './store/configureStore';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CryptoTradingPairs,
    navigationOptions: ({ navigation }) => ({
      title: 'All Trading Pairs',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: theme.drawer.BACKGROUND_PRIMARY_COLOR,
      },
      headerTintColor: theme.drawer.TEXT_PRIMARY_COLOR,
    }),
  },
});
 
const Favorites_StackNavigator = createStackNavigator({
  Second: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      title: 'Favorite Trading Pairs',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: theme.drawer.BACKGROUND_PRIMARY_COLOR,
      },
      headerTintColor: theme.drawer.TEXT_PRIMARY_COLOR,
    }),
  },
});

const TopMajorGainer_StackNavigator = createStackNavigator({
  Third: {
    screen: TopMajorGainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Top Major Gainer 24h',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: theme.drawer.BACKGROUND_PRIMARY_COLOR,
      },
      headerTintColor: theme.drawer.TEXT_PRIMARY_COLOR,
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  CryptoTradingPairs: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'All Trading Pairs',
    },
  },
  Favorites: {
    screen: Favorites_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Favorite Trading Pairs',
    },
  },
  TopMajorGainer: {
    screen: TopMajorGainer_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Top Major Gainer 24h',
    },
  },
});

let Navigation = createAppContainer(DrawerNavigatorExample);
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
